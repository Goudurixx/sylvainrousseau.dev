# sylvainrousseau.dev

Static portfolio site (Astro), containerized behind Caddy + a Cloudflare Tunnel. No server-side
logic, no database, no client-side JS beyond what Astro emits for markdown/CSS — static output
only.

See `/plan-5-selfhosted-website.md` (in the parent outputs folder) for the full project spec, and
`docs/deploy-runbook.md` for NAS deployment steps.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # serve the production build locally
```

## Structure

- `src/pages/` — home, `/blog`, `/cv`
- `src/content/blog/` — markdown blog posts
- `src/layouts/BaseLayout.astro` — shared HTML shell, dark theme, no client JS
- `docker-compose.yml`, `Caddyfile`, `.env.example` — self-hosting stack (see spec M1/M2)
- `docs/deploy-runbook.md` — step-by-step NAS deployment guide

## Content that needs filling in before publishing

Search the repo for `TODO` — every placeholder (contact links, employment dates, CV PDF, project
links, domain/tunnel details) is marked inline.
