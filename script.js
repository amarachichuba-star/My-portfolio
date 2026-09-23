/* =========================================================
   EDIT EVERYTHING HERE. This is the only place you need to
   touch. Nothing below the CONFIG object needs to change.
   ========================================================= */
const CONFIG = {
  name: "Eileen",
  photo: "portrait.jpg",
  eyebrow: "this notebook belongs to",
  gradTag: "student &middot; class of 2030",
  locationTag: "based in Dundee, UK",
  stickers: ["open to internships", "loves messy datasets", "building in public"],
  ledeBefore: "I\u2019m a second-year Computer Science student with a growing interest in ",
  ledeAccent: "machine learning, artificial intelligence and software development.",
  ledeAfter: " I enjoy exploring how intelligent systems can be built, trained and deployed to solve real-world problems, and I\u2019m actively developing my skills across Python, Java, JavaScript and data-driven technologies.",
  ctaPrimary: { label: "say hi", href: "#contact" },
  ctaGhost: { label: "see what I've built", href: "#projects" },

  aboutParagraphs: [
    "Through coursework, personal projects and early collaborative work, I\u2019ve developed a solid foundation in programming, algorithms, data structures and core software engineering principles. I\u2019m especially interested in the full lifecycle of AI-powered systems \u2014 from data preprocessing and model training to backend integration and deployment.",
    "Driven by curiosity and continuous improvement, I\u2019m currently focused on strengthening my machine learning and data science fundamentals, expanding my project portfolio and exploring opportunities where I can contribute to innovative, intelligent technology while growing as a developer."
  ],
  skills: [
    { group: "Languages", items: ["Python", "Java", "C", "C++", "JavaScript", "SQL"] },
    { group: "Tools & Platforms", items: ["Git", "GitHub", "AWS", "Unix/Linux", "Shell Scripting", "VS Code"] }
  ],

  projects: [
    {
      code: "CODE_001",
      tab: "project-nova",
      date: "Java \u00b7 game project",
      title: "Project Nova - Battleship Style Game",
      desc: "Designed and implemented a Java-based, grid-driven strategy game inspired by Battleship, featuring a two-dimensional ocean grid, randomly/manually placed creatures of varying shapes and sizes, turn-based gameplay logic, scoring, and save/load functionality via file persistence.",
      stack: ["Java"],
      link: "https://github.com/amarachichuba-star/project-Nova",
      accent: "a1",
      visual: "grid"
    },
    {
      code: "CODE_002",
      tab: "asap-chat",
      date: "Java \u00b7 team of 3",
      title: "ASAP! - Java Chat Application",
      desc: "Collaborated in a team of 3 to design and implement a console-based messaging application in Java, replicating core features of apps like WhatsApp and Messenger.",
      stack: ["Java"],
      link: "https://github.com/amarachichuba-star/ASAP",
      accent: "a2",
      visual: "chat"
    },
    {
      code: "CODE_003",
      tab: "unix-todo",
      date: "Unix \u00b7 command line",
      title: "Unix To-Do List",
      desc: "A to-do list built for the Unix command line.",
      stack: ["Unix/Linux"],
      link: "https://github.com/amarachichuba-star/Unix-To-do",
      accent: "a3",
      visual: "term"
    }
  ],

  contact: {
    blurb: "Open to internships, collabs, or just nerding out about data.",
    email: "amarachichuba@gmail.com",
    linkedin: "https://www.linkedin.com/in/amarachi-chuba-100080390/",
    github: "https://github.com/amarachichuba-star"
  }
};
/* ========================= END CONFIG ========================= */

