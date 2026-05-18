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
   DATA — 2022 PH SENATE CANDIDATES (top 22)
   Age = as of May 8 2028
   wiki = Wikipedia article title for photo lookup
═══════════════════════════════════════════════ */
const CANDIDATES = {
  senador: [
    { id:'s01', name:'Aquino, Bam',          display:'Bam Aquino',           age:51, partido:'Liberal Party',        wiki:'Paolo Benigno Aquino IV',          bg:'#DBEAFE', tc:'#1E40AF' },
    { id:'s02', name:'Bautista, Herbert',     display:'Herbert Bautista',     age:58, partido:'NPC',                  wiki:'Herbert Bautista',                 bg:'#FEF3C7', tc:'#92400E' },
    { id:'s03', name:'Cayetano, Alan Peter',  display:'Alan Peter Cayetano',  age:56, partido:'Nacionalista',         wiki:'Alan Peter Cayetano',              bg:'#D1FAE5', tc:'#065F46' },
    { id:'s04', name:'Colmenares, Neri',      display:'Neri Colmenares',      age:62, partido:'Makabayan',            wiki:'Neri Colmenares',                  bg:'#FCE7F3', tc:'#831843' },
    { id:'s05', name:'dela Rosa, Bato',       display:'Ronald dela Rosa',     age:63, partido:'PDP-Laban',            wiki:'Ronald dela Rosa',                 bg:'#EDE9FE', tc:'#4C1D95' },
    { id:'s06', name:'Diokno, Chel',          display:'Chel Diokno',          age:61, partido:'KNP',                  wiki:'Jose Manuel Diokno (politician)',  bg:'#ECFDF5', tc:'#065F46' },
    { id:'s07', name:'Ejercito, JV',          display:'JV Ejercito',          age:50, partido:'UNA',                  wiki:'Joseph Victor Ejercito',           bg:'#FFF7ED', tc:'#C2410C' },
    { id:'s08', name:'Escudero, Chiz',        display:'Francis Escudero',     age:58, partido:'NPC',                  wiki:'Francis Escudero',                 bg:'#F0FDF4', tc:'#166534' },
    { id:'s09', name:'Estrada, Jinggoy',      display:'Jinggoy Estrada',      age:65, partido:'PMP',                  wiki:'Jinggoy Estrada',                  bg:'#FEF2F2', tc:'#991B1B' },
    { id:'s10', name:'Gatchalian, Win',       display:'Win Gatchalian',       age:51, partido:'NPC',                  wiki:'Sherwin Gatchalian',               bg:'#EFF6FF', tc:'#1D4ED8' },
    { id:'s11', name:'Go, Bong',              display:'Bong Go',              age:54, partido:'PDP-Laban',            wiki:'Christopher Lawrence Go',          bg:'#FDF4FF', tc:'#7E22CE' },
    { id:'s12', name:'Gordon, Dick',          display:'Dick Gordon',          age:82, partido:'Bagumbayan-VNP',       wiki:'Richard Gordon',                   bg:'#FFF1F2', tc:'#BE123C' },
    { id:'s13', name:'Hontiveros, Risa',      display:'Risa Hontiveros',      age:58, partido:'Akbayan',              wiki:'Risa Hontiveros',                  bg:'#FDF2F8', tc:'#9D174D' },
    { id:'s14', name:'Legarda, Loren',        display:'Loren Legarda',        age:62, partido:'NPC',                  wiki:'Loren Legarda',                    bg:'#FFFBEB', tc:'#B45309' },
    { id:'s15', name:'Marcos, Imee',          display:'Imee Marcos',          age:69, partido:'Nacionalista',         wiki:'Imee Marcos',                      bg:'#F0F9FF', tc:'#0369A1' },
    { id:'s16', name:'Padilla, Robin',        display:'Robin Padilla',        age:57, partido:'PDP-Laban',            wiki:'Robin Padilla',                    bg:'#FFF7ED', tc:'#C2410C' },
    { id:'s17', name:'Revilla, Bong',         display:'Bong Revilla Jr.',     age:59, partido:'Lakas-CMD',            wiki:'Ramon Revilla Jr.',                bg:'#F0FDF4', tc:'#15803D' },
    { id:'s18', name:'Tolentino, Francis',    display:'Francis Tolentino',    age:65, partido:'PDP-Laban',            wiki:'Francis Tolentino',                bg:'#EEF2FF', tc:'#3730A3' },
    { id:'s19', name:'Trillanes, Antonio',    display:'Antonio Trillanes IV', age:55, partido:'Liberal Party',        wiki:'Antonio Trillanes IV',             bg:'#FEF2F2', tc:'#B91C1C' },
    { id:'s20', name:'Villanueva, Joel',      display:'Joel Villanueva',      age:52, partido:'CIBAC / Independent',  wiki:'Joel Villanueva',                  bg:'#F0FDF4', tc:'#166534' },
    { id:'s21', name:'Villar, Mark',          display:'Mark Villar',          age:49, partido:'NPC',                  wiki:'Mark Villar',                      bg:'#FFFBEB', tc:'#92400E' },
    { id:'s22', name:'Zubiri, Migz',          display:'Migz Zubiri',          age:55, partido:'Independent',          wiki:'Juan Miguel Zubiri',               bg:'#EFF6FF', tc:'#1E40AF' },
  ],
  presidente: [
    { id:'p1', name:'Duterte, Sara',    display:'Sara Duterte',      age:49, partido:'Hugpong ng Pagbabago', wiki:'Sara Duterte',        bg:'#DBEAFE', tc:'#1E40AF' },
    { id:'p2', name:'Hontiveros, Risa', display:'Risa Hontiveros',   age:58, partido:'Akbayan',              wiki:'Risa Hontiveros',     bg:'#FCE7F3', tc:'#831843' },
    { id:'p3', name:'Moreno, Isko',     display:'Isko Moreno',       age:50, partido:'Aksyon Demokratiko',   wiki:'Francisco Domagoso',  bg:'#D1FAE5', tc:'#065F46' },
    { id:'p4', name:'Pacquiao, Manny',  display:'Manny Pacquiao',    age:49, partido:'PROMDI',               wiki:'Manny Pacquiao',      bg:'#FEF3C7', tc:'#92400E' },
  ],
  bisepresidente: [
    { id:'v1', name:'Binay, Abby',      display:'Abby Binay',        age:47, partido:'UNA',          wiki:'Abigail Binay',    bg:'#DBEAFE', tc:'#1E40AF' },
    { id:'v2', name:'Lacson, Ping',     display:'Ping Lacson',       age:70, partido:'Independent',  wiki:'Panfilo Lacson',   bg:'#FEF3C7', tc:'#92400E' },
    { id:'v3', name:'Pangilinan, Kiko', display:'Kiko Pangilinan',   age:63, partido:'Liberal Party',wiki:'Francis Pangilinan',bg:'#D1FAE5', tc:'#065F46' },
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
  const wrap = document.getElementById(`pw-${candId}`);
  if (!wrap) return;
  let img = wrap.querySelector('img');
  if (!img) {
    img = document.createElement('img');
    img.alt = '';
    wrap.appendChild(img);
  }
  img.src = photoUrl;
  img.onerror = () => { img.style.display='none'; };
  const fb = wrap.querySelector('.cand-initials-fb');
  if (fb) fb.style.display = 'none';
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
   bad:true  → checking a candidate SUBTRACTS
   bad:false → checking a candidate ADDS
   Each set of 12: 4 bad + 8 good (balanced)
═══════════════════════════════════════════════ */
const QUESTION_BANK = [
  /* ── NEGATIBO (bad:true) ─────────────────── */
  {
    cat: 'D', catLabel: 'Kapangyarihan',
    text: 'Siya ba ay may kakayahang magnakaw sa kaban ng bayan?',
    sub: 'Piliin ang mga kandidato na sa iyong palagay ay KAYANG gawin ito kung binibigyan ng pagkakataon.',
    bad: true,
  },
  {
    cat: 'C', catLabel: 'Motibo',
    text: 'Siya ba ay nagtatrabaho para sa sarili at pamilya niya — hindi para sa bayan?',
    sub: 'Piliin ang mga na sa tingin mo ay pangunahin para sa SARILI nagtatrabaho.',
    bad: true,
  },
  {
    cat: 'A', catLabel: 'Sikat ba o Sipag?',
    text: 'Sino sa kanila ang sa tingin mo ay iboboto ng marami dahil artista o sikat ang pangalan — hindi dahil sa kanilang nagawa?',
    sub: 'Ito ay napakahalaga. Ang mga napanalunan ng artista o sikat na tao ay madalas walang track record sa gobyerno. Piliin ang mga sa tingin mo ay "sikat-boto" — hindi "kakayahan-boto".',
    bad: true,
  },
  {
    cat: 'D', catLabel: 'Kapangyarihan',
    text: 'Siya ba ay kayang mag-abuso ng pondo ng gobyerno nang walang accountability?',
    sub: 'Piliin ang mga sa tingin mo ay may POSIBILIDAD na gawin ito.',
    bad: true,
  },
  {
    cat: 'C', catLabel: 'Motibo',
    text: 'Siya ba ay nagbibigay ng ayuda o regalo para lang makakuha ng boto — hindi dahil sa tunay na pagmamalasakit?',
    sub: 'Tandaan: Ang ayuda ay mula sa iyong buwis. Hindi ito regalo ng politiko — ginagamit lang nila ito para makuha ang iyong boto. Piliin ang mga sa tingin mo ay ganito ang ginagawa.',
    bad: true,
  },
  {
    cat: 'F', catLabel: 'Kinabukasan',
    text: 'Siya ba ay may posibilidad na gamitin ang pwesto para sa interes ng isang pamilya o grupo lamang — hindi para sa lahat?',
    sub: 'Piliin ang mga na sa tingin mo ay may PANGANIB na mangyari ito.',
    bad: true,
  },
  {
    cat: 'D', catLabel: 'Kapangyarihan',
    text: 'Siya ba ay matatahimik na lang kung ang kanyang kasamahan ay nagnanakaw sa kaban ng bayan?',
    sub: 'Ang katahimikan ay pahintulot. Piliin ang mga sa tingin mo ay hindi magsasalita laban sa katiwalian ng kanilang mga kaibigan sa gobyerno.',
    bad: true,
  },
  {
    cat: 'A', catLabel: 'Sikat ba o Sipag?',
    text: 'Sino sa kanila ang sa tingin mo ay kilala mo dahil sa pelikula, TV, o social media — hindi sa batas na kanilang isinulat o nagawa para sa bayan?',
    sub: 'Hindi masama ang maging sikat — pero ang pagiging artista ay hindi katibayan ng kakayahang mamuno. Piliin ang mga kilala mo LAMANG dahil sa entertainment — hindi sa trabaho sa gobyerno.',
    bad: true,
  },
  /* ── POSITIBO (bad:false) ─────────────────── */
  {
    cat: 'B', catLabel: 'Kakayahan',
    text: 'Siya ba ay may tunay na kaalaman sa ekonomiya at pamamahala ng bansa?',
    sub: 'Piliin ang mga may TUNAY na kakayahan — hindi lang kilala o sikat.',
    bad: false,
  },
  {
    cat: 'F', catLabel: 'Kinabukasan',
    text: 'Siya ba ay may pangmatagalang plano para sa edukasyon ng susunod na henerasyon?',
    sub: 'Piliin ang mga may KONGKRETONG programa — hindi lang pangako sa kampanya.',
    bad: false,
  },
  {
    cat: 'E', catLabel: 'Epekto sa Pamilya',
    text: 'Siya ba ay may nakitang konkretong nagawa para sa ordinaryong mamamayan?',
    sub: 'Piliin ang mga may TUNAY na nagbago dahil sa kanilang trabaho bilang opisyal.',
    bad: false,
  },
  {
    cat: 'B', catLabel: 'Kakayahan',
    text: 'Siya ba ay kayang tumayo para sa tama kahit laban ito sa kanyang partymate?',
    sub: 'Piliin ang mga may sapat na lakas ng loob at integridad para dito.',
    bad: false,
  },
  {
    cat: 'E', catLabel: 'Epekto sa Pamilya',
    text: 'Kung elected siya, talagang may gagawin ba para bumaba ang presyo ng bigas, kuryente, at gamot?',
    sub: 'Piliin ang mga may MALINAW na plano para sa mga pangunahing pangangailangan ng pamilya.',
    bad: false,
  },
  {
    cat: 'B', catLabel: 'Kakayahan',
    text: 'Siya ba ay may rekord ng pagtupad sa kanyang mga pangako noong nakaraang termino?',
    sub: 'Piliin ang mga may KATIBAYAN na tinupad ang kanilang mga salita.',
    bad: false,
  },
  {
    cat: 'F', catLabel: 'Kinabukasan',
    text: 'Sampung taon mula ngayon, magiging mas maganda ba ang Pilipinas kung siya ang nasa gobyerno?',
    sub: 'Piliin ang mga tunay mong naniniwalaang makakatulong sa PANGMATAGALANG kinabukasan ng bansa.',
    bad: false,
  },
  {
    cat: 'C', catLabel: 'Motibo',
    text: 'Sa kanyang mga ginawa at sinabi, makikita mo bang talagang para sa bayan ang kanyang puso?',
    sub: 'Piliin ang mga na sa tingin mo ay TUNAY ang pagmamalasakit — hindi performance lamang.',
    bad: false,
  },
  {
    cat: 'E', catLabel: 'Epekto sa Pamilya',
    text: 'Siya ba ay nagtataguyod ng trabaho at kabuhayan para sa mahihirap na pamilya — hindi lang sa mayayaman?',
    sub: 'Piliin ang mga may PROGRAMA para sa ordinaryong Pilipino — hindi lang sa negosyante.',
    bad: false,
  },
  {
    cat: 'B', catLabel: 'Kakayahan',
    text: 'Siya ba ay handang makinig sa mga eksperto at siyentipiko — hindi lang sa kanyang mga alipores?',
    sub: 'Piliin ang mga nagpapakita ng HUMILITY at pagiging bukas sa mas matalinong payo.',
    bad: false,
  },
];

/* Shuffle helper */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Pick a balanced set of 12: 4 bad + 8 good */
function pickQuestions() {
  const bad  = shuffle(QUESTION_BANK.filter(q => q.bad)).slice(0, 4);
  const good = shuffle(QUESTION_BANK.filter(q => !q.bad)).slice(0, 8);
  return shuffle([...bad, ...good]);
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
   LIVE RANKING RENDER — photo + surname chips
═══════════════════════════════════════════════ */
function getSurname(c) {
  // name field is "Surname, First" format
  return c.name.split(',')[0].trim();
}

function renderRanking() {
  const role   = state.role;
  initScores(role);
  const cands  = CANDIDATES[role] || [];
  const scores = state.scores[role];
  const sorted = [...cands].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));

  document.getElementById('lrp-role-name').textContent =
    ROLES.find(r => r.id === role)?.label || '';

  const container = document.getElementById('lrp-rows');
  container.innerHTML = sorted.map((c, i) => {
    const rankCls  = i < 3 ? `rank-${i+1}` : '';
    const parts    = c.display.split(' ');
    const ini      = (parts[0][0] + (parts[1]?.[0]||'')).toUpperCase();
    const surname  = getSurname(c);
    // reuse cached photo if available
    const photoUrl = photoCache[c.wiki];
    const imgTag   = photoUrl
      ? `<img src="${photoUrl}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center">`
      : '';
    const fbStyle  = photoUrl ? 'display:none' : '';
    return `
      <div class="lrp-chip ${rankCls}" id="chip-${c.id}">
        <div class="lrp-chip-photo" style="background:${c.bg}">
          <div class="lrp-chip-initials" style="background:${c.bg};color:${c.tc};${fbStyle}">${ini}</div>
          ${imgTag}
          <div class="lrp-chip-rank">${i+1}</div>
        </div>
        <div class="lrp-chip-name">${surname}</div>
      </div>`;
  }).join('');
}

/* Update chip rank numbers after score change without full re-render */
function updateChipRanks() {
  renderRanking(); // full re-render is fast enough for ≤22 candidates
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

  document.getElementById('q-step-label').textContent = `Tanong ${qi + 1} sa ${total}`;
  const badge = document.getElementById('q-cat-badge');
  badge.textContent = q.bad ? '⚠️ Negatibo' : '✅ Positibo';
  badge.className   = 'q-cat-badge ' + (q.bad ? 'bad' : 'good');
  document.getElementById('q-prog-fill').style.width = pct + '%';

  document.getElementById('q-question-block').innerHTML = `
    <div class="q-type-badge ${q.bad ? 'bad' : 'good'}">
      ${q.bad ? '⚠️ Negatibong katangian — sino ang akma?' : '✅ Positibong katangian — sino ang akma?'}
    </div>
    <div class="q-text">${q.text}</div>
    <div class="q-subtext">${q.sub}</div>
  `;

  const checkedSet = state.checked[qi] || new Set();

  const rows = cands.map(c => {
    const isCh  = checkedSet.has(c.id);
    const cls   = isCh ? (q.bad ? 'checked-bad' : 'checked') : '';
    const tick  = isCh ? '✓' : '';
    // initials from display name
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
          <div class="cand-meta">${c.age} taong gulang · ${c.partido}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('q-body').innerHTML = `<div class="cand-list-v">${rows}</div>`;

  // Recalculate offset (question text height varies) then load photos
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
      const qi     = state.currentQ;
      const q      = state.questions[qi];
      const role   = state.role;
      const set    = state.checked[qi];
      const sc     = state.scores[role];
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
      renderResults();
      showScreen('s-results');
      return;
    }
    renderQuestion();
  },
};

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  ROLES.forEach(r => initScores(r.id));
  showScreen('s-welcome');
});
