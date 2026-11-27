import { render } from 'pele';

export function renderMermaid(source) {
  return render(source, {
    autoDirection: true,
    maxWidth: 400,
    links: false,
    images: false,
    limit: 8192,
    maxEdges: 200,
    outputLimit: 250_000,
  }).svg;
}
