# Amir Miled — Portfolio

Personal portfolio of **Amir Miled**, software engineer — Odoo & Fullstack JavaScript developer.

Live: https://amirmiled.github.io/amir_PORTFOLIO

The site is available in three languages:

| Language | URL |
| --- | --- |
| Français (default) | `/amir_PORTFOLIO/` |
| English | `/amir_PORTFOLIO/en/` |
| Deutsch | `/amir_PORTFOLIO/de/` |

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:4321/amir_PORTFOLIO/
pnpm build
```

## Editing content

All text (hero, experience, projects, education, skills, languages, contact…) lives in
[`src/i18n/ui.ts`](src/i18n/ui.ts), with one dictionary per language (`fr`, `en`, `de`).
Contact details and links are in the `profile` object at the top of the same file.
The downloadable CV is `public/cv/CV_Amir_Miled.pdf`.

- **Contact form**: replace `YOUR_FORM_ID_HERE` in `src/components/contact.astro` with your Formspree form ID.
- **Like counter**: copy `.env.example` to `.env` and fill in the Firebase config (and add the same values as GitHub Actions secrets for deployment).
- **Deployment**: `.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`
  (enable *Settings → Pages → Source: GitHub Actions*). If the repository name changes, update `base` in `astro.config.mjs`.

## License

 - Template design and code © <a href="https://github.com/Gothsec" target="_blank">Andres Hernandez</a>, licensed under MIT
 - Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
