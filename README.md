# Project Nightfield Network

Production website for Project Nightfield Network, deployed on Vercel.

The site content is preserved from the original Nightfield HTML. The build reconstructs the production `index.html` byte-for-byte from compressed source chunks, which keeps deployment uploads reliable while preserving the exact site output.

- `src/chunks/*.b64` contains the compressed HTML source.
- `build.mjs` reconstructs `dist/index.html`.
- `vercel.json` configures the production build and security headers.
