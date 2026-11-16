# Personal portfolio — single page

A clean, two-column portfolio inspired by the general layout of Brittany Chiang’s site, with original content and styling. Built in plain HTML, CSS, and JavaScript.

## Open and edit in VS Code

1. Extract the ZIP and open this folder with **VS Code → File → Open Folder**.
2. Open `index.html` in your browser. No build step or framework is required.
3. Optionally use the VS Code **Live Server** extension for automatic refresh.

## Files

- `index.html`: About, Experience, Education, Projects, and Contact on **one page**.
- `style.css`: Layout, styling, responsive behavior, font rules.
- `script.js`: English/German translations, persistent light/dark preference, navigation and contact links.
- `assets/favicon.svg`: browser-tab favicon only. No logo image appears within the page.

## Personalization

Edit the `CONTACT` values near the top of `script.js` with your email, LinkedIn and GitHub URLs. Blank contact links are intentionally hidden. Edit both `en` and `de` translations to update text in both languages; update the HTML fallback text too.

The portfolio currently presents two projects: the ongoing hazard-sound-detection thesis and a Python/FastAPI/Ollama learning application. Only projects attributable to you are included.

Inter is requested from Google Fonts to closely match the reference site's typography. If offline, the site falls back to a system sans-serif font. To avoid the external font request, remove the three Google Fonts links in `<head>` and the system fallback remains.

## Publishing

Upload the folder contents to a GitHub Pages repository. Under **Settings → Pages**, choose *Deploy from a branch* and select the root of your main branch.

If you are copying these files into an **existing** site folder instead of using a fresh folder, delete the old `projects.html` and `assets/logo.svg` — this is now a one-page site.

No API keys, passwords, or private credentials should be added to the client-side files.
