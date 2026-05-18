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
    sub: 'Ang tunay na lingkod-bayan ay may patunay — hindi lang salita. Piliin ang mga sa tingin mo ay talagang kumikilos para sa ordinaryong Pilipino.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'Mapagkakatiwalaan mo ba siya?',
    sub: 'Sa lahat ng narinig at nakita mo, siya ba ay tapat? Piliin ang mga sa tingin mo ay may integridad — ang salita ay katuparan.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'Marunong ba siyang makinig — hindi lang magsalita?',
    sub: 'Ang magandang lider ay nakikinig sa bayan bago kumilos. Piliin ang mga sa tingin mo ay bukas sa iba pang pananaw — hindi puro sariling desisyon.',
    bad: false,
  },
  {
    type: 'positibo',
    text: 'May kakayahan ba siyang gawin ang trabaho ng Senador?',
    sub: 'Ang Senador ay gumagawa ng batas para sa buong bansa — hindi lang sa kanyang lugar. Piliin ang mga may tunay na kaalaman at kakayahan para dito.',
    bad: false,
  },
];

/* 4 NEGATIBO — red flags, check who might do these */
const Q_NEGATIVE = [
  {
    type: 'negatibo',
    text: 'Posible bang magnakaw siya sa pondo ng bayan?',
    sub: 'Kapag nasa poder na, maraming pagkakataon para mag-abuso. Piliin ang mga sa tingin mo ay may posibilidad na gawin ito kung wala mang nagbabantay.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Para sa sarili ba niya ang lahat ng ginagawa niya?',
    sub: 'May mga politiko na ang bawat galaw ay para sa susunod na eleksyon — hindi para sa bayan. Piliin ang mga sa tingin mo ay pangunahing para sa sarili nagtatrabaho.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Sikat ba siya dahil artista o kilala — hindi dahil sa nagawa niya?',
    sub: 'Marami ang bumoboto sa pangalan — hindi sa plataporma. Ang pagiging sikat ay hindi patunay ng kakayahan. Piliin ang mga sa tingin mo ay "sikat-boto" lamang.',
    bad: true,
  },
  {
    type: 'negatibo',
    text: 'Ang ayuda ba niya ay para sa boto — hindi sa tunay na tulong?',
    sub: 'Tandaan: ang ayuda ay galing sa iyong buwis. Hindi ito regalo ng politiko. Piliin ang mga sa tingin mo ay gumagamit ng tulong para makakuha ng boto.',
    bad: true,
  },
];