const VISUALS = {
  grid: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">${Array.from({length:24},(_,n)=>`<rect x="${20+(n%6)*28}" y="${10+Math.floor(n/6)*30}" width="24" height="26" fill="${[3,8,9,14,20].includes(n)?'currentColor':'none'}" stroke="currentColor" stroke-width="2"/>`).join('')}</svg>`,
  chat: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="12" width="110" height="38" rx="10" fill="currentColor"/><path d="M28 50l-6 14 20-14z" fill="currentColor"/><rect x="80" y="76" width="110" height="38" rx="10" fill="currentColor" opacity="0.7"/><path d="M172 114l6 14-20-14z" fill="currentColor" opacity="0.7"/></svg>`,
  term: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="12" width="180" height="116" rx="8" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="30,50 50,64 30,78" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="62" y1="80" x2="100" y2="80" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="30" y1="102" x2="120" y2="102" stroke="currentColor" stroke-width="2" opacity="0.6"/></svg>`,
  line: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polyline points="10,120 40,90 70,100 100,60 130,70 160,30 190,45" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="120" r="4" fill="currentColor"/><circle cx="70" cy="100" r="4" fill="currentColor"/><circle cx="130" cy="70" r="4" fill="currentColor"/><circle cx="190" cy="45" r="4" fill="currentColor"/></svg>`,
  bar: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="24" height="50" fill="currentColor"/><rect x="60" y="40" width="24" height="80" fill="currentColor" opacity="0.7"/><rect x="100" y="90" width="24" height="30" fill="currentColor"/><rect x="140" y="20" width="24" height="100" fill="currentColor" opacity="0.7"/></svg>`,
  net: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="8" fill="currentColor"/><circle cx="130" cy="40" r="8" fill="currentColor"/><circle cx="150" cy="100" r="8" fill="currentColor"/><circle cx="80" cy="110" r="8" fill="currentColor"/><line x1="60" y1="60" x2="130" y2="40" stroke="currentColor" stroke-width="2"/><line x1="130" y1="40" x2="150" y2="100" stroke="currentColor" stroke-width="2"/><line x1="60" y1="60" x2="80" y2="110" stroke="currentColor" stroke-width="2"/><line x1="80" y1="110" x2="150" y2="100" stroke="currentColor" stroke-width="2"/></svg>`
};

function render() {
  const c = CONFIG;
  document.getElementById('app').innerHTML = `
    <header>
      <nav class="tabs">
        <a href="#home" class="tab hero-tab">home</a>
        <a href="#about" class="tab">about</a>
        <a href="#projects" class="tab">projects</a>
        <a href="#contact" class="tab">contact</a>
      </nav>
      <div class="tab-bar-line"></div>
    </header>

    <main class="wrap" id="home">
      <section class="hero">
        <div class="stickers">
          ${c.stickers.map((s,i)=>`<span class="sticker s${(i%3)+1}">${s}</span>`).join('')}
        </div>
        <div class="name-block">
          <div class="name-eyebrow">${c.eyebrow}</div>
          <span class="tag-left">${c.gradTag}</span>
          <h1 class="name">${c.name}</h1>
          <span class="tag-right">${c.locationTag}</span>
        </div>
        <p class="lede">${c.ledeBefore}<span class="accent">${c.ledeAccent}</span>${c.ledeAfter}</p>
        <div class="cta-row">
          <a href="${c.ctaPrimary.href}" class="btn btn-primary">&#9998; ${c.ctaPrimary.label}</a>
          <a href="${c.ctaGhost.href}" class="btn btn-ghost">${c.ctaGhost.label}</a>
        </div>
      </section>

      <hr class="divider">

      <section id="about">
        <div class="section-head"><span class="pin"></span><h2>about the author</h2></div>
        <div class="about-grid">
          <div>
            <div class="photo-frame">
              <div class="swatch"><img class="portrait" src="${c.photo}" alt="Portrait of Eileen Amarachi Chuba smiling, wearing glasses and gold earrings" width="480" height="640"></div>
              <div class="photo-caption">hi, that’s me!</div>
            </div>
          </div>
          <div class="about-text">
            ${c.aboutParagraphs.map(p=>`<p class="tw"><span class="typed"></span><span class="rest">${p}</span></p>`).join('')}
            <div class="skills">${c.skills.map(g=>`<div class="skill-group"><div class="skill-label">${g.group}</div><div class="badges">${g.items.map(s=>`<span class="badge">${s}</span>`).join('')}</div></div>`).join('')}</div>
          </div>
        </div>
      </section>

      <hr class="divider">

      <section id="projects">
        <div class="section-head"><span class="pin"></span><h2>projects worth flipping to</h2></div>
        <div class="accordion" id="accordion">
          ${c.projects.map((p,i)=>`
            <div class="folder-item ${p.accent} ${i===0?'active':''}" data-index="${i}">
              <div class="folder-tabhead">
                <span>${p.tab}</span>
                <span class="folder-code">${p.code}</span>
              </div>
              <div class="folder-content">
                <div class="date">${p.date}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
                <a href="${p.link}" class="view-link">view project &rarr;</a>
                <div class="folder-visual">${VISUALS[p.visual] || ''}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="tap-hint">tap a tab to open that folder</div>
      </section>

      <hr class="divider">

      <footer id="contact">
        <div class="section-head" style="justify-content:center;"><span class="pin"></span><h2>let's talk</h2></div>
        <p>${c.contact.blurb}</p>
        <div class="socials">
          <a href="mailto:${c.contact.email}" class="btn btn-primary">&#9993; email me</a>
          <a href="${c.contact.linkedin}" class="btn btn-ghost">LinkedIn</a>
          <a href="${c.contact.github}" class="btn btn-ghost">GitHub</a>
        </div>
      </footer>
    </main>
  `;

  document.querySelectorAll('.folder-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.folder-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

/* ---------------- about typewriter (types once, never retypes) ---------------- */
function initTypewriter() {
  const paras = Array.from(document.querySelectorAll('.about-text p.tw'));
  if (!paras.length) return;
  const texts = paras.map(p => p.querySelector('.rest').textContent);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let started = false;

  function finish(i) { paras[i].querySelector('.typed').textContent = texts[i]; paras[i].querySelector('.rest').textContent = ''; }

  function start() {
    if (started) return; started = true;
    if (reduce) { paras.forEach((_, i) => finish(i)); return; }
    let pi = 0, ci = 0;
    const caret = document.createElement('span'); caret.className = 'tw-caret';
    function tick() {
      if (pi >= paras.length) { caret.remove(); return; }
      const p = paras[pi], typed = p.querySelector('.typed'), rest = p.querySelector('.rest');
      if (!caret.isConnected || caret.parentNode !== p) p.insertBefore(caret, rest);
      ci = Math.min(ci + 2, texts[pi].length);
      typed.textContent = texts[pi].slice(0, ci);
      rest.textContent = texts[pi].slice(ci);
      if (ci >= texts[pi].length) { pi++; ci = 0; setTimeout(tick, 350); } else { setTimeout(tick, 18); }
    }
    tick();
  }

  const target = document.getElementById('about');
  if ('IntersectionObserver' in window && target) {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { io.disconnect(); start(); }
    }, { threshold: 0.3 });
    io.observe(target);
  } else { start(); }
}

/* ---------------- pencil cursor ---------------- */
function initPencil() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  if (!hasHover) return;

  const cursor = document.getElementById('pencil-cursor');
  const canvas = document.getElementById('scribble-canvas');
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  let points = [];
  const maxAge = 550;
  let mx = -100, my = -100;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 4}px,${my - 30}px)`;
    points.push({ x: mx, y: my + 4, t: performance.now() });
    if (points.length > 40) points.shift();
  }, { passive: true });

  window.addEventListener('mousedown', () => {
    for (let i = 0; i < 6; i++) {
      const ang = Math.random() * Math.PI * 2;
      const dist = 4 + Math.random() * 10;
      points.push({ x: mx + Math.cos(ang)*dist, y: my + 30 + Math.sin(ang)*dist, t: performance.now(), dot: true });
    }
  });

  function draw(now) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (!reduceMotion) {
      points = points.filter(p => now - p.t < maxAge);
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i-1], p1 = points[i];
        if (p1.dot) continue;
        const age = (now - p1.t) / maxAge;
        const alpha = Math.max(0, 1 - age);
        ctx.strokeStyle = `rgba(43,32,19,${alpha * 0.6})`;
        ctx.lineWidth = 2 - age * 1.4;
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
      }
      for (const d of points) {
        if (!d.dot) continue;
        const dage = (now - d.t) / maxAge;
        const dalpha = Math.max(0, 1 - dage);
        if (dalpha <= 0) continue;
        ctx.fillStyle = `rgba(184,83,47,${dalpha})`;
        ctx.beginPath(); ctx.arc(d.x, d.y, 2, 0, Math.PI*2); ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ---------------- page shell + styles (injected on load) ---------------- */
const SHELL_HTML = `
<canvas id="scribble-canvas"></canvas>
<svg id="pencil-cursor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(45 20 20)">
    <rect x="17" y="4" width="6" height="22" rx="1" fill="#c98f34" stroke="#2b2013" stroke-width="1.4"/>
    <polygon points="17,26 23,26 20,34" fill="#e8c99a" stroke="#2b2013" stroke-width="1.4" stroke-linejoin="round"/>
    <polygon points="19,31 21,31 20,34" fill="#2b2013"/>
    <rect x="17" y="4" width="6" height="4" fill="#b8532f" stroke="#2b2013" stroke-width="1.4"/>
  </g>
