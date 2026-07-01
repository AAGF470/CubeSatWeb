# CubeSatWeb — Northeastern Satellite Lab

Standalone site for the Northeastern Satellite Lab, built on the shared
component library **[`@aagf470/ui`](https://github.com/AAGF470/cryarkWebsite/tree/main/shared)**.
The site's own chrome (nav, footer, marquee, mailing list) and content live
here; the section blocks come from the package.

## Prerequisites — one-time auth

`@aagf470/ui` is on GitHub Packages, which requires a token even to *install*.

1. Create a GitHub PAT (classic) with the **`read:packages`** scope.
2. Export it in your shell (add to `~/.zshrc` to make it permanent):
   ```bash
   export GITHUB_TOKEN=ghp_your_token_here
   ```
   The repo's `.npmrc` reads this env var — the token is never committed.

## Run it

```bash
npm install        # pulls @aagf470/ui from GitHub Packages
npm run dev        # local dev server
npm run build      # → dist/  (static, deploy anywhere)
```

## Updating the component library

When `@aagf470/ui` publishes a new version:
```bash
npm update @aagf470/ui
```
You control when this happens — a library change never auto-ships to this site.

## Deploy

`npm run build` produces a static SPA in `dist/`. Serve it with any static host
+ SPA fallback (all routes → `index.html`), e.g. Caddy:
```
cubesat.yourdomain.com {
    root * /var/www/cubesat
    try_files {path} /index.html
    file_server
    encode zstd gzip
}
```
