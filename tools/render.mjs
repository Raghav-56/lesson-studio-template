import { readFileSync } from 'node:fs';
import { renderToString } from 'katex';
import { renderMermaid } from './mermaid.mjs';

const [kind, filename] = process.argv.slice(2);
if ((kind === 'mermaid' || kind === 'math') && filename) {
  try {
    const source = readFileSync(filename === '-' ? 0 : filename, 'utf8');
    const output = kind === 'mermaid' ? renderMermaid(source)
      : renderToString(source, { output: 'mathml', trust: false });
    process.stdout.write(output + '\n');
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Could not render the input.');
    process.exitCode = 1;
  }
} else {
  console.error('Usage: node render.mjs <mermaid|math> <input-file|->');
  process.exitCode = 1;
}
