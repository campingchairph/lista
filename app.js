'use strict';

/* ═══════════════════════════════════════════════
   DATA — ROLES
═══════════════════════════════════════════════ */
const ROLES = [
  {
    id: 'senador',
    label: 'Senador',
    intro: 'Ang Senador ay nagtatayo ng mga batas para sa buong bansa. 12 puwesto ang mapupunan sa 2028. Bawat botante ay may hanggang 12 boto.',
  },
  {
    id: 'presidente',
    label: 'Presidente',
    intro: 'Ang Presidente ang pinakamataas na opisyal ng bansa. 1 boto, 6 na taon — hindi na maaaring tumakbo ulit.',
  },
  {
    id: 'bisepresidente',
    label: 'Bise Presidente',
    intro: 'Ang Bise Presidente ay hiwalay na inihahalal — pwedeng manggaling sa ibang partido kaysa sa Presidente.',
  },
];

/* ═══════════════════════════════════════════════
   DATA — PLACEHOLDER CANDIDATES
   (Palitan ng tunay pagka-file ng COC, Oct 2027)
═══════════════════════════════════════════════ */
const CANDIDATES = {
  senador: [
    { id: 's1', name: 'Juan dela Cruz', initials: 'JD', bg: '#DBEAFE', tc: '#1E40AF' },
    { id: 's2', name: 'Maria Santos',   initials: 'MS', bg: '#FEF3C7', tc: '#92400E' },
    { id: 's3', name: 'Pedro Reyes',    initials: 'PR', bg: '#D1FAE5', tc: '#065F46' },
    { id: 's4', name: 'Rosa Villanueva',initials: 'RV', bg: '#FCE7F3', tc: '#831843' },
    { id: 's5', name: 'Andres Bautista',initials: 'AB', bg: '#EDE9FE', tc: '#4C1D95' },
    { id: 's6', name: 'Ligaya Ramos',   initials: 'LR', bg: '#ECFDF5', tc: '#065F46' },
  ],
  presidente: [
    { id: 'p1', name: 'Kandidato A',    initials: 'KA', bg: '#DBEAFE', tc: '#1E40AF' },
    { id: 'p2', name: 'Kandidato B',    initials: 'KB', bg: '#FEF3C7', tc: '#92400E' },
    { id: 'p3', name: 'Kandidato C',    initials: 'KC', bg: '#D1FAE5', tc: '#065F46' },
    { id: 'p4', name: 'Kandidato D',    initials: 'KD', bg: '#FCE7F3', tc: '#831843' },
  ],
  bisepresidente: [
    { id: 'v1', name: 'Kandidato A',    initials: 'KA', bg: '#DBEAFE', tc: '#1E40AF' },
    { id: 'v2', name: 'Kandidato B',    initials: 'KB', bg: '#FEF3C7', tc: '#92400E' },
    { id: 'v3', name: 'Kandidato C',    initials: 'KC', bg: '#D1FAE5', tc: '#065F46' },
  ],
};

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
    cat: 'A', catLabel: 'Sariling Pagsuri',
    text: 'Kilala mo ba siya dahil sa showbiz o social media — hindi sa tunay na nagawa niya?',
    sub: 'Piliin ang mga pamilyar sa iyo dahil sa ENTERTAINMENT o popularity lamang.',
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
    text: 'Siya ba ay nagbibigay ng ayuda para lang makakuha ng boto — hindi dahil sa tunay na pagmamalasakit?',
    sub: 'Piliin ang mga na sa tingin mo ay PANG-AKIT lamang ang tulong.',
    bad: true,
  },
  {
    cat: 'F', catLabel: 'Kinabukasan',
    text: 'Siya ba ay may posibilidad na gamitin ang pwesto para sa isang pamilya o grupo lamang?',
    sub: 'Piliin ang mga na sa tingin mo ay may PANGANIB na mangyari ito.',
    bad: true,
  },
  {
    cat: 'D', catLabel: 'Kapangyarihan',
    text: 'Siya ba ay matatahimik na lang kung ang kanyang kasamahan ay nagnanakaw?',
    sub: 'Piliin ang mga sa tingin mo ay hindi ituturo ang maling ginagawa ng kapwa opisyal.',
    bad: true,
  },
  {
    cat: 'A', catLabel: 'Sariling Pagsuri',
    text: 'Iboboto mo ba siya kahit hindi mo alam kung ano ang kanyang plataporma — dahil pamilyar lang ang pangalan?',
    sub: 'Maging tapat — piliin ang mga ibiboto mo kahit wala kang alam sa kanilang plataporma.',
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
}

