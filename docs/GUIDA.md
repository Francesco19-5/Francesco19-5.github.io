# Guida al sito — come modificarlo senza Claude

Questa guida spiega come aggiungere progetti, video YouTube e altri contenuti al sito in modo autonomo, modificando solo HTML.

---

## Struttura rapida

```
/
├── index.html              Landing page (hero + about + contatti)
├── projects/
│   ├── index.html          Pagina con griglia filtrata di tutti i progetti
│   ├── project-alpha.html  Pagina dettaglio progetto (uno per progetto)
│   └── ...
├── css/style.css           Tutti gli stili — un solo file
├── js/main.js              JS della landing (scroll reveal, hamburger)
└── assets/images/projects/ Immagini screenshot (formato 16:9, ~800×450 px)
```

---

## Cambiare i progetti in evidenza nella home

Apri `js/projects.js`. Ogni progetto ha un campo `featured`:

```js
{
  id: 'alpha',
  title: 'Progetto Alpha',
  // ...
  featured: true,   // ← true = appare in home, false = solo nella pagina progetti
},
```

- **Per mostrarlo in home**: `featured: true`
- **Per nasconderlo dalla home**: `featured: false`

Il progetto sarà sempre visibile su `projects/index.html` indipendentemente dal valore di `featured`.

---

## Aggiungere un nuovo progetto

### 1 — Aggiungere l'oggetto in `js/projects.js`

Apri `js/projects.js` e aggiungi un oggetto all'array `PROJECTS`:

```js
{
  id: 'nome',                          // identificativo univoco (solo lettere/trattini)
  title: 'Nome Progetto',
  desc: 'Breve descrizione del gioco.',
  techTags: ['Unreal Engine 5', 'C++'],
  category: 'solo',                    // 'solo' | 'gruppo' | 'game-jam'
  cover: 7,                            // numero non ancora usato (vedi step 2)
  featured: true,                      // true = visibile anche in home
  page: 'project-nome.html',
  github: 'https://github.com/...',    // oppure: null
},
```

### 2 — Aggiungere il colore cover (`css/style.css`)

Cerca `.card__cover--6` (l'ultimo numero) e subito dopo aggiungi:

```css
.card__cover--7 {
  background: linear-gradient(135deg, #1a0a0a, #3a1515, #6a2020);
}
```

Puoi usare qualsiasi gradiente. Strumento utile: [cssgradient.io](https://cssgradient.io)

### 3 — Creare la pagina dettaglio (`projects/project-nome.html`)

Copia `projects/project-alpha.html` e rinominalo. Poi modifica:
- `<title>` nella `<head>`
- `<meta name="description">`
- Titolo, tagline, tag nella sezione `.project-hero`
- Testo nelle sezioni `.project-section`
- I dati nella sidebar (engine, ruolo, anno, stato)
- Link GitHub/itch.io/demo nei bottoni

---

## Aggiungere un video YouTube embedded

Nella pagina dettaglio progetto, scegli dove inserire il video (di solito sopra o sotto gli screenshot). Usa questo blocco:

```html
<div class="project-section">
  <h3 class="project-section__title">Video</h3>
  <div class="video-embed">
    <iframe
      src="https://www.youtube.com/embed/ID_VIDEO"
      title="Nome del video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>
```

Sostituisci `ID_VIDEO` con l'ID che trovi nell'URL di YouTube dopo `?v=`.
Esempio: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID è `dQw4w9WgXcQ`

Aggiungi poi questo stile in `css/style.css` (una volta sola, da qualsiasi parte):

```css
.video-embed {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
```

---

## Aggiungere uno screenshot reale

Metti l'immagine in `assets/images/projects/` (formato consigliato: `.jpg` o `.webp`, proporzione 16:9).

Poi nella pagina progetto, sostituisci un `<div class="screenshot-placeholder">` con:

```html
<img src="../assets/images/projects/nome-immagine.jpg"
     alt="Descrizione screenshot"
     class="screenshot-img" />
```

E aggiungi in `css/style.css`:

```css
.screenshot-img {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--color-border);
}
```

---

## Modificare About e Contatti (in `index.html`)

- **Bio**: cerca `about__bio` e modifica il testo del paragrafo.
- **Skill tags**: aggiungi o rimuovi `<span class="tag">...</span>` dentro `about__skills`.
- **Email**: cerca `mailto:` e sostituisci con la tua email.
- **LinkedIn**: sostituisci `https://linkedin.com/in/il-tuo-profilo` con il tuo URL.

---

## Deploy

Il sito va online automaticamente appena fai un push su `main`:

```bash
git add .
git commit -m "Aggiunto progetto X"
git push
```

Dopo 1-2 minuti la versione live si aggiorna su `https://Francesco19-5.github.io`.

---

## Aggiungere una nuova categoria di filtro

Se vuoi aggiungere una categoria (es. "Prototipo") in `projects/index.html`:

1. Aggiungi un bottone nel gruppo filtri:
   ```html
   <button class="filter-btn" data-filter="prototipo">Prototipo</button>
   ```
2. Usa `data-category="prototipo"` sulle card corrispondenti.
3. Aggiungi `<span class="tag tag--category">Prototipo</span>` nei tag della card.

Il filtro funzionerà automaticamente senza modificare il JavaScript.
