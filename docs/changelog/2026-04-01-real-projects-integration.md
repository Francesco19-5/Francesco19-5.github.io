# 2026-04-01 — Real projects integration + language cleanup

## What changed

### New project pages (7 total)
- `projects/project-InputToAction.html` — updated with real content, TitleCard hero, YouTube embed, itch.io button
- `projects/project-ProjectCyberpunk.html` — new, YouTube embed + 4 screenshots
- `projects/project-SamuYahtzee.html` — new, TitleCard hero, YouTube embed, itch.io button, 2 screenshots
- `projects/project-SleeperAgent.html` — new, TitleCard hero, YouTube playlist embed
- `projects/project-TheStrongestStrongman.html` — new, TitleCard hero, itch.io button
- `projects/project-Trauma.html` — new, TitleCard hero, YouTube embed, itch.io button, screenshot
- `projects/project-UFOCowtcher.html` — new, TitleCard hero, YouTube embed, itch.io button, 4 screenshots

### Deleted
- Template placeholder files: project-beta, project-delta, project-epsilon, project-gamma, project-zeta
- Temporary project subfolders under `projects/` (InputToAction/, ProjectCyberpunk/, etc.)

### Assets moved
- All images → `assets/images/projects/` with `ProjectName-TitleCard.ext` / `ProjectName-screenshotN.ext` naming
- PDFs → `assets/docs/`

### js/projects.js
- Replaced 6 placeholder entries with 7 real projects
- Added `coverImage`, `youtubeEmbed`, `youtube`, `itch` fields
- `renderCard()` now shows buttons (YouTube, itch.io, GitHub) only if the link is non-null
- "Scopri di più" → "Learn more"; aria-labels → English

### css/style.css
- Added `.project-hero--cover` (background-image with dark gradient overlay)
- Added `.project-video` + `.video-wrapper` (16:9 responsive iframe)

### Language fixes
- `index.html`: nav aria-label, "Progetti" → "Projects", email typo (`gmail..com` → `gmail.com`)
- `projects/index.html`: lang attribute, meta description, nav links, subtitle, filter buttons
