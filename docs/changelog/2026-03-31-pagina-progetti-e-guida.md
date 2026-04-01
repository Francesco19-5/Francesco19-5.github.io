# 2026-03-31 — Pagina progetti separata + hero ridotta + guida

## Cambiamenti

- **Hero ridotta**: `min-height` passato da `100vh` a `72vh`, padding contenuto ridotto da `5rem` a `3rem`.
- **Landing page**: rimossa la griglia progetti dalla landing; sostituita con una sezione CTA minimale con bottone a `projects/index.html`.
- **`projects/index.html`**: nuova pagina con header + back link + filter tabs (Tutti / Solo / Gruppo / Game Jam) + griglia card con `data-category`. Filtro JS inline senza dipendenze.
- **`css/style.css`**: aggiunti stili per `.projects-cta`, `.projects-page__filters`, `.filter-btn`, `.projects-page__grid`, `.page-header`, `.tag--category`.
- **`docs/GUIDA.md`**: guida autonoma per aggiungere progetti, video YT embedded, screenshot reali, categorie di filtro e deploy.
- **`CLAUDE.md`** e **`PLAN.md`**: aggiornati con la nuova struttura.
