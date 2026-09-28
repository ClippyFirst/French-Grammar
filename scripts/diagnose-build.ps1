$ErrorActionPreference = "Continue"

$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$LogDir = Join-Path $Root "diagnostics"
$LogFile = Join-Path $LogDir "build-diagnostic-$Timestamp.log"

New-Item -ItemType Directory -Force $LogDir | Out-Null

$Results = New-Object System.Collections.Generic.List[string]

function Write-Section {
    param([string]$Title)

    $line = "`n" + ("=" * 90)
    $Results.Add($line)
    $Results.Add(" $Title")
    $Results.Add(("=" * 90))
}

function Write-Result {
    param([string]$Text)

    $Results.Add($Text)
    Write-Host $Text
}

function Run-Captured {
    param(
        [string]$Name,
        [string]$Command
    )

    Write-Section $Name

    Write-Result "COMMAND:"
    Write-Result $Command
    Write-Result ""

    try {
        $output = Invoke-Expression "$Command 2>&1" |
            Out-String

        Write-Result $output

        return $output
    }
    catch {
        Write-Result "EXCEPTION:"
        Write-Result ($_ | Out-String)
        return ""
    }
}

Write-Section "ENVIRONMENT"

Write-Result "Timestamp: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss zzz')"
Write-Result "PowerShell: $($PSVersionTable.PSVersion)"
Write-Result "OS: $([System.Environment]::OSVersion.VersionString)"
Write-Result "Root: $Root"

Run-Captured "GIT STATUS" "git status --short --branch"
Run-Captured "GIT HEAD" "git rev-parse HEAD"
Run-Captured "GIT ORIGIN" "git remote -v"
Run-Captured "GIT BRANCHES" "git branch -vv"

Run-Captured "NODE VERSION" "node --version"
Run-Captured "NPM VERSION" "npm --version"

if (Test-Path "package.json") {
    Write-Section "PACKAGE.JSON"

    $package = Get-Content "package.json" -Raw -Encoding UTF8
    Write-Result $package
}
else {
    Write-Result "ERROR: package.json not found."
}

Write-Section "CONTENT FILE AUDIT"

$contentRoot = Join-Path $Root "src/content"

if (-not (Test-Path $contentRoot)) {
    Write-Result "ERROR: src/content does not exist."
}
else {

    $files = Get-ChildItem `
        -Path $contentRoot `
        -Recurse `
        -File `
        -Include *.md,*.mdx

    Write-Result "Markdown/MDX files found: $($files.Count)"
    Write-Result ""

    $required = @(
        "title_uk",
        "title_fr",
        "description_uk",
        "category"
    )

    $frontmatterErrors = 0

    foreach ($file in $files) {

        $relative = $file.FullName.Substring($Root.Length + 1)

        try {
            $raw = Get-Content $file.FullName -Raw -Encoding UTF8
        }
        catch {
            Write-Result "ERROR | $relative | cannot read file"
            $frontmatterErrors++
            continue
        }

        # BOM detection
        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)

        if ($bytes.Length -ge 3 `
            -and $bytes[0] -eq 0xEF `
            -and $bytes[1] -eq 0xBB `
            -and $bytes[2] -eq 0xBF) {

            Write-Result "WARN  | $relative | UTF-8 BOM detected"
        }

        # Opening frontmatter
        if ($raw -notmatch '^\uFEFF?---\s*(\r?\n|$)') {
            Write-Result "ERROR | $relative | missing opening frontmatter ---"
            $frontmatterErrors++
            continue
        }

        # Locate closing delimiter
        $lines = $raw -split "`r?`n"

        $closingIndex = -1

        for ($i = 1; $i -lt $lines.Count; $i++) {
            if ($lines[$i].Trim() -eq "---") {
                $closingIndex = $i
                break
            }
        }

        if ($closingIndex -eq -1) {
            Write-Result "ERROR | $relative | missing closing frontmatter ---"
            $frontmatterErrors++
            continue
        }

        if ($closingIndex -eq 1) {
            Write-Result "ERROR | $relative | empty frontmatter"
            $frontmatterErrors++
            continue
        }

        $frontmatter = ($lines[1..($closingIndex - 1)]) -join "`n"

        foreach ($field in $required) {

            $pattern = "(?m)^\s*" + [regex]::Escape($field) + "\s*:"

            if ($frontmatter -notmatch $pattern) {
                Write-Result "ERROR | $relative | missing required field: $field"
                $frontmatterErrors++
            }
        }

        # Detect duplicate YAML keys for important metadata.
        foreach ($field in $required + @(
            "canonical_ids",
            "level",
            "status",
            "category",
            "description_uk"
        )) {

            $matches = [regex]::Matches(
                $frontmatter,
                "(?m)^\s*" + [regex]::Escape($field) + "\s*:"
            )

            if ($matches.Count -gt 1) {
                Write-Result "ERROR | $relative | duplicate YAML key: $field ($($matches.Count)x)"
                $frontmatterErrors++
            }
        }

        # Validate canonical ID format when present.
        $canonicalMatch = [regex]::Match(
            $frontmatter,
            '(?m)^\s*canonical_ids\s*:\s*\[(.*?)\]'
        )

        if ($canonicalMatch.Success) {

            $ids = [regex]::Matches(
                $canonicalMatch.Groups[1].Value,
                'FR-\d{3}'
            )

            foreach ($id in $ids) {

                if ($id.Value -notmatch '^FR-\d{3}$') {
                    Write-Result "ERROR | $relative | invalid canonical ID: $($id.Value)"
                    $frontmatterErrors++
                }
            }
        }
    }

    Write-Result ""
    Write-Result "Frontmatter errors: $frontmatterErrors"
}

