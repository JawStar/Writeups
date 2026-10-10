# Jawstar Security — Writeup Vault

100+ TryHackMe / HackTheBox / OffSec writeups, moved off Medium and onto infrastructure
that can't suspend your account with no explanation.

Live at: `https://<your-username>.github.io/<repo-name>/` once Pages is enabled (see below).

## 1. Get your writeups off Medium

Even with a suspended account, you're still logged in, so the official export still works:

1. Medium → click your profile photo → **Settings**
2. **Security and apps** tab → **Download your information**
3. Click **Export** → confirm
4. Wait for the email (usually a few minutes) → click **Download my archive**
5. You'll get a file like `medium-export-XXXXXXXX.zip` — this contains every post as HTML,
   including drafts and unlisted posts, regardless of the 410 shown to the public.

## 2. Convert the export into this repo's format

```bash
cd scripts
pip install -r requirements.txt --break-system-packages
python3 convert_medium_export.py /path/to/medium-export-XXXXXXXX.zip
```

This will:
- Parse every post in the export
- Auto-sort each one into `writeups/tryhackme/`, `writeups/hackthebox/`, `writeups/offsec/`,
  or `writeups/other/` based on title/content keywords
- Convert HTML → clean Markdown with frontmatter (title, date, platform)
- Rebuild `manifest.json`, which powers the search/index page

Check the auto-sorted platforms afterward — the keyword guesser is a starting point, not
gospel. Move any misfiled `.md` files between folders, then run:

```bash
python3 rebuild_manifest.py
```

Delete `writeups/hackthebox/_example-box-name.md` — it's just a template reference.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Migrate writeups from Medium"
git branch -M main
git remote add origin https://github.com/JawStar/<repo-name>.git
git push -u origin main
```

## 4. Turn on GitHub Pages

Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.

Your vault goes live at `https://jawstar.github.io/<repo-name>/` within a minute or two.

## 5. Add new writeups going forward

Drop a new `.md` file into the right platform folder using the same frontmatter format
as `writeups/hackthebox/_example-box-name.md`, then run `python3 scripts/rebuild_manifest.py`
and push. No Medium involved ever again.

## Adding writeups or news (no code needed)

Open `admin.html` from your local/full copy (double-click it — works fully offline,
no server needed) — it is deliberately NOT part of this deployed copy. Fill in the
form, download the
generated `.md` file, drop it into the matching `writeups/<platform>/` folder, then:
```bash
python3 scripts/rebuild_manifest.py
git add . && git commit -m "Add writeup" && git push
```
That's it — no manual frontmatter, no risk of a typo breaking the page.

## Structure

```
writeups/
  tryhackme/
  hackthebox/
  offsec/
  hardware-ot-ics-scada/
  news/
  other/
assets/
  css/style.css        # base CRT terminal theme (colors, fonts)
  css/portfolio.css     # homepage layout (nav, hero, sections, cards, mascot animations)
  js/hero3d.js           # Three.js rotating node-network hero scene
  js/mascot.js            # cartoon hacker mascot SVG injector
  js/portfolio.js        # renders section cards, scroll reveal, nav highlighting, counters
  js/app.js              # search/filter logic for archive.html
scripts/
  convert_medium_export.py
  rebuild_manifest.py
index.html             # the homepage — hero + all sections
admin.html              # no-code writeup/news composer
archive.html           # searchable/filterable full list (old index.html)
writeup.html           # single-writeup viewer
manifest.json          # generated index of all writeups, don't hand-edit
certifications.json    # your certifications — edit by hand, e.g. add new ones here
```

## The homepage (index.html)

- **Hero**: a Three.js node-network scene (loaded from cdnjs, no build step needed) that
  auto-rotates and drifts toward the cursor, plus an animated cartoon hacker mascot (pure
  inline SVG/CSS — typing hands, blinking eyes, glowing screen, idle bob) with a HUD-style
  stat readout that counts up when it scrolls into view.
- **Sections**: TryHackMe, HackTheBox, OffSec, Certifications, Hardware/OT/ICS/SCADA, News,
  Other — each has its own color-matched mascot next to the heading, pulls live from
  `manifest.json` (or `certifications.json`), and fades cards in on scroll.
- **archive.html** still exists as a fast searchable/filterable list view of everything, linked
  from the nav ("Full Archive").
- **admin.html** (kept in your local/full copy only, not uploaded to GitHub) — a no-code
  composer. Fill in title/section/date/content, see a live markdown preview, click one
  button to download a correctly formatted `.md` file. It's intentionally not part of the
  deployed site — just open it locally by double-clicking it whenever you want to add a
  writeup, then upload the resulting `.md` file the normal way.

To add a certification later, just add an object to `certifications.json`:
```json
{ "name": "OSCP", "full_name": "Offensive Security Certified Professional", "issuer": "OffSec", "note": "..." }
```
No script needs to run for that one — `portfolio.js` reads it directly.

To add a hardware/OT/ICS/SCADA writeup, drop a `.md` file (same frontmatter format as the
example) into `writeups/hardware-ot-ics-scada/`, then run `python3 scripts/rebuild_manifest.py`.
