# Prakash L — Portfolio

A fast, responsive portfolio built with plain HTML, CSS and JavaScript. No build tools, no backend, no paid services.

## Folder structure

```
my-portfolio/
  index.html                 ← page layout, hero + About text
  .nojekyll                  ← tells GitHub Pages to serve files as-is
  css/style.css              ← colours & design (variables at the top)
  js/data.js                 ← ★ skills, projects, achievements, contact links
  js/script.js               ← behaviour (menu, gallery, lightbox) — no need to edit
  assets/
    images/profile.jpg       ← your photo
    projects/                ← project screenshots
    achievements/            ← award certificates (dance, cultural, etc.)
    certificates/            ← participation / conference certificates
    resume/                  ← your resume PDF
```

## What to edit

| I want to change…              | Edit this                                                          |
|--------------------------------|--------------------------------------------------------------------|
| Photo                          | Replace `assets/images/profile.jpg` (same file name)               |
| Intro, About, education, job   | `index.html` (look for `<!-- EDIT -->` comments)                   |
| Skills                         | `SKILLS` list in `js/data.js`                                      |
| Projects                       | `PROJECTS` list in `js/data.js`                                    |
| Certificates & awards          | `ACHIEVEMENTS` list in `js/data.js`                                |
| Email, GitHub, LinkedIn, phone | `CONTACT` in `js/data.js`                                          |
| Resume download                | Put PDF in `assets/resume/`, set `CONTACT.resume`                  |
| Colours                        | `:root` variables at the top of `css/style.css`                    |

### Add a certificate or award
1. Copy the image into `assets/certificates/` or `assets/achievements/`.
   Use lowercase names without spaces, e.g. `flutter-course-2026.jpg`.
2. In `js/data.js`, copy one `{ ... },` block in `ACHIEVEMENTS`, paste it, and update
   `title`, `category` (`"award"` or `"certificate"`), `date`, `description`, `image`, `alt`.

Images are always shown whole (never cropped or stretched). A missing or misspelled
image shows a clean placeholder instead of a broken icon. Check the browser console (F12) for a
"Image not found" message that names the path.

### Add a project
Put a screenshot in `assets/projects/`, then copy a block in `PROJECTS` and set `image`,
`description`, `technologies` and (optionally) `link` and `screenshots`.
"View Project" opens a details window, so it always works even when the code is private.

### Contact form
GitHub Pages can't send email by itself (it only hosts static files). When you set
`CONTACT.email`, a form appears that opens the visitor's own email app with the message filled
in, so no backend is needed. To receive messages directly without that step, you would need a
form service such as Formspree or Web3Forms (free tiers available); that's optional.

## Run locally
- Easiest: double-click `index.html`.
- Closer to the live site (recommended): in VS Code install **Live Server** and click
  "Go Live", or run in this folder:
  ```
  python -m http.server 8000
  ```
  then open http://localhost:8000

## Publish free on GitHub Pages

### Option A — replace your existing site (prakash-l-tz.github.io)
Your current live site is in `C:\Users\TZ\portfolio` (repo `prakash-l-tz.github.io`).
```
cd C:\Users\TZ\portfolio
xcopy /E /I /Y C:\Users\TZ\my-portfolio .
git add .
git commit -m "New portfolio site"
git push
```
Live in 1–2 minutes at **https://prakash-l-tz.github.io/** (the old version stays in git history).

### Option B — new repository
1. On github.com click **New repository** → name it (e.g. `portfolio`) → **Public** → Create.
2. Upload: either drag the *contents* of `my-portfolio` (not the folder itself) into
   "uploading an existing file" and Commit, or with git:
   ```
   cd C:\Users\TZ\my-portfolio
   git init -b main
   git add .
   git commit -m "Portfolio site"
   git remote add origin https://github.com/prakash-l-tz/portfolio.git
   git push -u origin main
   ```
3. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
4. After 1–2 minutes the site is at `https://prakash-l-tz.github.io/portfolio/`.

### Updating the live site
Add images / edit `data.js`, then:
```
git add .
git commit -m "Add new certificate"
git push
```
Or, on github.com: open the folder → **Add file → Upload files** / click a file → ✏️ edit → Commit.
Refresh with Ctrl+F5 if you still see the old version.
