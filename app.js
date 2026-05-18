'use strict';

/* ═══════════════════════════════════════════════
   DATA — ROLES
═══════════════════════════════════════════════ */
const ROLES = [
  { id:'senador',        label:'Senador',        intro:'Ang Senador ay nagtatayo ng mga batas para sa buong bansa. 12 puwesto ang mapupunan sa 2028. Bawat botante ay may hanggang 12 boto.' },
  { id:'presidente',     label:'Presidente',     intro:'Ang Presidente ang pinakamataas na opisyal ng bansa. 1 boto, 6 na taon — hindi na maaaring tumakbo ulit.' },
  { id:'bisepresidente', label:'Bise Presidente', intro:'Ang Bise Presidente ay hiwalay na inihahalal — pwedeng manggaling sa ibang partido kaysa sa Presidente.' },
];

/* ═══════════════════════════════════════════════
   DATA — 2022 PH ELECTION CANDIDATES
   Age = as of May 8 2028 (6 years after 2022)
   wiki = Wikipedia article title for photo lookup
   Senators: all 64 official ballot candidates kept
   to top 24 most notable. President & VP: all
   official ballot candidates included.
═══════════════════════════════════════════════ */
const CANDIDATES = {
  senador: [
    { id:'s01', name:'Aquino, Bam',           display:'Bam Aquino',           age:51, partido:'Liberal Party',           wiki:'Paolo Benigno Aquino IV',              bg:'#DBEAFE', tc:'#1E40AF' },
    { id:'s02', name:'Bautista, Herbert',      display:'Herbert Bautista',     age:58, partido:'NPC',                     wiki:'Herbert Bautista',                     bg:'#FEF3C7', tc:'#92400E' },
    { id:'s03', name:'Belgica, Greco',         display:'Greco Belgica',        age:56, partido:'PDDS',                    wiki:'Greco Belgica',                        bg:'#F0FDF4', tc:'#166534' },
    { id:'s04', name:'Cayetano, Alan Peter',   display:'Alan Peter Cayetano',  age:56, partido:'Nacionalista',            wiki:'Alan Peter Cayetano',                  bg:'#D1FAE5', tc:'#065F46' },
    { id:'s05', name:'Colmenares, Neri',       display:'Neri Colmenares',      age:62, partido:'Makabayan',               wiki:'Neri Colmenares',                      bg:'#FCE7F3', tc:'#831843' },
    { id:'s06', name:'dela Rosa, Bato',        display:'Ronald dela Rosa',     age:63, partido:'PDP-Laban',               wiki:'Ronald dela Rosa',                     bg:'#EDE9FE', tc:'#4C1D95' },
    { id:'s07', name:'Diokno, Chel',           display:'Chel Diokno',          age:61, partido:'KNP',                    wiki:'Jose Manuel Diokno (politician)',       bg:'#ECFDF5', tc:'#065F46' },
    { id:'s08', name:'Ejercito, JV',           display:'JV Ejercito',          age:50, partido:'UNA',                    wiki:'Joseph Victor Ejercito',               bg:'#FFF7ED', tc:'#C2410C' },
    { id:'s09', name:'Escudero, Chiz',         display:'Francis Escudero',     age:58, partido:'NPC',                    wiki:'Francis Escudero',                     bg:'#F0FDF4', tc:'#166534' },
    { id:'s10', name:'Estrada, Jinggoy',       display:'Jinggoy Estrada',      age:65, partido:'PMP',                    wiki:'Jinggoy Estrada',                      bg:'#FEF2F2', tc:'#991B1B' },
    { id:'s11', name:'Gatchalian, Win',        display:'Win Gatchalian',       age:51, partido:'NPC',                    wiki:'Sherwin Gatchalian',                   bg:'#EFF6FF', tc:'#1D4ED8' },
    { id:'s12', name:'Go, Bong',               display:'Bong Go',              age:54, partido:'PDP-Laban',              wiki:'Christopher Lawrence Go',              bg:'#FDF4FF', tc:'#7E22CE' },
    { id:'s13', name:'Gordon, Dick',           display:'Dick Gordon',          age:82, partido:'Bagumbayan-VNP',         wiki:'Richard Gordon',                       bg:'#FFF1F2', tc:'#BE123C' },
    { id:'s14', name:'Gutoc, Samira',          display:'Samira Gutoc',         age:52, partido:'Aksyon Demokratiko',     wiki:'Samira Gutoc',                         bg:'#FDF4FF', tc:'#6D28D9' },
    { id:'s15', name:'Honasan, Gringo',        display:'Gringo Honasan',       age:76, partido:'Independent',           wiki:'Gringo Honasan',                       bg:'#FEF3C7', tc:'#92400E' },
    { id:'s16', name:'Hontiveros, Risa',       display:'Risa Hontiveros',      age:58, partido:'Akbayan',               wiki:'Risa Hontiveros',                      bg:'#FDF2F8', tc:'#9D174D' },
    { id:'s17', name:'Lacson, Kuya Alex',      display:'Kuya Alex Lacson',     age:65, partido:'Kapatiran Party',        wiki:'Alex Lacson',                          bg:'#ECFDF5', tc:'#065F46' },
    { id:'s18', name:'Legarda, Loren',         display:'Loren Legarda',        age:62, partido:'NPC',                   wiki:'Loren Legarda',                        bg:'#FFFBEB', tc:'#B45309' },
    { id:'s19', name:'Marcos, Imee',           display:'Imee Marcos',          age:69, partido:'Nacionalista',          wiki:'Imee Marcos',                          bg:'#F0F9FF', tc:'#0369A1' },
    { id:'s20', name:'Padilla, Robin',         display:'Robin Padilla',        age:57, partido:'PDP-Laban',             wiki:'Robin Padilla',                        bg:'#FFF7ED', tc:'#C2410C' },
    { id:'s21', name:'Panelo, Sal',            display:'Salvador Panelo',      age:73, partido:'PDP-Laban',             wiki:'Salvador Panelo',                      bg:'#F8FAFC', tc:'#475569' },
    { id:'s22', name:'Revilla, Bong',          display:'Bong Revilla Jr.',     age:59, partido:'Lakas-CMD',             wiki:'Ramon Revilla Jr.',                    bg:'#F0FDF4', tc:'#15803D' },
    { id:'s23', name:'Tolentino, Francis',     display:'Francis Tolentino',    age:65, partido:'PDP-Laban',             wiki:'Francis Tolentino',                    bg:'#EEF2FF', tc:'#3730A3' },
    { id:'s24', name:'Trillanes, Antonio',     display:'Antonio Trillanes IV', age:55, partido:'Liberal Party',         wiki:'Antonio Trillanes IV',                 bg:'#FEF2F2', tc:'#B91C1C' },
    { id:'s25', name:'Tulfo, Raffy',           display:'Raffy Tulfo',          age:65, partido:'Independent',           wiki:'Raffy Tulfo',                          bg:'#FEF9C3', tc:'#854D0E' },
    { id:'s26', name:'Villanueva, Joel',       display:'Joel Villanueva',      age:52, partido:'CIBAC / Independent',   wiki:'Joel Villanueva',                      bg:'#F0FDF4', tc:'#166534' },
    { id:'s27', name:'Villar, Mark',           display:'Mark Villar',          age:49, partido:'NPC',                   wiki:'Mark Villar',                          bg:'#FFFBEB', tc:'#92400E' },
    { id:'s28', name:'Zubiri, Migz',           display:'Migz Zubiri',          age:55, partido:'Independent',           wiki:'Juan Miguel Zubiri',                   bg:'#EFF6FF', tc:'#1E40AF' },
  ],
  presidente: [
    { id:'p1', name:'Abella, Ernie',     display:'Ernie Abella',     age:76, partido:'Independent',        wiki:'Ernesto Abella',           bg:'#F8FAFC', tc:'#475569' },
    { id:'p2', name:'de Guzman, Leody', display:'Leody de Guzman',  age:60, partido:'Partido Lakas ng Masa', wiki:'Leody de Guzman',        bg:'#FEF2F2', tc:'#991B1B' },
    { id:'p3', name:'Gonzales, Norberto',display:'Norberto Gonzales',age:79, partido:'PDSP',               wiki:'Norberto Gonzales',        bg:'#F0F9FF', tc:'#0369A1' },
    { id:'p4', name:'Lacson, Ping',      display:'Ping Lacson',      age:70, partido:'Independent',        wiki:'Panfilo Lacson',           bg:'#FFFBEB', tc:'#B45309' },
    { id:'p5', name:'Mangondato, Faisal',display:'Faisal Mangondato',age:67, partido:'Katipunan ng Kamalayang Kayumanggi', wiki:'Faisal Mangondato', bg:'#F0FDF4', tc:'#166534' },
    { id:'p6', name:'Marcos, Bongbong',  display:'Bongbong Marcos',  age:70, partido:'PFP',                wiki:'Bongbong Marcos',          bg:'#EFF6FF', tc:'#1E40AF' },
    { id:'p7', name:'Montemayor, Jose Jr.',display:'Jose Montemayor Jr.',age:73,partido:'DPP',             wiki:'Jose Montemayor Jr.',      bg:'#ECFDF5', tc:'#065F46' },
    { id:'p8', name:'Moreno, Isko',      display:'Isko Moreno',      age:50, partido:'Aksyon Demokratiko', wiki:'Francisco Domagoso',       bg:'#D1FAE5', tc:'#065F46' },
    { id:'p9', name:'Pacquiao, Manny',   display:'Manny Pacquiao',   age:49, partido:'PROMDI',             wiki:'Manny Pacquiao',           bg:'#FEF3C7', tc:'#92400E' },
    { id:'p10',name:'Robredo, Leni',     display:'Leni Robredo',     age:59, partido:'Independent',        wiki:'Leni Robredo',             bg:'#FCE7F3', tc:'#831843' },
  ],
  bisepresidente: [
    { id:'v1', name:'Atienza, Lito',      display:'Lito Atienza',     age:79, partido:'PROMDI',             wiki:'Lito Atienza',            bg:'#FEF3C7', tc:'#92400E' },
    { id:'v2', name:'Bello, Walden',      display:'Walden Bello',     age:80, partido:'Partido Lakas ng Masa', wiki:'Walden Bello',          bg:'#FEF2F2', tc:'#991B1B' },
    { id:'v3', name:'David, Rizalito',    display:'Rizalito David',   age:74, partido:'DPP',                wiki:'Rizalito David',          bg:'#F8FAFC', tc:'#475569' },
    { id:'v4', name:'Duterte, Sara',      display:'Sara Duterte',     age:49, partido:'Lakas-CMD',          wiki:'Sara Duterte',            bg:'#DBEAFE', tc:'#1E40AF' },
    { id:'v5', name:'Lopez, Manny SD',    display:'Manny SD Lopez',   age:68, partido:'Labor Party Philippines', wiki:'Manny Lopez (politician)', bg:'#ECFDF5', tc:'#065F46' },
    { id:'v6', name:'Ong, Willie',        display:'Willie Ong',       age:62, partido:'Aksyon Demokratiko', wiki:'Willie Ong',              bg:'#F0FDF4', tc:'#166534' },
    { id:'v7', name:'Pangilinan, Kiko',   display:'Kiko Pangilinan',  age:63, partido:'Liberal Party',      wiki:'Francis Pangilinan',      bg:'#FCE7F3', tc:'#831843' },
    { id:'v8', name:'Serapio, Carlos',    display:'Carlos Serapio',   age:64, partido:'Katipunan ng Kamalayang Kayumanggi', wiki:'Carlos Serapio',  bg:'#FFFBEB', tc:'#B45309' },
    { id:'v9', name:'Sotto, Tito',        display:'Tito Sotto',       age:81, partido:'NPC',                wiki:'Vicente Sotto III',       bg:'#EDE9FE', tc:'#4C1D95' },
  ],
};

