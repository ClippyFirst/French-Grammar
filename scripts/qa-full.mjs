import { spawn } from 'node:child_process';
import { appendFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const reportPath = resolve(root, 'qa-output.txt');

const stages = [
  ['test', 'test'],
  ['audit:canonical', 'audit:canonical'],
  ['audit:site-categories', 'audit:site-categories'],
  ['audit:content-schema', 'audit:content-schema'],
  ['audit:canonical:matrix', 'audit:canonical:matrix'],
  ['build', 'build'],
];

writeFileSync(
  reportPath,
  [
    '# French Grammar — full QA report',
    '',
    `Started: ${new Date().toISOString()}`,
    'Repository: ClippyFirst/French-Grammar',
    `Working directory: ${root}`,
    '',
  ].join('\n'),
  'utf8',
);

function runStage(label, script) {
  return new Promise((resolveStage) => {
    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const started = Date.now();

    appendFileSync(
      reportPath,
      [
        `## ${label}`,
        '',
        `Command: npm run ${script}`,
        `Started: ${new Date().toISOString()}`,
        '',
      ].join('\n'),
      'utf8',
    );

    const child = spawn(npm, ['run', script], {
      cwd: root,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    });

    child.stdout.on('data', (chunk) => appendFileSync(reportPath, chunk, 'utf8'));
    child.stderr.on('data', (chunk) => appendFileSync(reportPath, chunk, 'utf8'));

    child.on('error', (error) => {
      appendFileSync(
        reportPath,
        `\n[qa-runner error] ${error.stack ?? error.message}\n`,
        'utf8',
      );
      resolveStage({ label, code: 1 });
    });

    child.on('close', (code, signal) => {
      appendFileSync(
        reportPath,
        [
          '',
          `Finished: ${new Date().toISOString()}`,
          `Exit code: ${code ?? 'null'}`,
          `Signal: ${signal ?? 'none'}`,
          `Duration: ${((Date.now() - started) / 1000).toFixed(1)}s`,
          '',
        ].join('\n'),
        'utf8',
      );
      resolveStage({ label, code: code ?? 1 });
    });
  });
}

const results = [];
for (const [label, script] of stages) {
  results.push(await runStage(label, script));
}

const passed = results.filter((result) => result.code === 0).length;
const failed = results.length - passed;

appendFileSync(
  reportPath,
  [
    '## Summary',
    '',
    `Passed: ${passed}/${results.length}`,
    `Failed: ${failed}/${results.length}`,
    `Finished: ${new Date().toISOString()}`,
    '',
  ].join('\n'),
  'utf8',
);

console.log(`QA finished: ${passed}/${results.length} stages passed; ${failed} failed.`);
console.log('Full report: qa-output.txt');
if (failed > 0) process.exitCode = 1;
