import { spawn } from 'node:child_process';
import { appendFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const reportPath = resolve(root, 'qa-output.txt');

const STAGE_TIMEOUT_MS = 5 * 60 * 1000;

const stages = [
  ['test', process.execPath, ['--test']],
  ['audit:canonical', process.execPath, ['scripts/audit-canonical-coverage.mjs']],
  ['audit:site-categories', process.execPath, ['scripts/audit-site-categories.mjs', '--strict']],
  ['audit:content-schema', process.execPath, ['scripts/audit-content-schema.mjs']],
  ['audit:canonical:matrix', process.execPath, ['scripts/generate-canonical-matrix.mjs']],
  ['build', process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build']],
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

function runStage(label, command, args) {
  return new Promise((resolveStage) => {
    let settled = false;
    let timedOut = false;
    const started = Date.now();

    appendFileSync(
      reportPath,
      [
        `## ${label}`,
        '',
        `Command: ${command} ${args.join(' ')}`,
        `Started: ${new Date().toISOString()}`,
        '',
      ].join('\n'),
      'utf8',
    );

    console.log(`QA: starting ${label}...`);

    const child = spawn(command, args, {
      cwd: root,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    });

    child.stdout.on('data', (chunk) => appendFileSync(reportPath, chunk, 'utf8'));
    child.stderr.on('data', (chunk) => appendFileSync(reportPath, chunk, 'utf8'));

    const timeout = setTimeout(() => {
      timedOut = true;
      appendFileSync(reportPath, `\n[qa-runner] TIMEOUT after ${STAGE_TIMEOUT_MS / 60000} minutes; terminating stage.\n`, 'utf8');
      if (process.platform === 'win32') {
        const killer = spawn('taskkill', ['/PID', String(child.pid), '/T', '/F'], {
          windowsHide: true,
          stdio: 'ignore',
        });
        const finishTimeout = () => {
          if (!settled) {
            settled = true;
            clearTimeout(timeout);
            console.log(`QA: ${label} timed out.`);
            resolveStage({ label, code: 124 });
          }
        };
        killer.on('close', finishTimeout);
        killer.on('error', finishTimeout);
        setTimeout(finishTimeout, 5000);
      } else {
        child.kill('SIGTERM');
        setTimeout(() => {
          if (!settled) {
            settled = true;
            clearTimeout(timeout);
            console.log(`QA: ${label} timed out.`);
            resolveStage({ label, code: 124 });
          }
        }, 5000);
      }
    }, STAGE_TIMEOUT_MS);

    child.on('error', (error) => {
      appendFileSync(
        reportPath,
        `\n[qa-runner error] ${error.stack ?? error.message}\n`,
        'utf8',
      );
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      console.log(`QA: ${label} failed (runner error).`);
      resolveStage({ label, code: 1 });
    });

    child.on('close', (code, signal) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      const finalCode = timedOut ? 124 : (code ?? 1);
      console.log(`QA: ${label} ${finalCode === 0 ? 'passed' : 'failed'}.`);
      appendFileSync(
        reportPath,
        [
          '',
          `Finished: ${new Date().toISOString()}`,
          `Exit code: ${finalCode}`,
          `Signal: ${signal ?? 'none'}`,
          `Duration: ${((Date.now() - started) / 1000).toFixed(1)}s`,
          '',
        ].join('\n'),
        'utf8',
      );
      resolveStage({ label, code: finalCode });
    });
  });
}

const results = [];
for (const [label, command, args] of stages) {
  results.push(await runStage(label, command, args));
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