/* ═══════════════════════════════════════════════
   WIKIPEDIA PHOTO CACHE + LOADER
   Open Wikipedia REST API — no key needed
═══════════════════════════════════════════════ */
const photoCache = {};

async function loadWikiPhoto(wikiName) {
  if (wikiName in photoCache) return photoCache[wikiName];
  photoCache[wikiName] = null;
  try {
    const slug = encodeURIComponent(wikiName.replace(/ /g,'_'));
    const res  = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`, { headers:{ Accept:'application/json' } });
    if (!res.ok) return null;
    const data = await res.json();
    photoCache[wikiName] = data?.thumbnail?.source || null;
  } catch { photoCache[wikiName] = null; }
  return photoCache[wikiName];
}

function applyPhotoToDOM(candId, photoUrl) {
  if (!photoUrl) return;

  // Candidate checklist photo
  const wrap = document.getElementById(`pw-${candId}`);
  if (wrap) {
    let img = wrap.querySelector('img');
    if (!img) { img = document.createElement('img'); img.alt=''; wrap.appendChild(img); }
    img.src = photoUrl;
    img.onerror = () => { img.style.display='none'; };
    const fb = wrap.querySelector('.cand-initials-fb');
    if (fb) fb.style.display = 'none';
  }

  // Ranking row photo
  const rankWrap = document.getElementById(`lrp-pw-${candId}`);
  if (rankWrap) {
    let img = rankWrap.querySelector('img');
    if (!img) { img = document.createElement('img'); img.alt=''; rankWrap.appendChild(img); }
    img.src = photoUrl;
    img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center';
    img.onerror = () => { img.style.display='none'; };
    const ini = rankWrap.querySelector('.lrp-photo-ini');
    if (ini) ini.style.display = 'none';
  }
}

function loadPhotosAsync(cands) {
  cands.forEach(c => {
    if (photoCache[c.wiki] !== undefined) {
      applyPhotoToDOM(c.id, photoCache[c.wiki]);
    } else {
      loadWikiPhoto(c.wiki).then(url => applyPhotoToDOM(c.id, url));
    }
  });
}

/* ═══════════════════════════════════════════════
   DATA — QUESTIONS
   Structure: 4 positibo + 4 negatibo + 4 espesipiko
   bad:true  → checked candidate gets -2
   bad:false → checked candidate gets +3
   Each round: exactly 4 of each type, shuffled within type
═══════════════════════════════════════════════ */

/* 4 POSITIBO — good traits, check who has them */
const Q_POSITIVE = [
  {
    type: 'positibo',
    text: 'May malasakit ba siya sa mahihirap?',
    sub: 'Ang tunay na lingkod-bayan ay may patunay, hindi lang salita. Piliin ang mga sa tingin mo ay talagang kumikilos para sa ordinaryong Pilipino.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'Mapagkakatiwalaan mo ba siya?',
    sub: 'Sa lahat ng narinig at nakita mo, siya ba ay tapat? Piliin ang mga sa tingin mo ay may integridad at tinutupad ang kanilang salita.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'Nakikinig ba siya sa mamamayan?',
    sub: 'Ang magandang lider ay nakikinig sa bayan bago kumilos. Piliin ang mga sa tingin mo ay bukas sa ibang pananaw at hindi puro sariling desisyon.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'May kakayahan ba siyang gawin ang trabaho ng Senador?',
    sub: 'Ang Senador ay gumagawa ng batas para sa buong bansa, hindi lang sa kanyang lugar. Piliin ang mga may tunay na kaalaman at kakayahan para dito.',
    bad: false,
  },
];

/* 4 NEGATIBO — red flags, check who might do these */
const Q_NEGATIVE = [
  {
    type: 'negatibo',
    text: 'Posible bang magnakaw siya sa pondo ng bayan?',
    sub: 'Kapag nasa kapangyarihan na, maraming pagkakataon para mag-abuso. Piliin ang mga sa tingin mo ay may posibilidad na gawin ito kung wala mang nagbabantay.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Para sa sarili ba niya ang lahat ng ginagawa niya?',
    sub: 'May mga politiko na ang bawat galaw ay para sa susunod na eleksyon at hindi para sa bayan. Piliin ang mga sa tingin mo ay pangunahing nagtatrabaho para sa sariling interes.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Sikat ba siya dahil artista o kilala lang, hindi dahil sa nagawa niya?',
    sub: 'Marami ang bumoboto sa pangalan at hindi sa plataporma. Ang pagiging sikat ay hindi patunay ng kakayahan. Piliin ang mga kilala mo dahil sa katanyagan lamang.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Ang ayuda ba niya ay para lang makakuha ng boto?',
    sub: 'Tandaan: ang ayuda ay galing sa iyong buwis at hindi ito regalo ng politiko. Piliin ang mga sa tingin mo ay gumagamit ng tulong para makuha ang iyong boto.',
    bad: true,
  },
];

/* 4 ESPESIPIKO — platform and programs */
const Q_SPECIFIC = [
  {
    type: 'espesipiko',
    text: 'Edukasyon',
    sub: 'Mahalaga ang senador na may tunay na programa para sa edukasyon. Piliin ang mga may kongkretong plano para sa mas magandang paaralan, mas maraming iskolarship, at mas mataas na kalidad ng pagtuturo.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Trabaho at kabuhayan',
    sub: 'Ang trabaho ay pundasyon ng bawat pamilya. Piliin ang mga may programa para lumikha ng trabaho, hindi lang para sa mga may koneksyon kundi para sa lahat ng Pilipino.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Kalusugan',
    sub: 'Ang gamot, ospital, at doktor ay dapat abot-kaya ng lahat at hindi lang ng mayayaman. Piliin ang mga aktibong nagtataguyod ng mas abot-kayang serbisyong pangkalusugan.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Kalikasan at pagkain',
    sub: 'Ang tubig, lupa, at likas na yaman ay pamana ng Pilipino. Piliin ang mga may programa para protektahan ang kapaligiran at tiyaking may sapat na pagkain ang bawat pamilya.',
    bad: false,
  },
];

const QUESTION_BANK = [...Q_POSITIVE, ...Q_NEGATIVE, ...Q_SPECIFIC];

/* Shuffle helper */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Always pick exactly 4+4+4 = 12, shuffled within each group */
function pickQuestions() {
  return [
    ...shuffle(Q_POSITIVE).slice(0, 4),
    ...shuffle(Q_NEGATIVE).slice(0, 4),
    ...shuffle(Q_SPECIFIC).slice(0, 4),
  ];
}

/* ═══════════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════════ */
const state = {
  role: 'senador',
  scores: {},       // { [roleId]: { [candId]: number } }
  answered: {},     // { [roleId]: boolean }
  questions: [],
  currentQ: 0,
  checked: {},      // { [qIndex]: Set of candIds }
};

function initScores(roleId) {
  if (!state.scores[roleId]) {
    state.scores[roleId] = {};
    (CANDIDATES[roleId] || []).forEach(c => { state.scores[roleId][c.id] = 0; });
  }
  if (!state.answered[roleId]) state.answered[roleId] = false;
}

/* ═══════════════════════════════════════════════
   SCREEN HELPERS
═══════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
  if (id === 's-questions') fixQBodyOffset();
}

/* Push q-body below the fixed header */
function fixQBodyOffset() {
  requestAnimationFrame(() => {
    const hdr  = document.querySelector('.q-fixed-header');
    const body = document.getElementById('q-body');
    if (hdr && body) {
      const h = hdr.getBoundingClientRect().height;
      body.style.paddingTop = (h + 8) + 'px';
    }
  });
}

function getSurname(c) {
  return c.name.split(',')[0].trim();
}

/* Points color: green=high positive, yellow=low positive, white=zero, red=negative */
function ptsColor(pts) {
  if (pts > 6)  return '#4ADE80'; // bright green
  if (pts > 0)  return '#FDE68A'; // yellow
  if (pts === 0) return '#94A3B8'; // muted white/grey
  return '#F87171';                // red for negative
}

function ptsBarColor(pts, rank) {
  if (pts < 0)  return '#7F1D1D'; // dark red bar
  if (pts === 0) return '#1E3A58'; // dark/invisible bar
  if (rank === 0) return '#F5C518';
  if (rank < 3)  return '#2E7DD1';
  return '#5BA4D8';
}

function renderRanking() {
  const role   = state.role;
  initScores(role);
  const cands  = CANDIDATES[role] || [];
  const scores = state.scores[role];

  // Check if everyone is still at zero — hide panel entirely
  const allZero = cands.every(c => (scores[c.id] || 0) === 0);
  const panel   = document.getElementById('ranking-panel');
  if (panel) panel.style.display = allZero ? 'none' : 'block';
  if (allZero) return;

  const sorted = [...cands].sort((a, b) => (scores[b.id]||0) - (scores[a.id]||0));

  // Top-N = number of candidates with pts > 0 (capped at seat count)
  const seatCount = role === 'senador' ? 12 : 1;
  const positiveCount = sorted.filter(c => (scores[c.id]||0) > 0).length;
  const topN = Math.min(positiveCount, seatCount);

  // Max positive score for bar scaling
  const maxPos = Math.max(...sorted.map(c => scores[c.id]||0), 1);

  document.getElementById('lrp-role-name').textContent =
    ROLES.find(r => r.id === role)?.label || '';

  const container = document.getElementById('lrp-rows');
  container.innerHTML = sorted.map((c, i) => {
    const pts      = scores[c.id] || 0;
    const inTop    = topN > 0 && i < topN;
    const rankCls  = i === 0 && pts > 0 ? 'rank-1' : i === 1 && pts > 0 ? 'rank-2' : i === 2 && pts > 0 ? 'rank-3' : '';
    const topCls   = inTop ? 'in-top' : 'out-top';

    // Bar width: positive uses maxPos scale, negative uses fixed small bar, zero = invisible
    const barPct   = pts > 0 ? Math.max(Math.round((pts / maxPos) * 100), 4)
                   : pts < 0 ? 6 : 0;

    const parts    = c.display.split(' ');
    const ini      = (parts[0][0] + (parts[1]?.[0]||'')).toUpperCase();
    const surname  = getSurname(c);
    const photoUrl = photoCache[c.wiki];
    const iniStyle = photoUrl ? 'display:none' : '';
    const imgTag   = photoUrl
      ? `<img src="${photoUrl}" alt="" onerror="this.style.display='none'">`
      : '';

    const numCol  = inTop  ? '#F5C518' : pts < 0 ? '#F87171' : '#3A5878';
    const namCol  = inTop  ? '#C8DFF8' : pts < 0 ? '#FDA4A4' : pts === 0 ? '#2E4A62' : '#7AABDC';
    const barCol  = ptsBarColor(pts, i);
    const ptCol   = ptsColor(pts);
    const ptsDisp = pts > 0 ? `+${pts}` : `${pts}`;

    const divider = (topN > 0 && i === topN)
      ? `<div class="lrp-divider"><span>${topN === seatCount ? `— ibaba ng top ${topN} —` : '— 0 pts pababa —'}</span></div>`
      : '';

    return `${divider}
      <div class="lrp-row ${rankCls} ${topCls}">
        <span class="lrp-num" style="color:${numCol}">${i+1}</span>
        <div class="lrp-photo" style="background:${c.bg}" id="lrp-pw-${c.id}">
          <div class="lrp-photo-ini" style="background:${c.bg};color:${c.tc};${iniStyle}">${ini}</div>
          ${imgTag}
        </div>
        <div class="lrp-bar-col">
          <span class="lrp-surname" style="color:${namCol}">${surname}</span>
          <div class="lrp-track">
            ${barPct > 0 ? `<div class="lrp-fill" style="width:${barPct}%;background:${barCol}"></div>` : ''}
          </div>
        </div>
        <span class="lrp-pts" style="color:${ptCol};font-weight:${inTop?'800':'600'}">${ptsDisp}pt</span>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════
   PHOTO SLIDESHOW
═══════════════════════════════════════════════ */
function initSlider() {
  const slider = document.getElementById('photo-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const dotsEl = document.getElementById('slide-dots');
  if (!slides.length) return;

  // Build dots
  dotsEl.innerHTML = Array.from(slides).map((_, i) =>
    `<div class="slide-dot${i===0?' active':''}" data-i="${i}"></div>`
  ).join('');
  const dots = dotsEl.querySelectorAll('.slide-dot');

  let cur = 0;
  function goTo(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }
  setInterval(() => goTo(cur + 1), 4000);
}

/* ═══════════════════════════════════════════════
   HOME SCREEN
═══════════════════════════════════════════════ */
function renderHome() {
  const role = state.role;
  initScores(role);

  /* role tabs */
  const tabsEl = document.getElementById('role-tabs');
  tabsEl.innerHTML = ROLES.map(r => `
    <button class="role-tab${r.id === role ? ' active' : ''}"
      onclick="App.setRole('${r.id}')">${r.label}</button>
  `).join('');

  /* intro text — fixed grammar */
  const introMap = {
    senador: 'Ang Senador ay gumagawa ng mga batas para sa buong bansa. Sa 2028, 12 puwesto ang mapupunan. Bawat botante ay may hanggang 12 boto.',
    presidente: 'Ang Presidente ang pinakamataas na opisyal ng bansa. Isang boto, anim na taon. Hindi na maaaring tumakbo ulit pagkatapos ng isang termino.',
    bisepresidente: 'Ang Bise Presidente ay hiwalay na inihahalal. Maaaring manggaling sa ibang partido kaysa sa Presidente.',
  };
  document.getElementById('home-intro-text').textContent = introMap[role] || '';

  /* start btn label */
  const done = state.answered[role];
  document.getElementById('btn-start-label').textContent =
    done ? 'Ulitin ang Tsek Mo' : 'Simulan ang Tsek Mo';
  const note = document.getElementById('answered-note');
  note.style.display = done ? 'block' : 'none';

  /* Show/hide slider vs ranking panel */
  const allZero = (CANDIDATES[role] || []).every(c => (state.scores[role]?.[c.id] || 0) === 0);
  const slider  = document.getElementById('photo-slider');
  const panel   = document.getElementById('ranking-panel');
  if (slider) slider.style.display = allZero ? 'block' : 'none';
  if (panel)  panel.style.display  = allZero ? 'none'  : 'block';

  renderRanking();
}

/* ═══════════════════════════════════════════════
   QUESTION SCREEN
═══════════════════════════════════════════════ */
function renderQuestion() {
  const qi   = state.currentQ;
  const q    = state.questions[qi];
  const role = state.role;
  const cands = [...(CANDIDATES[role] || [])].sort((a, b) => a.name.localeCompare(b.name));
  const total = state.questions.length;
  const pct   = Math.max(Math.round((qi / total) * 100), 4);

  document.getElementById('q-step-label').textContent = `${qi + 1} / ${total}`;
  const typeLabels = { positibo:'✅ Positibo', negatibo:'⚠️ Negatibo', espesipiko:'📋 Programa' };
  const badge = document.getElementById('q-cat-badge');
  badge.textContent = typeLabels[q.type] || (q.bad ? '⚠️ Negatibo' : '✅ Positibo');
  badge.className = 'q-cat-badge ' + (q.bad ? 'bad' : q.type === 'espesipiko' ? 'specific' : 'good');
  document.getElementById('q-prog-fill').style.width = pct + '%';

  const typeLabel = typeLabels[q.type] || '';
  const badgeCls  = q.bad ? 'bad' : q.type === 'espesipiko' ? 'specific' : 'good';
  document.getElementById('q-question-block').innerHTML = `
    <div class="q-type-badge ${badgeCls}">${typeLabel}</div>
    <div class="q-text">${q.text}</div>
    <div class="q-subtext">${q.sub}</div>
  `;

  const checkedSet = state.checked[qi] || new Set();

  const rows = cands.map(c => {
    const isCh  = checkedSet.has(c.id);
    const cls   = isCh ? (q.bad ? 'checked-bad' : 'checked') : '';
    const tick  = isCh ? '✓' : '';
    const parts = c.display.split(' ');
    const ini   = (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
    return `
      <div class="cand-item ${cls}" id="ci-${c.id}" onclick="App.toggleCand('${c.id}')">
        <div class="cand-chkbox" id="chk-${c.id}">${tick}</div>
        <div class="cand-photo-wrap" id="pw-${c.id}">
          <div class="cand-initials-fb" style="background:${c.bg};color:${c.tc}">${ini}</div>
        </div>
        <div class="cand-details">
          <div class="cand-name">${c.display}</div>
          <div class="cand-meta">${c.age}t · ${c.partido}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('q-body').innerHTML = `<div class="cand-list-v">${rows}</div>`;
  fixQBodyOffset();
  requestAnimationFrame(() => loadPhotosAsync(cands));
}

/* ═══════════════════════════════════════════════
   RESULTS SCREEN
═══════════════════════════════════════════════ */
function renderResults() {
  const role  = state.role;
  const cands = CANDIDATES[role] || [];
  const scores = state.scores[role];
  const sorted = [...cands].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
  const max = Math.max(...sorted.map(c => scores[c.id] || 0), 1);

  const rankClass = ['rank-1', 'rank-2', 'rank-3', '', '', ''];
  const rankLabel = ['#1', '#2', '#3', '#4', '#5', '#6'];
  const barColors = ['#1A5EA8', '#2E7DD1', '#F5C518', '#5BA4D8', '#90C0F0', '#A0B8D0'];

  document.getElementById('results-role-sub').textContent =
    `Base sa iyong mga sagot para sa posisyon ng ${ROLES.find(r => r.id === role)?.label}`;

  document.getElementById('results-list').innerHTML = sorted.map((c, i) => {
    const pts = scores[c.id] || 0;
    const pct = Math.max(Math.round((pts / max) * 100), 3);
    const color = barColors[i] || '#90C0F0';
    const verdict = i === 0
      ? 'Pinakamataas ang iyong kumpiyansa dito.'
      : i === 1
      ? 'Malakas din ang iyong pagtangkilik.'
      : pts > 0
      ? 'May ilang puntos — pag-isipan pa.'
      : 'Mababa ang iyong kumpiyansa.';
    const vbg = i === 0 ? '#EFF6FF' : i === 1 ? '#F0F9FF' : '#F8FAFC';
    const vtc = i === 0 ? '#1E40AF' : i === 1 ? '#1A5EA8' : '#64748B';

    return `
      <div class="result-card ${rankClass[i] || ''}">
        <div class="result-rank">${rankLabel[i]}</div>
        <div class="result-av" style="background:${c.bg};color:${c.tc}">${c.initials}</div>
        <div class="result-info">
          <div class="result-name">${c.name}</div>
          <div class="result-bar-track">
            <div class="result-bar-fill" style="width:${pct}%;background:${color}"></div>
          </div>
          <div class="result-pts">${pts} puntos</div>
          <div class="result-verdict" style="background:${vbg};color:${vtc}">${verdict}</div>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════
   PUBLIC APP API
═══════════════════════════════════════════════ */
const App = {

  goHome() {
    renderHome();
    showScreen('s-home');
  },

  setRole(roleId) {
    state.role = roleId;
    renderHome();
  },

  startQuestions() {
    const role = state.role;
    initScores(role);
    (CANDIDATES[role] || []).forEach(c => { state.scores[role][c.id] = 0; });
    state.answered[role] = false;
    state.questions = pickQuestions();
    state.currentQ  = 0;
    state.checked   = {};
    state.questions.forEach((_, i) => { state.checked[i] = new Set(); });
    renderRanking();
    renderQuestion();
    showScreen('s-questions');
  },

  toggleCand(candId) {
    const qi  = state.currentQ;
    const set = state.checked[qi];
    const q   = state.questions[qi];
    const item = document.getElementById(`ci-${candId}`);
    const chk  = document.getElementById(`chk-${candId}`);
    if (!item) return;
    if (set.has(candId)) {
      set.delete(candId);
      item.className = 'cand-item';
      chk.textContent = '';
      chk.style.cssText = '';
    } else {
      set.add(candId);
      item.className = `cand-item ${q.bad ? 'checked-bad' : 'checked'}`;
      if (q.bad) { chk.style.background='#DC2626'; chk.style.borderColor='#991B1B'; chk.style.color='#fff'; }
      else        { chk.style.background='#F5C518'; chk.style.borderColor='#C9960A'; chk.style.color='#0D3B8C'; }
      chk.textContent = '✓';
    }
  },

  nextQ(apply) {
    if (apply) {
      const qi   = state.currentQ;
      const q    = state.questions[qi];
      const role = state.role;
      const set  = state.checked[qi];
      const sc   = state.scores[role];
      (CANDIDATES[role] || []).forEach(c => {
        if (set.has(c.id)) sc[c.id] = (sc[c.id] || 0) + (q.bad ? -2 : 3);
      });
      renderRanking();
    }
    state.currentQ++;
    if (state.currentQ >= state.questions.length) {
      state.answered[state.role] = true;
      renderHome();
      showScreen('s-home');
      setTimeout(() => {
        const panel = document.getElementById('ranking-panel');
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return;
    }
    renderQuestion();
    fixQBodyOffset();
  },

  saveRankingImage() {
    const btn   = document.getElementById('btn-save-img');
    const panel = document.getElementById('ranking-panel');
    if (!panel || !btn) return;

    btn.classList.add('saving');
    btn.textContent = '⏳ Nag-se-save...';

    const role      = state.role;
    const roleLabel = ROLES.find(r => r.id === role)?.label || 'ranking';
    const w = panel.scrollWidth;
    const h = panel.scrollHeight;

    // Build rows as plain text list for a clean canvas render
    const scores  = state.scores[role] || {};
    const cands   = CANDIDATES[role] || [];
    const sorted  = [...cands].sort((a,b) => (scores[b.id]||0)-(scores[a.id]||0));
    const topN    = role === 'senador' ? 12 : 1;

    const canvas  = document.createElement('canvas');
    const scale   = 2;
    const cw      = 360, rowH = 44, headerH = 90, footerH = 16;
    const totalH  = headerH + sorted.length * rowH + (topN < sorted.length ? 30 : 0) + footerH;
    canvas.width  = cw * scale;
    canvas.height = totalH * scale;
    const ctx     = canvas.getContext('2d');
    ctx.scale(scale, scale);

    // Background
    ctx.fillStyle = '#0A2550';
    ctx.fillRect(0, 0, cw, totalH);

    // Header
    ctx.fillStyle = '#F5C518';
    ctx.font      = 'bold 16px Arial, sans-serif';
    ctx.fillText('✓ Tsek Mo 2028', 16, 30);
    ctx.fillStyle = '#7AABDC';
    ctx.font      = '12px Arial, sans-serif';
    ctx.fillText(`Live Ranking — ${roleLabel}`, 16, 50);
    ctx.fillStyle = '#1E3A5A';
    ctx.fillRect(0, 62, cw, 1);

    // Rows
    const maxPts = Math.max(...sorted.map(c => scores[c.id]||0), 1);
    let y = 70;

    sorted.forEach((c, i) => {
      if (i === topN) {
        ctx.fillStyle = '#1E3A5A';
        ctx.fillRect(16, y+4, cw-32, 1);
        ctx.fillStyle = '#2E5070';
        ctx.font = '10px Arial, sans-serif';
        ctx.fillText(`— ibaba ng top ${topN} —`, cw/2 - 48, y+16);
        y += 30;
      }

      const pts    = scores[c.id] || 0;
      const pct    = Math.max((pts / maxPts), 0.03);
      const inTop  = i < topN;
      const barW   = (cw - 100) * pct;
      const barX   = 84;
      const barY   = y + 22;

      // Rank number
      ctx.fillStyle = inTop ? '#F5C518' : '#3A5878';
      ctx.font      = `bold ${inTop ? 12 : 10}px Arial, sans-serif`;
      ctx.fillText(`${i+1}`, 10, y + 26);

      // Avatar circle
      ctx.beginPath();
      ctx.arc(46, y+22, 16, 0, Math.PI*2);
      ctx.fillStyle = c.bg;
      ctx.fill();
      ctx.fillStyle = c.tc;
      ctx.font = 'bold 10px Arial, sans-serif';
      const ini = (c.display.split(' ')[0][0] + (c.display.split(' ')[1]?.[0]||'')).toUpperCase();
      ctx.fillText(ini, 39, y+27);

      // Surname
      ctx.fillStyle = inTop ? '#C8DFF8' : '#3A5878';
      ctx.font      = `${inTop ? 'bold ' : ''}11px Arial, sans-serif`;
      const surname = c.name.split(',')[0].trim();
      ctx.fillText(surname, barX, y+18);

      // Bar track
      ctx.fillStyle = '#0A1E38';
      ctx.beginPath();
      ctx.roundRect(barX, barY, cw-100-16, 8, 4);
      ctx.fill();

      // Bar fill
      const barColor = inTop ? (i===0 ? '#F5C518' : i<3 ? '#2E7DD1' : '#5BA4D8') : '#1E3A58';
      ctx.fillStyle = barColor;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW, 8, 4);
      ctx.fill();

      // Points
      ctx.fillStyle = inTop ? '#7AABDC' : '#3A5878';
      ctx.font      = `10px Arial, sans-serif`;
      ctx.fillText(`${pts}pt`, cw-38, y+26);

      y += rowH;
    });

    // Footer
    ctx.fillStyle = '#2E5070';
    ctx.font = '10px Arial, sans-serif';
    ctx.fillText('tsekmo.app — pribado, walang nagtatago ng iyong sagot', 16, totalH-6);

    try {
      const link    = document.createElement('a');
      link.download = `tsekmo-${roleLabel}-ranking.png`;
      link.href     = canvas.toDataURL('image/png');
      link.click();
      btn.classList.remove('saving');
      btn.textContent = '✅ Na-save na!';
      setTimeout(() => { btn.textContent = '📸 I-save ang ranking bilang larawan'; }, 3000);
    } catch(e) {
      btn.classList.remove('saving');
      btn.textContent = '📸 I-save ang ranking bilang larawan';
      alert('I-screenshot na lang ang iyong screen. Hindi available ang auto-save sa browser na ito.');
    }
  },

};

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  ROLES.forEach(r => initScores(r.id));
  initSlider();
  showScreen('s-welcome');
});
