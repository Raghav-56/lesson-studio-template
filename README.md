# Lesson Studio template

A starting point for a Lesson Studio lesson repository. Use this template on GitHub or let Studio copy it into a new lesson workspace.

Write the lesson in `site/index.html`. Choose the design and teaching approach for the topic. The template supplies a small Lesson Studio mark at `site/lesson-studio.png`.

Keep input material in `sources/` in the private lesson repository. Put Manim source in `scenes/`. Read [AGENTS.md](AGENTS.md) for the files Studio can publish.

## Authoring tools

Use Pele for Mermaid diagrams, KaTeX for equations, and Observable Plot for data charts. Studio provides a local render command and a browser-ready Plot bundle in its build input. For a standalone template checkout, run `npm ci` once to install the pinned tools.

```sh
node tools/render.mjs mermaid diagram.mmd > diagram.svg
node tools/render.mjs math equation.tex > equation.mathml
```

Use `-` as the input filename to read standard input. To let Studio render Mermaid on a published page, put escaped source in `<pre><code class="language-mermaid">…</code></pre>`. Keep the MathML output inline. If a chart needs Observable Plot, inline the local bundle and its license notice before the code that calls `Plot.plot`. Keep data local to the lesson and include the tools only where they help teach.
