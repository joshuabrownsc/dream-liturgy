# Dream Church — Weekly Liturgy

A one-page, mobile-first follow-along for Sunday mornings at
service.dreamcolumbia.com. Static files, hosted free on GitHub Pages.

---

## The weekly rhythm

You only ever edit **one file**: `week.js`

1. Open `week.js` in GitHub (click the file, then the pencil icon)
2. Change the date, season, title, psalm, songs, announcements, collect, readings
3. Scroll down, click **Commit changes**
4. Wait about a minute. The site is live.

Anything you leave empty disappears from the page. No song lyrics this week?
Delete the `lyrics` block for that song. No announcements? Set
`announcements: []` and the whole section vanishes.

`config.js` holds the things that almost never change: your giving links,
social links, CCLI number, and the vision statement. Set it once.

---

## First-time setup

### 1. Create the repository

- New repository on GitHub, named anything (`dream-liturgy` works)
- **Public** (GitHub Pages requires public on the free plan)
- Upload every file and folder in this bundle to the root of the repo

### 2. Turn on GitHub Pages

- Repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main`, folder: `/ (root)` → **Save**
- Under **Custom domain**, enter `liturgy.dreamcolumbia.com` → **Save**
- Check **Enforce HTTPS** once it becomes available (can take an hour)

### 3. Point the subdomain

In whatever manages DNS for dreamcolumbia.com, add one record:

| Type  | Name / Host | Value                    | TTL     |
|-------|-------------|--------------------------|---------|
| CNAME | `liturgy`   | `YOURUSERNAME.github.io` | 1 hour  |

Replace `YOURUSERNAME` with your GitHub username, and keep the trailing dot
if your registrar requires one. Do not touch any existing records for
`www` or the root domain. Your main site keeps working exactly as it does now.

DNS usually resolves in 15 to 60 minutes. The `CNAME` file in this repo
already contains `liturgy.dreamcolumbia.com`. If you'd rather use a
different subdomain, change that file and the DNS record to match.

---

## Fonts

See `fonts/README.txt`. The page works without them and swaps them in the
moment you add the files. Note that you need a **web** license for both
Dream Avenue and TT Drugs, which is separate from a desktop license.

---

## Two details worth knowing

**CCLI.** Whenever you display lyrics online, CCLI requires the song title,
writers, copyright line, and your license number to appear. The template has
a field for each. Put your real license number in `config.js` where it says
`#0000000`, and fill in `copyright` and `ccliSong` for any song still under
copyright. Public domain hymns just need `copyright: "Public Domain"`.

**The 1979 Book of Common Prayer** is in the public domain in the United
States, so the psalms and collects can be printed here freely.

---

## Small customizations

**Turn off the red rubrics.** The italic instruction lines print in a muted
oxblood, the way rubrics have been printed since the medieval missals. If you
want them navy instead, change one line in `index.html`:

    --rubric:#8A2E2A;   →   --rubric:#5D686E;

**Add a section.** Tell me what it is and where it goes and I'll wire it in.

**Keep an archive.** Right now each week replaces the last. If you want past
Sundays kept at `liturgy.dreamcolumbia.com/2026-08-16`, that's a small
addition, worth doing once you have a few weeks of habit behind you.

---

## Files

    index.html      Template, styles, and rendering. Rarely touched.
    week.js         THIS WEEK'S SERVICE. The only weekly edit.
    config.js       Giving links, socials, CCLI, vision. Set once.
    assets/         Logos, favicons, social share image.
    fonts/          Drop licensed webfonts here.
    CNAME           The custom subdomain.
    .nojekyll       Tells GitHub to serve the files as-is.
