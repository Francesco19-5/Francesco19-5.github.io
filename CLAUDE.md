# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site hosted on GitHub Pages at `https://Francesco19-5.github.io`. Single-page portfolio with project detail pages. Stack: plain HTML/CSS/JS — no framework, no build step.

## Deployment

The `main` branch is published directly via GitHub Pages. Pushing to `main` deploys the site automatically — no build step is required for plain HTML/CSS/JS.

## File Structure

```
/
├── index.html              Landing page (hero + about + contact)
├── css/style.css           All styles (shared by all pages)
├── js/projects.js          Project data + card rendering (single source of truth)
├── js/main.js              Scroll reveal, active nav, hamburger toggle
├── projects/
│   ├── index.html          Projects page (filter tabs: All/Solo/Game Jam)
│   ├── project-InputToAction.html
│   ├── project-ProjectCyberpunk.html
│   ├── project-SamuYahtzee.html
│   ├── project-SleeperAgent.html
│   ├── project-TheStrongestStrongman.html
│   ├── project-Trauma.html
│   └── project-UFOCowtcher.html
├── assets/
│   ├── images/projects/    ProjectName-TitleCard.ext / ProjectName-screenshotN.ext
│   └── docs/               PDF documents (GDDs, pitch docs)
├── PLAN.md                 Implementation plan
├── docs/GUIDA.md           Self-service guide (adding projects, YT videos)
└── docs/changelog/         Task history (one .md per session)
```

## Conventions

- After each significant work session, create a changelog entry in `docs/changelog/YYYY-MM-DD-description.md` and add a link here.
- Before starting any non-trivial task, write or update `PLAN.md`.
- Project pages live in `/projects/` and use `../css/style.css` (relative path).

## Adding a new project

1. Add a new entry to the `PROJECTS` array in `js/projects.js` (this is the single source of truth).
   - Set `coverImage` to `/assets/images/projects/ProjectName-TitleCard.ext` if you have a title card image.
   - Set `youtube` (watch URL) and `youtubeEmbed` (embed URL) if there is a video.
   - Set `itch` if there is an itch.io page.
   - Set `featured: true` to show the card on the home page.
2. Create `projects/project-ProjectName.html` (copy an existing project page and edit the content).
   - Add `class="project-hero--cover"` and `style="background-image: url('../assets/images/projects/ProjectName-TitleCard.ext')"` if there is a TitleCard.
   - Add a `<section class="project-video">` block if there is a YouTube embed.
3. Place images in `assets/images/projects/` using the naming convention above.
4. See `docs/GUIDA.md` for full self-service instructions.

## Changelog

- [2026-03-31 — Setup iniziale + miglioramenti](docs/changelog/2026-03-31-setup-e-miglioramenti.md)
- [2026-03-31 — Pagina progetti separata + hero ridotta + guida](docs/changelog/2026-03-31-pagina-progetti-e-guida.md)
- [2026-04-01 — Real projects integration + language cleanup](docs/changelog/2026-04-01-real-projects-integration.md)
