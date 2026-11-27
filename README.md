# Lesson Studio template

A starting point for a Lesson Studio lesson repository. Use this template on GitHub or let Studio copy it into a new lesson workspace.

Write the lesson in `site/index.html`. Choose the design and teaching approach for the topic. The template supplies a small Lesson Studio mark at `site/lesson-studio.png`.

Keep input material in `sources/` in the private lesson repository. Put Manim source in `scenes/`. Read [AGENTS.md](AGENTS.md) for the files Studio can publish.

## Authoring tools

Pele is part of the template. Studio also gives authoring tasks a local render command for Mermaid and MathML, plus a browser-ready Observable Plot bundle.

In a standalone template checkout, run `npm ci` for the core tools. Run `npm run tools` to see the optional profiles. Add a profile with `npm run tools -- <profile>`, such as `npm run tools -- equations` for KaTeX or `npm run tools -- geometry` for JSXGraph. Each profile pins its packages and updates the lesson's lockfile.

```sh
node tools/render.mjs mermaid diagram.mmd > diagram.svg
npm run tools -- equations
node tools/render.mjs math equation.tex > equation.mathml
```

Use `-` as the input filename to read standard input. To let Studio render Mermaid on a published page, put escaped source in `<pre><code class="language-mermaid">…</code></pre>`. Keep the MathML output inline. If a chart needs Observable Plot, inline the local bundle and its license notice before the code that calls `Plot.plot`. Keep data local to the lesson and include the tools only where they help teach.
