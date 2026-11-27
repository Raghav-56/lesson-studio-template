import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const profiles = new Map([
  ['equations', ['KaTeX for typeset equations', ['katex@0.19.1']]],
  ['geometry', ['JSXGraph for draggable geometry and mathematics', ['jsxgraph@1.14.3']]],
  ['charts', ['Observable Plot for data charts', ['@observablehq/plot@0.6.19']]],
  ['maps', ['D3 Geo for maps and projections', ['d3-geo@3.1.2']]],
  ['simulation', ['p5.js for custom simulations and animation', ['p5@2.4.0']]],
  ['editor', ['CodeMirror and its JavaScript language support', ['codemirror@6.0.2', '@codemirror/lang-javascript@6.2.5']]],
  ['vega', ['Vega-Lite for charts described as JSON', ['vega-lite@6.5.0', 'vega@6.4.0', 'vega-embed@7.4.0']]],
]);

const [choice, ...extra] = process.argv.slice(2);
if (!choice) {
  process.stdout.write('Optional lesson tools\n\n' + [...profiles].map(([name, [description]]) =>
    `  npm run tools -- ${name}\n    ${description}`).join('\n') + '\n');
} else if (profiles.has(choice) && !extra.length) {
  const [, packages] = profiles.get(choice);
  const result = spawnSync('npm', ['install', '--save-exact', '--ignore-scripts', '--no-audit', '--no-fund', ...packages], {
    cwd: fileURLToPath(new URL('../', import.meta.url)), stdio: 'inherit',
  });
  if (result.error) console.error(result.error.message);
  process.exitCode = result.status ?? 1;
} else {
  console.error('Choose a single profile listed by npm run tools.');
  process.exitCode = 1;
}
