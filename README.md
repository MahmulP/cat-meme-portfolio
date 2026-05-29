# 🐈‍⬛ Portfolio (the spinning-cat one)

```
        /\_/\
       ( o.o )    OIIA OIIA OIIA
        > ^ <
```

A personal portfolio site. Mostly an excuse to put a meme cat on the
internet. Built with React 19, Vite, TypeScript, Tailwind v4, React Router,
and a Three.js hero starring a small black cat that won't stop spinning.

> If you came here for a serious README, the cat ate it. Sorry.

## What's in the box

- A homepage with a cat that **hovers, spins, and screams `OIIA OIIA OIIA`**
- Pages: home, about, education, projects (+ detail), contact, 404, error
- Lazy-loaded routes so your phone doesn't cry
- A meme-flavored loading screen that cycles cat faces and silly quips
- Neobrutalism design tokens — chunky borders, hard offset shadows, no gradients allowed near the building
- Reduced-motion fallback (a chill, non-spinning cat illustration)

## How to run it locally

You'll need [Bun](https://bun.sh). The cat is unionized; he refuses to work with npm.

```bash
bun install         # feed the codebase
bun run dev         # http://localhost:5173 — cat is now spinning
bun run lint        # check that nothing smells funny
bun run build       # outputs dist/ — production cat, ready to ship
bun run preview     # serves the production build locally
```

## Where everything lives

```
src/
├── app/           # composition root: router, providers, error boundary
├── pages/         # one folder per route
├── components/    # primitives, layout, three (the cat), meme, loading
├── features/      # bigger UI blocks (project-card, etc.)
├── domain/        # pure types — no React allowed
├── application/   # selectors over data — also no React
├── data/          # the actual content (profile, projects, etc.)
├── styles/        # global.css with Tailwind + brutal tokens
├── hooks/         # presentation-layer hooks
└── lib/           # tiny helpers
```

Architecture notes live in `.kiro/steering/`. They're gitignored so the cat
keeps his secrets.

## Shipping it (a.k.a. "ssh-cat-yeet")

Push to `main`. GitHub Actions does the rest:

1. Lint and build on Ubuntu with Bun. ☕
2. Stash `dist/` as a workflow artifact. 📦
3. SSH into the VPS and rsync the build to the deploy path. 🚀
4. Hit the live URL with a smoke check. If it's not 2xx/3xx, the cat hisses. 🐾

Only `dist/` ever leaves GitHub. Source code, `node_modules`, and `.kiro` stay home like good cats.

### Secrets the cat needs (Settings → Secrets and variables → Actions)

| Secret        | What it is                                                   |
| ------------- | ------------------------------------------------------------ |
| `SSH_KEY`     | Private deploy key authorized on the target host             |
| `VPS_HOST`    | Hostname or IP of the target host                            |
| `VPS_PORT`    | SSH port                                                     |
| `VPS_USER`    | SSH username                                                 |
| `DEPLOY_PATH` | Where to drop `dist/` on the VPS                             |
| `PROD_URL`    | (Optional) URL the smoke check pokes; skipped if unset       |

Don't have a deploy key yet? Make one:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f deploy_key
# Add deploy_key.pub to ~/.ssh/authorized_keys on the target host.
# Paste the contents of deploy_key (the private one) into the SSH_KEY secret.
# Throw the on-disk copies away unless you want to deploy from your laptop too.
```

### "I want to deploy NOW"

Actions tab → **Build & Deploy** → **Run workflow**. Cat will comply.

## Hosting (Nginx flavored)

The site runs behind Nginx. There's a reference server block at
`deploy/nginx.conf.example` with `<YOUR_DOMAIN>` and `<DEPLOY_PATH>`
placeholders. It does:

- SPA fallback so deep links don't 404
- Long cache for hashed assets, no cache for `index.html`
- gzip (brotli is one uncomment away)
- Correct MIME for `.glb` (the cat) and `.mp3` (the OIIA)
- A few baseline security headers so the cat sleeps at night

## Audio policy disclaimer

Browsers block audio until the user interacts with the page at least once.
First hover after a hard refresh might be silent. Click anywhere on the page
once — anything counts — and the cat regains his voice. This is browser
policy, not a bug.

## Credits

The OIIAIOOOOIAI cat 3D model is from
[Sketchfab](https://sketchfab.com/3d-models/oiiaioooooiai-cat-30d27bf7fb224849b76e208a6eccdb36)
under CC Attribution. Everything else: built by a human, supervised by an
imaginary cat.

```
  /\_/\
 ( -.- )   z z z
  > ^ <
```

Cat sleeps now. README ends here.
