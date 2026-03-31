# Piano — Portfolio Site

## Obiettivo
Sito portfolio single-page su GitHub Pages, stile Dark & Tech, per mostrare progetti Unreal Engine.

## Stack
HTML/CSS/JS puro — nessun framework, nessun build step. Push su `main` = deploy live.

## Struttura file
```
/
├── index.html
├── css/style.css
├── js/main.js
└── assets/images/projects/
```

## Sezioni
1. **Nav** — barra fissa con frosted glass, smooth scroll, hamburger mobile
2. **Hero** — viewport pieno, nome + titolo + CTA, sfondo animato CSS
3. **Projects** — griglia CSS auto-responsive, card con hover glow, placeholder per 3 giochi Unreal
4. **About Me** — bio + skill tags, foto profilo, layout 2 colonne
5. **Contact** — link GitHub / email / LinkedIn con icone Font Awesome

## Palette
| Token | Valore |
|---|---|
| `--color-bg` | `#0d0d0d` |
| `--color-surface` | `#141414` |
| `--color-accent` | `#00f0ff` |
| `--color-text` | `#e8e8e8` |

## Font (Google Fonts CDN)
- Space Grotesk — titoli
- Inter — corpo testo
- JetBrains Mono — tag / codice

## JS (`main.js`, ~50 righe)
- Intersection Observer → fade-in sezioni
- Active nav link su scroll
- Hamburger toggle mobile

## Ordine implementazione
1. `PLAN.md` ✓
2. `index.html` skeleton
3. `css/style.css` (token, reset, layout)
4. `js/main.js`
5. QA responsive (375 / 768 / 1440 px)
6. Push e verifica su GitHub Pages
