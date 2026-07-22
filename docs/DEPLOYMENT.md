# Deployment

This site builds to a fully static export (`output: 'export'` in `next.config.ts`) —
no Node.js server is required to run it. That means it can go on Vercel (for a fast
staging preview) or on Hostinger, regardless of which hosting tier Hostinger plan you
have.

## 1. Staging preview on Vercel (do this first)

1. Push this repo to GitHub (already done — [github.com/Khoauytin/Tiff_Website](https://github.com/Khoauytin/Tiff_Website)).
2. Go to [vercel.com](https://vercel.com) and sign in/sign up **with your own GitHub account**
   (this step has to be done by you — nobody else should have access to deploy on your
   behalf).
3. Click **Add New → Project**, select the `Tiff_Website` repo, click **Import**.
4. Vercel auto-detects Next.js — leave the defaults, click **Deploy**.
5. Once it finishes, you get a preview URL like `https://tiff-website.vercel.app`.
   Every future push to the `main` branch redeploys automatically.
6. In **Project Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_CONSULTATION_ENDPOINT` — the Google Apps Script URL from
     [`google-apps-script/SETUP.md`](./google-apps-script/SETUP.md).
   - `NEXT_PUBLIC_SITE_URL` — your Vercel URL for now (update later once on the real domain).
   Redeploy after adding these (Vercel doesn't pick up new env vars on old builds).

Share the Vercel preview URL for review before touching tiff.vn or Hostinger.

## 2. Going live on Hostinger

Check your Hostinger plan first: log into **hPanel** and look for **Websites → [your
site] → Advanced → Node.js**. Whether that option exists determines which path below
applies.

### 2a. If your Hostinger plan supports Node.js (Business/Cloud/VPS)

1. In hPanel, open **Node.js** for your site and choose **Create Application**.
2. Point it at the GitHub repo (Hostinger supports Git-based deploys) or upload the
   repo directly.
3. Even though Node.js is available, since this app builds to a static export you
   don't actually need Node running at request time — you can still just serve the
   `out/` folder as static files (see 2b) if you prefer the simpler path. Only use the
   Node.js app runner if you want Hostinger to run `npm run build` for you on each
   push.
4. Set environment variables the same as the Vercel step above, in the Node.js app's
   environment variable settings.

### 2b. If your Hostinger plan is shared/static-only (Premium etc.)

1. On your own machine (or ask Claude to do it), run:
   ```
   npm run build
   ```
   This produces a static site in the `out/` folder — the exact HTML/CSS/JS to upload
   (no environment variables can change after this point, so make sure
   `NEXT_PUBLIC_CONSULTATION_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` are set in `.env.local`
   **before** running the build).
2. In hPanel, open **File Manager**, navigate to `public_html` (or your domain's
   document root).
3. Delete/backup whatever is currently there (the existing tiff.vn site) — **only do
   this once you've fully reviewed the Vercel staging preview** — then upload the
   entire contents of the local `out/` folder into `public_html`.
4. Because `trailingSlash: true` is set, routes like `/hotel-wedding-decor/` resolve to
   `hotel-wedding-decor/index.html` automatically on most static hosts, including
   Hostinger's Apache/LiteSpeed setup — no extra server config needed.

## 3. Pointing the real tiff.vn domain

Only do this after the client has reviewed and approved the Vercel staging site. This
is a DNS/domain change on your own Hostinger account — update the domain's A
record/nameservers to point at wherever the final build lives (Hostinger hosting, or
Vercel's custom-domain feature if you decide to keep hosting there instead).