Write-Section "TARGET FILE: complex-agreement.md"

$target = Join-Path $Root "src/content/fr/complex-agreement.md"

if (Test-Path $target) {

    $lines = Get-Content $target -Encoding UTF8

    for ($i = 0; $i -lt [Math]::Min($lines.Count, 45); $i++) {
        Write-Result ("{0,4}: {1}" -f ($i + 1), $lines[$i])
    }

}
else {
    Write-Result "ERROR: target file not found."
}

Write-Section "CONTENT CONFIG"

$configCandidates = @(
    "src/content.config.ts",
    "src/content/config.ts"
)

foreach ($candidate in $configCandidates) {

    $full = Join-Path $Root $candidate

    if (Test-Path $full) {
        Write-Result "FOUND: $candidate"
        Write-Result (Get-Content $full -Raw -Encoding UTF8)
    }
}

Write-Section "ASTRO BUILD"

$buildOutput = Run-Captured `
    "npm run build" `
    "npm run build"

Write-Section "ASTRO BUILD ERROR EXTRACTION"

if ($buildOutput) {

    $errorLines = $buildOutput -split "`r?`n" |
        Where-Object {
            $_ -match `
            'error|Error|ERROR|InvalidContent|InvalidContentEntryData|Required|failed|FAILED|exception|Exception|Assertion failed|Stack trace|WARN|warning'
        }

    if ($errorLines.Count -eq 0) {
        Write-Result "No obvious error/warning lines extracted."
    }
    else {
        foreach ($line in $errorLines) {
            Write-Result $line
        }
    }
}

Write-Section "NPM SCRIPTS"

if (Test-Path "package.json") {

    try {

        $pkg = Get-Content "package.json" -Raw -Encoding UTF8 |
            ConvertFrom-Json

        if ($pkg.scripts) {

            foreach ($property in $pkg.scripts.PSObject.Properties) {
                Write-Result "$($property.Name): $($property.Value)"
            }

        }
    }
    catch {
        Write-Result "Could not parse package.json."
    }
}

Write-Section "OPTIONAL CHECK COMMAND"

$hasCheck = $false

if (Test-Path "package.json") {

    try {

        $pkg = Get-Content "package.json" -Raw -Encoding UTF8 |
            ConvertFrom-Json

        $hasCheck = $null -ne $pkg.scripts.check

    }
    catch {}
}

if ($hasCheck) {

    $checkOutput = Run-Captured `
        "npm run check" `
        "npm run check"

}
else {
    Write-Result "npm run check is not defined."
}

Write-Section "TYPE / CONFIG FILE INVENTORY"

$interesting = Get-ChildItem `
    -Path $Root `
    -Recurse `
    -File `
    -Include *.ts,*.js,*.mjs,*.cjs,*.astro `
    -ErrorAction SilentlyContinue |
    Where-Object {
        $_.FullName -notmatch '\\node_modules\\' `
        -and $_.FullName -notmatch '\\dist\\' `
        -and $_.FullName -notmatch '\\.git\\'
    }

Write-Result "Source/config files: $($interesting.Count)"

Write-Section "DIST STATUS"

$dist = Join-Path $Root "dist"

if (Test-Path $dist) {

    $distFiles = Get-ChildItem $dist -Recurse -File -ErrorAction SilentlyContinue

    Write-Result "dist exists."
    Write-Result "dist files: $($distFiles.Count)"
    Write-Result "dist size MB: $(
        [Math]::Round(
            (($distFiles | Measure-Object Length -Sum).Sum / 1MB),
            2
        )
    )"

}
else {
    Write-Result "dist does not exist."
}

Write-Section "SUMMARY"

Write-Result "Diagnostic log:"
Write-Result $LogFile

Write-Result ""
Write-Result "The log contains:"
Write-Result "1. Git state"
Write-Result "2. Node/npm versions"
Write-Result "3. package.json"
Write-Result "4. Full content frontmatter audit"
Write-Result "5. complex-agreement.md inspection"
Write-Result "6. content schema"
Write-Result "7. npm run build output"
Write-Result "8. extracted errors/warnings"
Write-Result "9. npm scripts"
Write-Result "10. optional npm run check"
Write-Result "11. dist status"

$Results | Set-Content -Path $LogFile -Encoding UTF8

Write-Host ""
Write-Host "============================================================"
Write-Host "DIAGNOSTICS COMPLETE"
Write-Host "LOG: $LogFile"
Write-Host "============================================================"