</svg>

<div id="app"></div>
`;

const STYLES = `
  :root {
    --paper: #e6d8bb;
    --paper-2: #dbc79f;
    --grid-line: #b89f74;
    --ink: #2b2013;
    --ink-soft: #55432c;
    --rust: #b8532f;
    --circuit: #2e6b5a;
    --amber: #c98f34;
    --indigo: #4f4a8f;
    --card-shadow: rgba(43, 32, 19, 0.35);
    --tape: rgba(201, 143, 52, 0.5);
    box-sizing: border-box;
    padding-top: env(safe-area-inset-top, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
  html { scroll-padding-top: env(safe-area-inset-top, 0px); scroll-behavior: smooth; height: 100%; }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --paper: #1c150d;
      --paper-2: #241b11;
      --grid-line: #3d2f1c;
      --ink: #ecdfc2;
      --ink-soft: #c3ac83;
      --card-shadow: rgba(0,0,0,0.6);
      --tape: rgba(201,143,52,0.3);
    }
  }
  :root[data-theme="dark"] {
    --paper: #1c150d; --paper-2: #241b11; --grid-line: #3d2f1c;
    --ink: #ecdfc2; --ink-soft: #c3ac83; --card-shadow: rgba(0,0,0,0.6); --tape: rgba(201,143,52,0.3);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background:
      linear-gradient(var(--grid-line) 1px, transparent 1px) 0 0 / 34px 34px,
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) 0 0 / 34px 34px,
      var(--paper);
    background-blend-mode: normal;
    color: var(--ink);
    font-family: 'IBM Plex Mono', monospace;
    min-height: 100%;
    cursor: none;
    overflow-x: hidden;
  }
  a { color: inherit; }
  .type { font-family: 'Special Elite', cursive; }

  #pencil-cursor { position: fixed; top:0; left:0; width:34px; height:34px; pointer-events:none; z-index:9999; transform:translate(-4px,-30px); }
  #scribble-canvas { position: fixed; inset:0; pointer-events:none; z-index:9998; }
  @media (hover: none) { body{cursor:auto;} #pencil-cursor,#scribble-canvas{display:none;} }
  a, button, .folder-tab, .badge, .tab { cursor: none; }

  .wrap { max-width: 1040px; margin: 0 auto; padding: 0 24px; }

  header { position: sticky; top: env(safe-area-inset-top,0px); z-index: 40; padding-top: 18px; background: linear-gradient(var(--paper) 70%, transparent); }
  .tabs { display:flex; gap:6px; max-width:1040px; margin:0 auto; padding:0 24px; overflow-x:auto; scrollbar-width:none; }
  .tabs::-webkit-scrollbar{display:none;}
  .tab { font-size:13px; font-weight:500; white-space:nowrap; text-decoration:none; color:var(--ink-soft); background:var(--paper-2); border:1.5px solid var(--grid-line); border-bottom:none; padding:10px 18px 12px; border-radius:10px 10px 0 0; position:relative; top:2px; transition:transform .15s ease,color .15s ease; }
  .tab:hover { transform: translateY(-3px); color: var(--ink); }
  .tab.hero-tab { background: var(--rust); color:#fdf3ea; border-color:var(--rust); }
  .tab-bar-line { height:2px; background:var(--grid-line); }

  .hero { padding: 64px 0 40px; }
  .stickers { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:20px; }
  .sticker { font-size:12px; padding:6px 12px; border-radius:20px; border:1.5px solid var(--ink); transform:rotate(var(--r,-2deg)); }
  .sticker.s1{background:var(--amber); color:#2b2013; --r:-3deg;}
  .sticker.s2{background:var(--paper-2); --r:2deg;}
  .sticker.s3{background:var(--circuit); color:#fdf3ea; --r:-1deg;}

  .name-block { text-align:center; position:relative; margin:0 auto 26px; max-width:720px; }
  .name-eyebrow { font-size:13px; color:var(--ink-soft); margin-bottom:6px; }
  .name-eyebrow span { text-decoration:underline wavy var(--rust); text-decoration-thickness:1.5px; }
  h1.name { font-family:'Special Elite',cursive; font-size:clamp(42px,9vw,84px); line-height:1; letter-spacing:-0.01em; background:var(--paper-2); border:3px solid var(--ink); border-radius:6px; display:inline-block; padding:14px 30px; box-shadow:8px 8px 0 var(--card-shadow); transform:rotate(-1deg); color:var(--ink); }
  .tag-left,.tag-right { font-size:12px; background:var(--paper-2); border:1.5px solid var(--grid-line); border-radius:16px; padding:5px 12px; position:absolute; display:none; }
  @media (min-width:760px){ .tag-left,.tag-right{display:inline-block;} .tag-left{left:-30px;top:10px;transform:rotate(-6deg);} .tag-right{right:-30px;top:10px;transform:rotate(6deg);} }
  .edit-me { font-size:10.5px; color:var(--rust); display:block; margin-top:4px; }

  .lede { text-align:center; font-size:clamp(16px,2.2vw,20px); line-height:1.6; max-width:720px; margin:26px auto 30px; color:var(--ink); }
  .lede .accent { color: var(--indigo); font-weight: 600; }

  .cta-row { display:flex; justify-content:center; gap:14px; flex-wrap:wrap; }
  .btn { font-size:14px; font-weight:500; padding:13px 24px; border-radius:10px; border:2px solid var(--ink); text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:transform .15s ease, box-shadow .15s ease; box-shadow:4px 4px 0 var(--ink); }
  .btn:hover { transform:translate(-2px,-2px); box-shadow:6px 6px 0 var(--ink); }
  .btn:active { transform:translate(0,0); box-shadow:2px 2px 0 var(--ink); }
  .btn-primary { background:var(--rust); color:#fdf3ea; }
  .btn-ghost { background:var(--paper-2); color:var(--ink); }

.skills { margin-top:24px; display:grid; gap:18px; }
  .skill-label { font-family:'Special Elite',cursive; font-size:16px; color:var(--ink-soft); }
  .skill-group .badges { margin-top:10px; }
  .about-text .rest { visibility:hidden; }
  .tw-caret { display:inline-block; width:.6ch; height:1em; background:var(--rust); vertical-align:-.15em; margin-left:1px; animation:tw-blink 1s steps(1) infinite; }
  @keyframes tw-blink { 50% { opacity:0; } }

  .divider { border:none; border-top:2px dashed var(--grid-line); margin:56px 0; }

  .section-head { display:flex; align-items:baseline; gap:12px; margin-bottom:28px; }
  .section-head .pin { width:10px; height:10px; border-radius:50%; background:var(--rust); flex-shrink:0; }
  .section-head h2 { font-family:'Special Elite',cursive; font-size:clamp(22px,4vw,32px); font-weight:400; }

  .about-grid { display:grid; grid-template-columns:1fr; gap:36px; align-items:start; }
  @media (min-width:760px){ .about-grid{grid-template-columns:220px 1fr;} }
  .photo-frame { background:var(--paper-2); border:1.5px solid var(--grid-line); padding:10px 10px 34px; border-radius:4px; box-shadow:6px 6px 0 var(--card-shadow); transform:rotate(-3deg); width:190px; margin:0 auto; position:relative; }
  .photo-frame::before { content:""; position:absolute; top:-14px; left:50%; transform:translateX(-50%) rotate(-3deg); width:70px; height:24px; background:var(--tape); }
  .photo-frame .swatch { width:100%; aspect-ratio:3/4; border-radius:2px; background: radial-gradient(circle at 30% 25%, var(--amber), transparent 45%), radial-gradient(circle at 75% 70%, var(--indigo), transparent 50%), linear-gradient(160deg, var(--circuit), var(--ink)); display:flex; align-items:center; justify-content:center; }
  .photo-frame .swatch svg { width:60%; opacity:.9; }
  .photo-frame .portrait { display:block; width:100%; height:100%; object-fit:cover; object-position:center top; border-radius:2px; }
  .photo-caption { font-size:11px; text-align:center; color:var(--ink-soft); margin-top:8px; }

  .about-text p { font-size:16px; line-height:1.75; color:var(--ink); margin-bottom:16px; max-width:60ch; }
  .badges { display:flex; flex-wrap:wrap; gap:10px; margin-top:20px; }
  .badge { font-size:12.5px; padding:8px 14px; border-radius:8px; border:1.5px solid var(--ink); font-weight:500; transform:rotate(var(--r,0deg)); transition:transform .15s ease; }
  .badge:hover { transform:rotate(0deg) translateY(-2px); }
  .badge:nth-child(6n+1){background:var(--amber); color:#2b2013; --r:-2deg;}
  .badge:nth-child(6n+2){background:var(--paper-2); --r:1deg;}
  .badge:nth-child(6n+3){background:var(--circuit); color:#fdf3ea; --r:-1deg;}
  .badge:nth-child(6n+4){background:var(--rust); color:#fdf3ea; --r:2deg;}
  .badge:nth-child(6n+5){background:var(--indigo); color:#fdf3ea; --r:-1.5deg;}
  .badge:nth-child(6n+6){background:var(--paper-2); --r:1.5deg;}

  /* ---- folder accordion (like layered index tabs) ---- */
  .accordion { display:flex; gap:6px; align-items:stretch; min-height: 440px; }
  .folder-item { border:2px solid var(--ink); border-radius:6px; box-shadow:5px 5px 0 var(--card-shadow); overflow:hidden; cursor:none; transition: flex-grow .35s ease, background .2s ease; display:flex; flex-direction:column; position:relative; }
  .folder-item.a1 { background: var(--amber); }
  .folder-item.a2 { background: var(--circuit); color:#fdf3ea; }
  .folder-item.a3 { background: var(--indigo); color:#fdf3ea; }
  .folder-item { flex: 0 0 64px; }
  .folder-item.active { flex: 1 1 auto; }

  .folder-tabhead { writing-mode: vertical-rl; text-orientation: mixed; padding: 18px 14px; font-family:'Special Elite',cursive; font-size:18px; display:flex; align-items:center; gap:10px; flex-shrink:0; border-bottom: 2px solid var(--ink); background: rgba(0,0,0,0.06); }
  .folder-item.active .folder-tabhead { writing-mode: horizontal-tb; border-bottom:2px solid var(--ink); border-right:none; padding:14px 18px; font-size:15px; justify-content:space-between; }
  .folder-code { font-family:'IBM Plex Mono',monospace; font-size:10px; opacity:.75; }

  .folder-content { padding: 0; opacity: 0; max-height: 0; overflow: hidden; transition: opacity .3s ease .1s; background: var(--paper-2); color: var(--ink); flex: 1; }
  .folder-item.active .folder-content { opacity: 1; max-height: none; padding: 20px 22px 24px; overflow: auto; }
  .folder-content .date { font-size:11px; color:var(--ink-soft); margin-bottom:8px; }
  .folder-content h3 { font-family:'Special Elite',cursive; font-size:24px; font-weight:400; margin-bottom:10px; }
  .folder-content p { font-size:14.5px; line-height:1.65; color:var(--ink-soft); margin-bottom:14px; max-width:46ch; }
  .stack { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }
  .stack span { font-size:11px; padding:3px 9px; border-radius:6px; background:var(--paper); border:1px solid var(--grid-line); color:var(--ink-soft); }
  .view-link { font-size:13px; font-weight:600; text-decoration:none; border-bottom:2px solid currentColor; padding-bottom:1px; }
  .folder-visual { margin-top: 14px; }
  .folder-visual svg { width: 140px; height: auto; opacity: .9; }
  .tap-hint { font-size: 11px; margin-top: 8px; opacity: .8; }

  footer { text-align:center; padding:60px 0 80px; }
  footer h2 { font-family:'Special Elite',cursive; font-size:clamp(24px,5vw,36px); margin-bottom:14px; font-weight:400; }
  footer p { color:var(--ink-soft); margin-bottom:26px; }
  .socials { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }

  ::selection { background: var(--amber); color: var(--ink); }
  @media (prefers-reduced-motion: reduce) { * { transition:none !important; animation:none !important; } }
  @media (max-width: 640px) {
    .accordion { flex-direction: column; min-height: auto; }
    .folder-item { flex: 0 0 52px; }
    .folder-item.active { flex: 1 1 auto; }
    .folder-tabhead { writing-mode: horizontal-tb; padding: 12px 16px; }
    .folder-item.active .folder-tabhead { padding: 12px 16px; }
  }
`;

/* ---------------- boot ---------------- */
(function boot() {
  const style = document.createElement('style');
  style.textContent = STYLES;
  document.head.appendChild(style);
  document.body.insertAdjacentHTML('afterbegin', SHELL_HTML);
  render();
  initTypewriter();
  initPencil();
})();