/* ═══════════════════════════════════════════════
   LIVE RANKING RENDER
═══════════════════════════════════════════════ */
const RANK_COLORS = ['#1A5EA8', '#2E7DD1', '#F5C518', '#5BA4D8', '#90C0F0', '#A0B8D0'];

function renderRanking() {
  const role = state.role;
  initScores(role);
  const cands = CANDIDATES[role] || [];
  const scores = state.scores[role];
  const sorted = [...cands].sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
  const max = Math.max(...sorted.map(c => scores[c.id] || 0), 1);

  document.getElementById('lrp-role-name').textContent =
    ROLES.find(r => r.id === role)?.label || '';

  const rows = document.getElementById('lrp-rows');
  rows.innerHTML = sorted.map((c, i) => {
    const pts = scores[c.id] || 0;
    const pct = Math.max(Math.round((pts / max) * 100), 8);
    const color = RANK_COLORS[i] || '#90C0F0';
    return `
      <div class="lrp-row">
        <span class="lrp-rank">${i + 1}</span>
        <div class="lrp-track">
          <div class="lrp-fill" style="width:${pct}%;background:${color}">
            <span class="lrp-fill-name">${c.name}</span>
          </div>
        </div>
        <span class="lrp-pts">${pts}pt</span>
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
  const qi = state.currentQ;
  const q  = state.questions[qi];
  const role = state.role;
  // Sort candidates alphabetically by name
  const cands = [...(CANDIDATES[role] || [])].sort((a, b) => a.name.localeCompare(b.name));
  const total = state.questions.length;
  const pct = Math.max(Math.round((qi / total) * 100), 4);

  document.getElementById('q-step-label').textContent = `Tanong ${qi + 1} sa ${total}`;

  const badge = document.getElementById('q-cat-badge');
  badge.textContent = q.bad ? '⚠️ Negatibo' : '✅ Positibo';
  badge.className = 'q-cat-badge ' + (q.bad ? 'bad' : 'good');

  document.getElementById('q-prog-fill').style.width = pct + '%';

  // Fixed question block (above scrollable area)
  document.getElementById('q-question-block').innerHTML = `
    <div class="q-type-badge ${q.bad ? 'bad' : 'good'}">
      ${q.bad ? '⚠️ Negatibong katangian — sino ang akma?' : '✅ Positibong katangian — sino ang akma?'}
    </div>
    <div class="q-text">${q.text}</div>
    <div class="q-subtext">${q.sub}</div>
  `;

  const checkedSet = state.checked[qi] || new Set();
  const roleName = ROLES.find(r => r.id === role)?.label || '';

  // 2-column grid — only this scrolls
  const candHTML = cands.map(c => {
    const isCh = checkedSet.has(c.id);
    const cls  = isCh ? (q.bad ? 'checked-bad' : 'checked') : '';
    const tick = isCh ? '✓' : '';
    return `
      <div class="cand-item ${cls}" id="ci-${c.id}" onclick="App.toggleCand('${c.id}')">
        <div class="cand-chkbox" id="chk-${c.id}">${tick}</div>
        <div class="cand-avatar" style="background:${c.bg};color:${c.tc}">${c.initials}</div>
        <div class="cand-details">
          <div class="cand-name">${c.name}</div>
          <div class="cand-role">${roleName}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('q-body').innerHTML = `<div class="cand-grid">${candHTML}</div>`;
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
    const item = document.getElementById('ci-' + candId);
    const chk  = document.getElementById('chk-' + candId);

    if (set.has(candId)) {
      set.delete(candId);
      item.className = 'cand-item';
      chk.textContent = '';
    } else {
      set.add(candId);
      item.className = 'cand-item ' + (q.bad ? 'checked-bad' : 'checked');
      chk.textContent = '✓';
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