/* 4 ESPESIPIKO — platform & programs */
const Q_SPECIFIC = [
  {
    type: 'espesipiko',
    text: 'Edukasyon',
    sub: 'Mahalaga ang senador na may adhikain at programang suportahan ang edukasyon. Piliin ang mga may konkretong plano para sa mas magandang paaralan, mas maraming iskolarship, at mas mataas na kalidad ng pagtuturo.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Trabaho at kabuhayan',
    sub: 'Ang trabaho ay ang pundasyon ng bawat pamilya. Piliin ang mga may programa para lumikha ng trabaho — hindi lang para sa mga may koneksyon, kundi para sa lahat.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Kalusugan',
    sub: 'Ang gamot, ospital, at doktor ay dapat abot-kaya ng lahat — hindi lang ng mayayaman. Piliin ang mga aktibong nagtataguyod ng mas mababang gastos sa kalusugan.',
    bad: false,
  },
  {
    type: 'espesipiko',
    text: 'Kalikasan at pagkain',
    sub: 'Ang binhi, tubig, at lupa ay yaman ng Pilipino. Piliin ang mga may programa para protektahan ang kapaligiran at tiyaking may pagkain ang bawat Pilipino.',
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

/* ═══════════════════════════════════════════════
   LIVE RANKING RENDER — photo + bar rows
═══════════════════════════════════════════════ */
const BAR_COLORS = ['#F5C518','#2E7DD1','#5BA4D8','#1A5EA8','#7AABDC','#90C0F0',
                    '#A8CBEE','#B8D8F0','#C8E0F4','#D0E8F8','#D8EEF8','#E0F0FA',
                    '#E8F4FC','#EEF8FC','#F0F8FE','#F2F9FE','#F4FAFE','#F6FBFE',
                    '#F8FCFE','#FAFCFE','#FCFEFE','#FEFEFE'];

function getSurname(c) {
  return c.name.split(',')[0].trim();
}

function renderRanking() {
  const role   = state.role;
  initScores(role);
  const cands  = CANDIDATES[role] || [];
  const scores = state.scores[role];
  const sorted = [...cands].sort((a, b) => (scores[b.id]||0) - (scores[a.id]||0));
  const max    = Math.max(...sorted.map(c => scores[c.id]||0), 1);
  // For senators, highlight top 12 seats; others top 1
  const topN   = role === 'senador' ? 12 : 1;

  document.getElementById('lrp-role-name').textContent =
    ROLES.find(r => r.id === role)?.label || '';

  const container = document.getElementById('lrp-rows');
  container.innerHTML = sorted.map((c, i) => {
    const pts      = scores[c.id] || 0;
    const pct      = Math.max(Math.round((pts / max) * 100), 3);
    const inTop    = i < topN;
    const isEdge   = i === topN - 1; // last in top group
    const rankCls  = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
    const barColor = inTop
      ? (i === 0 ? '#F5C518' : i < 3 ? '#2E7DD1' : '#5BA4D8')
      : '#2A3F58';
    const parts    = c.display.split(' ');
    const ini      = (parts[0][0] + (parts[1]?.[0]||'')).toUpperCase();
    const surname  = getSurname(c);
    const photoUrl = photoCache[c.wiki];
    const iniStyle = photoUrl ? 'display:none' : '';
    const imgTag   = photoUrl
      ? `<img src="${photoUrl}" alt="" onerror="this.style.display='none'">`
      : '';
    const dimStyle = inTop ? '' : 'opacity:0.45';
    const divider  = i === topN
      ? `<div class="lrp-divider"><span>— labas sa top ${topN} —</span></div>`
      : '';
    return `${divider}
      <div class="lrp-row ${rankCls}" style="${dimStyle}">
        <span class="lrp-num" style="color:${inTop ? '#F5C518' : '#3A5878'}">${i+1}</span>
        <div class="lrp-photo" style="background:${c.bg}" id="lrp-pw-${c.id}">
          <div class="lrp-photo-ini" style="background:${c.bg};color:${c.tc};${iniStyle}">${ini}</div>
          ${imgTag}
        </div>
        <div class="lrp-bar-col">
          <span class="lrp-surname" style="color:${inTop ? '#C8DFF8' : '#4A6A88'}">${surname}</span>
          <div class="lrp-track">
            <div class="lrp-fill" style="width:${pct}%;background:${barColor}"></div>
          </div>
        </div>
        <span class="lrp-pts" style="color:${inTop ? '#6A9CC8' : '#304050'}">${pts}pt</span>
      </div>`;
  }).join('');
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

  /* intro */
  document.getElementById('home-intro-text').textContent =
    ROLES.find(r => r.id === role)?.intro || '';

  /* start btn label */
  const done = state.answered[role];
  document.getElementById('btn-start-label').textContent =
    done ? 'Ulitin ang Tsek Mo' : 'Simulan ang Tsek Mo';
  const note = document.getElementById('answered-note');
  note.style.display = done ? 'block' : 'none';

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
    /* reset scores for fresh run */
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
      chk.textContent = '✓';
      if (q.bad) { chk.style.background='#DC2626'; chk.style.borderColor='#991B1B'; chk.style.color='#fff'; }
      else        { chk.style.background='#F5C518'; chk.style.borderColor='#C9960A'; chk.style.color='#0D3B8C'; }
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
        if (set.has(c.id)) {
          sc[c.id] = (sc[c.id] || 0) + (q.bad ? -2 : 3);
        }
      });
      renderRanking();
    }

    state.currentQ++;
    if (state.currentQ >= state.questions.length) {
      state.answered[state.role] = true;
      // No results screen — go straight home with updated rankings
      renderHome();
      showScreen('s-home');
      // Scroll down to ranking after a beat
      setTimeout(() => {
        const panel = document.getElementById('ranking-panel');
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return;
    }
    renderQuestion();
    fixQBodyOffset();
  },
};

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  ROLES.forEach(r => initScores(r.id));
  showScreen('s-welcome');
});
