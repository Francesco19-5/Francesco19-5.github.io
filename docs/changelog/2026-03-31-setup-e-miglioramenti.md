# 2026-03-31 — Setup iniziale + miglioramenti

## Sessione 1 — Setup portfolio

Creazione del sito portfolio da zero.

**File creati:**
- `index.html` — pagina single-page con Hero, Progetti (3 card), About Me, Contatti
- `css/style.css` — design system completo (token CSS, layout, animazioni)
- `js/main.js` — scroll reveal (Intersection Observer), active nav, hamburger mobile
- `PLAN.md` — piano di implementazione

**Scelte tecniche:**
- Stack: HTML/CSS/JS puro, nessuna dipendenza
- Stile: Dark & Tech (#0d0d0d bg, #00f0ff accent)
- Font: Space Grotesk (titoli) + Inter (corpo) + JetBrains Mono (tag)
- Animazione hero: CSS `@keyframes` su radial-gradient, rispetta `prefers-reduced-motion`

---

## Sessione 2 — Espansione progetti + pagine dettaglio

**Modifiche a file esistenti:**
- `index.html` — portate le card da 3 a 6, aggiunto bottone "Scopri di più" con link a pagine dedicate, fix cover `<a>` per click sull'immagine
- `css/style.css` — aggiunto `container--wide` per navbar più vicina ai bordi, stili per pagine dettaglio progetto, `.btn--accent`, gradienti card 4–6
- `CLAUDE.md` — aggiornato con struttura file, convenzione changelog, guida aggiunta nuovi progetti

**File creati:**
- `projects/project-alpha.html`
- `projects/project-beta.html`
- `projects/project-gamma.html`
- `projects/project-delta.html`
- `projects/project-epsilon.html`
- `projects/project-zeta.html`

Ogni pagina progetto include: hero con tag + titolo + tagline + link, griglia screenshot placeholder, sezione contenuto (panoramica, meccaniche, sfide tecniche), sidebar con metadati (engine, linguaggi, anno, stato).
