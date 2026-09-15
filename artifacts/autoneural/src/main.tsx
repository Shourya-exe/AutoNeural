import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const container = document.getElementById('root')!;

// Production builds are prerendered to static HTML, so React attaches to the
// existing markup instead of throwing it away and re-rendering from scratch.
// In dev (and if prerendering is ever skipped) the container is empty and we
// fall back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
