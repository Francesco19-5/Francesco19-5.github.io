/* ============================================================
   PROJECTS — single source of truth

   To add a project: add an object to the array.
   To show/hide from home: set featured: true/false.
   ============================================================ */

const PROJECTS = [
  {
    id: 'InputToAction',
    title: 'Input To Action',
    desc: 'A 2D puzzle platformer built in 48h for GMTK Game Jam 2023 (theme: "Roles Reversed") — TOP 5% out of thousands of entries.',
    techTags: ['Unity', 'C#'],
    category: ['game-jam', 'group'],
    cover: 1,
    coverImage: '/assets/images/projects/InputToAction-TitleCard.gif',
    featured: true,
    page: 'project-InputToAction.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/-BEQ8MOWIVE?si=mSv0uebcnH-Soc-Z',
    youtube: 'https://www.youtube.com/watch?v=-BEQ8MOWIVE',
    itch: 'https://sailing-rocks.itch.io/input-to-action',
  },
  {
    id: 'ProjectCyberpunk',
    title: 'Project Cyberpunk',
    desc: 'A group project creating a Cyberpunk 2077-style mission — full gameplay implementation with procedural weapon systems and enemy AI.',
    techTags: ['Unreal Engine 5', 'Blueprints'],
    category: 'group',
    cover: 2,
    coverImage: null,
    featured: false,
    page: 'project-ProjectCyberpunk.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/HXKatIUcO7Y?si=GAgMlyENnhQoZSZd',
    youtube: 'https://www.youtube.com/watch?v=HXKatIUcO7Y',
    itch: null,
  },
  {
    id: 'SamuYahtzee',
    title: 'Samu Yahtzee',
    desc: 'A rogue-like game born as a tabletop project, combining Yahtzee mechanics with original combat and adventure systems.',
    techTags: ['Game Design', 'Tabletop'],
    category: 'solo',
    cover: 3,
    coverImage: '/assets/images/projects/SamuYahtzee-TitleCard.jpg',
    featured: true,
    page: 'project-SamuYahtzee.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/0m-6y1GPBbU?si=aTxnaMzURFG72kHJ',
    youtube: 'https://www.youtube.com/watch?v=0m-6y1GPBbU',
    itch: 'https://francesco-brancato.itch.io/samu-yahtzee',
  },
  {
    id: 'SleeperAgent',
    title: 'Sleeper Agent',
    desc: 'A solo stealth-action prototype in Unreal Engine 5 — from GDD to playable implementation, featuring procedural hit reactions.',
    techTags: ['Game Design', 'Unreal Engine 5'],
    category: 'solo',
    cover: 4,
    coverImage: '/assets/images/projects/SleeperAgent-TitleCard.jpg',
    featured: false,
    page: 'project-SleeperAgent.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/videoseries?si=OazQYE385-hRpj5N&list=PLZuFmqEN5mNopyBgXUL92cu6eDXz6q-uS',
    youtube: 'https://www.youtube.com/playlist?list=PLZuFmqEN5mNopyBgXUL92cu6eDXz6q-uS',
    itch: null,
  },
  {
    id: 'TheStrongestStrongman',
    title: 'The Strongest Strongman',
    desc: 'A GMTK Game Jam 2024 entry — punch iron cubes that squish and stretch when blocked by walls and floors.',
    techTags: ['Unity', 'C#'],
    category: ['game-jam', 'group'],
    cover: 5,
    coverImage: '/assets/images/projects/TheStrongestStrongman-TitleCard.gif',
    featured: false,
    page: 'project-TheStrongestStrongman.html',
    github: null,
    youtubeEmbed: null,
    youtube: null,
    itch: 'https://sailing-rocks.itch.io/the-strongest-strongman',
  },
  {
    id: 'Trauma',
    title: 'Trauma',
    desc: 'A survival-horror game exploring the trauma of the main character — escape the nightmare and unravel the mystery.',
    techTags: ['Unreal Engine 5', 'Blueprints', 'C++'],
    category: 'group',
    cover: 6,
    coverImage: '/assets/images/projects/Trauma-TitleCard.png',
    featured: true,
    page: 'project-Trauma.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/HdXNnOHbxtA?si=gcjujupRd2vhcL1B',
    youtube: 'https://www.youtube.com/watch?v=HdXNnOHbxtA',
    itch: 'https://francesco-brancato.itch.io/trauma',
  },
  {
    id: 'UFOCowtcher',
    title: 'UFO Cowtcher',
    desc: 'A mobile group project — pilot a UFO over a farm and abduct as many cows as you can before time runs out.',
    techTags: ['Unity', 'C#', 'Mobile'],
    category: 'group',
    cover: 1,
    coverImage: '/assets/images/projects/UFOCowtcher-TitleCard.jpg',
    featured: false,
    page: 'project-UFOCowtcher.html',
    github: null,
    youtubeEmbed: 'https://www.youtube.com/embed/wuMjqHoYJPo?si=sU3feSo_jgJsKlJT',
    youtube: 'https://www.youtube.com/watch?v=wuMjqHoYJPo',
    itch: 'https://francesco-brancato.itch.io/ufo-cowtcher',
  },
];

/* ---- rendering ---- */

const CATEGORY_LABEL = { solo: 'Solo', group: 'Group', 'game-jam': 'Game Jam' };

function renderCard(project, basePath) {
  const url      = basePath + project.page;
  const techHtml = project.techTags.map(t => `<span class="tag">${t}</span>`).join('');
  const cats = Array.isArray(project.category) ? project.category : [project.category];
  const catAttr = cats.join(' ');
  const catLabel = cats.map(c => CATEGORY_LABEL[c] || c).join(' / ');

  const coverStyle = project.coverImage
    ? ` style="background-image:url('${project.coverImage}');background-size:cover;background-position:center;"`
    : '';

  const ghBtn = project.github
    ? `<a href="${project.github}" class="btn btn--sm btn--outline" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>`
    : '';
  const ytBtn = project.youtube
    ? `<a href="${project.youtube}" class="btn btn--sm btn--outline" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> YouTube</a>`
    : '';
  const itchBtn = project.itch
    ? `<a href="${project.itch}" class="btn btn--sm btn--outline" target="_blank" rel="noopener noreferrer"><i class="fas fa-gamepad"></i> itch.io</a>`
    : '';

  return `
    <article class="card" data-category="${catAttr}" data-id="${project.id}">
      <a href="${url}" class="card__cover card__cover--${project.cover}"${coverStyle} aria-label="Go to ${project.title}"></a>
      <div class="card__body">
        <div class="card__tags">
          ${techHtml}
          <span class="tag tag--category">${catLabel}</span>
        </div>
        <h3 class="card__title"><a href="${url}">${project.title}</a></h3>
        <p class="card__desc">${project.desc}</p>
        <div class="card__links">
          <a href="${url}" class="btn btn--sm btn--accent">Learn more</a>
          ${ghBtn}${ytBtn}${itchBtn}
        </div>
      </div>
    </article>`;
}

/* ---- mount: home (featured grid) ---- */
const featuredGrid = document.getElementById('featured-grid');
if (featuredGrid) {
  PROJECTS
    .filter(p => p.featured)
    .forEach(p => featuredGrid.insertAdjacentHTML('beforeend', renderCard(p, 'projects/')));
}

/* ---- mount: projects page (full grid) ---- */
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
  PROJECTS.forEach(p => projectsGrid.insertAdjacentHTML('beforeend', renderCard(p, '')));
}
