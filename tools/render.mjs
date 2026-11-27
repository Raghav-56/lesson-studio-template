import { readFileSync } from 'node:fs';
import { renderMermaid } from './mermaid.mjs';

const [kind, filename] = process.argv.slice(2);
if ((kind === 'mermaid' || kind === 'math') && filename) {
  try {
    const source = readFileSync(filename === '-' ? 0 : filename, 'utf8');
    const output = kind === 'mermaid' ? renderMermaid(source)
      : (await import('katex')).renderToString(source, { output: 'mathml', trust: false });
    process.stdout.write(output + '\n');
  } catch (error) {
    console.error(error?.code === 'ERR_MODULE_NOT_FOUND' && kind === 'math'
      ? 'Run npm run tools -- equations to install KaTeX.'
      : error instanceof Error ? error.message : 'Could not render the input.');
    process.exitCode = 1;
  }
} else {
  console.error('Usage: node render.mjs <mermaid|math> <input-file|->');
  process.exitCode = 1;
}
