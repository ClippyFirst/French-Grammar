// Helper to write UTF-8 files correctly on this Windows environment.
// Write, replace text, insert at line, etc.
import { writeFileSync, readFileSync } from 'node:fs';

/**
 * Write file content. Replaces any existing file.
 */
function write(path, content) {
  writeFileSync(path, content, 'utf8');
  console.log('wrote', path, `(${content.length} bytes)`);
}

/**
 * Replace a substring in a file. Fails if not found exactly once.
 */
function replace(path, oldSub, newSub) {
  let content = readFileSync(path, 'utf8');
  if (content.indexOf(oldSub) === -1) {
    throw new Error('replace not found in ' + path + ': ' + oldSub.slice(0, 80));
  }
  if (content.indexOf(oldSub) !== content.lastIndexOf(oldSub)) {
    throw new Error('replace ambiguous in ' + path);
  }
  content = content.replace(oldSub, newSub);
  writeFileSync(path, content, 'utf8');
  console.log('replaced in', path);
}

/**
 * Insert content before a 1-based line number.
 */
function insert(path, atLine1, text) {
  const lines = readFileSync(path, 'utf8').split('\n');
  const idx = atLine1 - 1;
  if (idx >= lines.length) {
    lines.push(text);
  } else if (idx < 0) {
    throw new Error('insert line too small');
  } else {
    lines.splice(idx, 0, text);
  }
  write(path, lines.join('\n'));
}

export { write, replace, insert, readFileSync, writeFileSync };