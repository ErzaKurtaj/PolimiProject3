/* ==========================================
   SLIDER
   ========================================== */
const cards = document.querySelectorAll(".card");
let index = 0;

function updateSlider() {
  cards.forEach((card, i) => card.classList.toggle("active", i === index));
}

function next() {
  index = (index + 1) % cards.length;
  updateSlider();
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  updateSlider();
}

/* ==========================================
   NAVBAR SCROLL STATE
   ========================================== */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* ==========================================
   DISCOVER CARDS → SEASON RESULTS
   Maps each card (in order) to the correct result section.
   ========================================== */
const discoverCards = document.querySelectorAll(".discover-card");
const allResults = document.querySelectorAll(".season-results");
const resultIds = [
  "summer-results",
  "winter-results",
  "monsoon-results",
  "culture-results",
  "nature-results"
];

function hideAllResults() {
  allResults.forEach(section => {
    section.classList.remove("visible");
    section.style.display = "none";
  });
}

discoverCards.forEach((card, i) => {
  card.addEventListener("click", () => {
    hideAllResults();
    const target = document.getElementById(resultIds[i]);
    if (!target) return;

    target.style.display = "block";
    /* Double rAF ensures the browser renders display:block before
       the opacity transition starts */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => target.classList.add("visible"));
    });
    target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ==========================================
   SCROLL REVEAL
   ========================================== */
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in-view"));
}

/* ==========================================
   PAGE INTRO
   Remove from layout after animation completes (1.5s delay + 0.7s fade = 2.3s).
   ========================================== */
const pageIntro = document.getElementById("pageIntro");
if (pageIntro) {
  setTimeout(() => (pageIntro.style.pointerEvents = "none"), 1500);
  setTimeout(() => (pageIntro.style.display = "none"), 2400);
}


/* ==========================================
   DESTINATION MODAL
   Clicking any result-card opens a cinematic detail panel.
   ========================================== */
const destinationData = {
  "Salt & Sun": {
    desc: "Sun-bleached mornings and salt-laced afternoons. This is where rest becomes ritual and time loosens its grip.",
    duration: "5–7 nights", season: "June – September", tags: ["Coastal", "Summer"]
  },
  "Coastal Drift": {
    desc: "Follow the shoreline without agenda. Let the rhythm of the coast become your itinerary.",
    duration: "4–6 nights", season: "May – October", tags: ["Coastal", "Slow Travel"]
  },
  "Golden Shore": {
    desc: "Where the land meets the water in long, unhurried light. A place to pause and observe.",
    duration: "5–8 nights", season: "July – September", tags: ["Beach", "Summer"]
  },
  "Aurora lit skies and winter silence": {
    desc: "Stand under the aurora and feel the scale of the night. Few places remind you of your smallness so gently.",
    duration: "4–6 nights", season: "November – February", tags: ["Arctic", "Winter"]
  },
  "Quiet towns wrapped in snow and light": {
    desc: "Small streets, warm interiors, the smell of pine. A winter that asks nothing and offers everything.",
    duration: "5–7 nights", season: "December – March", tags: ["Mountain", "Winter"]
  },
  "Clear horizons under pale winter sun": {
    desc: "Open terrain, still air, and the clarity that only winter can offer. Movement at altitude.",
    duration: "6–8 nights", season: "January – March", tags: ["Alpine", "Ski"]
  },
  "Rain & Stone": {
    desc: "Wet cobblestones, café windows, and a city that reveals itself differently in the rain.",
    duration: "3–5 nights", season: "October – November", tags: ["City", "Monsoon"]
  },
  "Misty Roads": {
    desc: "Roads that disappear into fog, forests that hold their breath. Travel without destination.",
    duration: "4–6 nights", season: "July – August", tags: ["Forest", "Monsoon"]
  },
  "Quiet Hills": {
    desc: "Green hills muted by rain. The kind of landscape that slows your thoughts before you realize it.",
    duration: "3–5 nights", season: "June – August", tags: ["Rural", "Monsoon"]
  },
  "Open Horizon": {
    desc: "Nothing but water in every direction. The sea strips everything down to what matters.",
    duration: "5–7 nights", season: "May – October", tags: ["Ocean", "Sailing"]
  },
  "Blue Silence": {
    desc: "Stillness on the water. Mornings with no agenda. The sea as a meditation.",
    duration: "4–7 nights", season: "June – September", tags: ["Coastal", "Slow Travel"]
  },
  "Rome (Colosseum)": {
    desc: "Stand inside two thousand years of history. Rome doesn't ask you to understand it — just to be present.",
    duration: "4–5 nights", season: "March – May", tags: ["History", "Culture"]
  },
  "Urban Layers": {
    desc: "Cities built on cities. Every street a different century. Architecture as accumulated memory.",
    duration: "4–6 nights", season: "Year-round", tags: ["Art", "Culture"]
  },
  "Everyday Elegance": {
    desc: "Paris is most beautiful when you stop looking for it. Find it in the bread, the light, the pace.",
    duration: "4–7 nights", season: "April – June", tags: ["City", "Culture"]
  },
  "Living History": {
    desc: "Japan holds its past with quiet pride. Temples sit beside tech. Silence coexists with neon.",
    duration: "7–12 nights", season: "March – May", tags: ["Culture", "History"]
  },
  "Mario Kart in Japan (Tokyo)": {
    desc: "Race through the streets of Shibuya in costume. Tokyo plays with the line between absurd and wonderful.",
    duration: "2–3 hours", season: "Year-round", tags: ["Activity", "Tokyo"]
  },
  "Pasta cooking class in Rome": {
    desc: "Flour on your hands, a kitchen in Trastevere, and a lesson in patience from someone's grandmother.",
    duration: "Half-day", season: "Year-round", tags: ["Food", "Rome"]
  },
  "Cycling in Amsterdam": {
    desc: "The best way to understand Amsterdam is to move through it the way locals do — unhurried, on two wheels.",
    duration: "Full-day", season: "April – October", tags: ["Active", "City"]
  },
  "Ocean Encounters — Azores": {
    desc: "Swim with sperm whales in open Atlantic waters. One of the last places where the ocean feels genuinely wild.",
    duration: "2–3 days", season: "April – October", tags: ["Ocean", "Wildlife"]
  },
  "Sky Valleys in Cappadocia": {
    desc: "Rise at dawn. Float over volcanic landscapes in silence. The earth below disappears slowly.",
    duration: "3–4 nights", season: "April – June", tags: ["Adventure", "Balloon"]
  }
};

const destModal    = document.getElementById("destModal");
const destBackdrop = document.getElementById("destBackdrop");
const destClose    = document.getElementById("destClose");
const destImg      = document.getElementById("destImg");
const destName     = document.getElementById("destName");
const destDesc     = document.getElementById("destDesc");
const destTags     = document.getElementById("destTags");
const destDuration = document.getElementById("destDuration");
const destSeason   = document.getElementById("destSeason");

function openModal(imgSrc, title) {
  const d = destinationData[title] || {
    desc: "A place that stays with you long after you leave.",
    duration: "Flexible", season: "Year-round", tags: ["Travel"]
  };

  destImg.src      = imgSrc;
  destImg.alt      = title;
  destName.textContent     = title;
  destDesc.textContent     = d.desc;
  destDuration.textContent = d.duration;
  destSeason.textContent   = d.season;
  destTags.innerHTML       = d.tags.map(t => `<span class="dest-tag">${t}</span>`).join("");

  destModal.classList.add("open");
  destModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  destModal.classList.remove("open");
  destModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".result-card").forEach(card => {
  card.addEventListener("click", () => {
    const img   = card.querySelector("img");
    const label = card.querySelector("span");
    if (img && label) openModal(img.src, label.textContent.trim());
  });
});

destBackdrop.addEventListener("click", closeModal);
destClose.addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && destModal.classList.contains("open")) closeModal();
});

/* ==========================================
   JOURNEY ORACLE
   Four questions scored against 8 destinations.
   Highest cumulative score wins the reveal.
   ========================================== */
const oracle        = document.getElementById("oracle");
const oracleOpenBtn = document.getElementById("oracleOpenBtn");
const oracleCloseBtn= document.getElementById("oracleClose");
const oracleInner   = document.getElementById("oracleInner");
const oracleReading = document.getElementById("oracleReading");
const oracleReveal  = document.getElementById("oracleReveal");
const oracleReadingFill = document.getElementById("oracleReadingFill");

const oracleQuestions = [
  {
    text: "Right now, you need",
    options: [
      { label: "Space and silence",          scores: { jeju: 2, azores: 2, norway: 2, bali: 1 } },
      { label: "Warmth and beauty",          scores: { bali: 3, jeju: 1, rome: 1 } },
      { label: "Energy and discovery",       scores: { seoul: 2, tokyo: 2, rome: 2 } },
      { label: "Wonder and strangeness",     scores: { cappadocia: 3, tokyo: 1, norway: 1 } }
    ]
  },
  {
    text: "Surround me with",
    options: [
      { label: "Open water",                 scores: { azores: 3, bali: 2, jeju: 1, norway: 1 } },
      { label: "Ancient stone",              scores: { rome: 3, cappadocia: 2, seoul: 1 } },
      { label: "Neon and movement",          scores: { tokyo: 3, seoul: 2 } },
      { label: "Wild green things",          scores: { norway: 3, jeju: 2, bali: 1, azores: 1 } }
    ]
  },
  {
    text: "The pace should be",
    options: [
      { label: "Completely still",           scores: { jeju: 3, azores: 2, bali: 1, norway: 1 } },
      { label: "Slow and unhurried",         scores: { bali: 3, rome: 2, azores: 1 } },
      { label: "Curious and wandering",      scores: { rome: 2, seoul: 2, tokyo: 1, cappadocia: 1 } },
      { label: "Unpredictable",              scores: { tokyo: 3, cappadocia: 2, norway: 2 } }
    ]
  },
  {
    text: "I want to leave with",
    options: [
      { label: "Quieter thoughts",           scores: { jeju: 3, azores: 2, norway: 2 } },
      { label: "A shifted perspective",      scores: { seoul: 2, tokyo: 2, rome: 2 } },
      { label: "Every sense full",           scores: { bali: 3, rome: 1, cappadocia: 1 } },
      { label: "A story I couldn't have planned", scores: { cappadocia: 3, norway: 2, tokyo: 1 } }
    ]
  }
];

const oracleDests = {
  jeju: {
    name: "Jeju Island",   subtitle: "South Korea",
    tagline: "Still. Volcanic. Yours.",
    desc: "The island meets you quietly. Basalt paths, volcanic stone, coastal silence. A place to become less and feel more.",
    image: "images/jeju.jpg",
    tags: ["Stillness", "Coastal", "Slow Travel"],
    season: "April – June",       duration: "4–6 nights"
  },
  bali: {
    name: "Bali",          subtitle: "Indonesia",
    tagline: "Warm. Alive. Ancient.",
    desc: "Morning offerings, ocean light, and temples that make you feel time differently. Bali doesn't let you stay the same.",
    image: "images/summerr.jpg",
    tags: ["Warmth", "Spiritual", "Sensory"],
    season: "May – September",    duration: "7–10 nights"
  },
  seoul: {
    name: "Seoul",         subtitle: "South Korea",
    tagline: "Past and present. Always moving.",
    desc: "Royal palaces beside neon streets. A city that holds its contradictions with grace. You'll want to understand it — and never fully will.",
    image: "images/namsan.jpg",
    tags: ["Urban", "Culture", "Contrast"],
    season: "March – May",        duration: "5–7 nights"
  },
  tokyo: {
    name: "Tokyo",         subtitle: "Japan",
    tagline: "Strange. Beautiful. Electric.",
    desc: "A city that runs on its own logic. The more you look, the less you understand — and somehow that's entirely the point.",
    image: "images/tokyo.png",
    tags: ["Urban", "Discovery", "Wonder"],
    season: "March – May",        duration: "7–10 nights"
  },
  rome: {
    name: "Rome",          subtitle: "Italy",
    tagline: "Layered. Golden. Ancient.",
    desc: "Two thousand years in every street. Rome asks nothing of you except presence — and rewards it completely.",
    image: "images/rome.png",
    tags: ["History", "Culture", "Beauty"],
    season: "March – May",        duration: "4–6 nights"
  },
  cappadocia: {
    name: "Cappadocia",    subtitle: "Turkey",
    tagline: "Otherworldly. Floating. Unhuman.",
    desc: "Volcanic valleys carved by wind over millennia. Rise before dawn, float above it all. Nothing you've seen prepared you for this.",
    image: "images/turkey.png",
    tags: ["Adventure", "Surreal", "Unique"],
    season: "April – June",       duration: "3–4 nights"
  },
  azores: {
    name: "The Azores",    subtitle: "Portugal",
    tagline: "Atlantic. Wild. Forgotten.",
    desc: "Mid-ocean islands where thermal lakes glow green and whale flukes surface beside small boats. The world's edge, kept quiet on purpose.",
    image: "images/swimming.png",
    tags: ["Wild", "Ocean", "Remote"],
    season: "May – October",      duration: "5–7 nights"
  },
  norway: {
    name: "Norway",        subtitle: "Scandinavia",
    tagline: "Cold. Silent. Luminous.",
    desc: "Fjords that make language feel insufficient. Skies that perform in silence. A country that teaches you how to be still.",
    image: "images/norway.png",
    tags: ["Nature", "Northern Lights", "Silence"],
    season: "November – February", duration: "6–9 nights"
  }
};

let oScores  = {};
let oCurrent = 0;

function initOracle() {
  oScores  = {};
  Object.keys(oracleDests).forEach(k => oScores[k] = 0);
  oCurrent = 0;

  /* reset all phases */
  oracleInner.style.opacity = "";
  oracleInner.style.pointerEvents = "";
  oracleReading.style.display = "none";
  oracleReading.classList.remove("visible");
  oracleReveal.style.display = "none";
  oracleReveal.classList.remove("visible");
  oracleReadingFill.style.width = "0";
  oracleReadingFill.style.transition = "none";

  renderOracleQ(0);
}

function openOracle() {
  initOracle();
  oracle.classList.add("open");
  oracle.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeOracle() {
  oracle.classList.remove("open");
  oracle.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderOracleQ(idx) {
  const q = oracleQuestions[idx];
  document.getElementById("oracleQuestionText").textContent = q.text;

  const wrap = document.getElementById("oracleOptions");
  wrap.innerHTML = q.options.map((o, i) =>
    `<button class="oracle-option" data-i="${i}">
       <span class="oracle-option-num">0${i + 1}</span>
       <span class="oracle-option-text">${o.label}</span>
     </button>`
  ).join("");

  wrap.querySelectorAll(".oracle-option").forEach((btn, i) => {
    btn.addEventListener("click", () => pickOracleOption(i));
  });

  /* progress dots */
  document.querySelectorAll(".oracle-progress-dot").forEach((d, i) =>
    d.classList.toggle("active", i === idx)
  );
  document.getElementById("oracleCounter").textContent = `${idx + 1} / ${oracleQuestions.length}`;
}

function pickOracleOption(optIdx) {
  const opt = oracleQuestions[oCurrent].options[optIdx];

  Object.entries(opt.scores).forEach(([dest, pts]) => {
    oScores[dest] = (oScores[dest] || 0) + pts;
  });

  /* flash selected, lock options */
  const btns = document.querySelectorAll(".oracle-option");
  btns[optIdx].classList.add("selected");
  btns.forEach(b => (b.style.pointerEvents = "none"));

  oCurrent++;
  const qWrap = document.getElementById("oracleQuestionWrap");

  setTimeout(() => {
    qWrap.classList.add("q-exit");
    setTimeout(() => {
      if (oCurrent >= oracleQuestions.length) {
        startOracleReading();
      } else {
        qWrap.classList.remove("q-exit");
        qWrap.classList.add("q-enter");
        renderOracleQ(oCurrent);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => qWrap.classList.remove("q-enter"))
        );
      }
    }, 350);
  }, 160);
}

function startOracleReading() {
  oracleInner.style.opacity = "0";
  oracleInner.style.pointerEvents = "none";

  setTimeout(() => {
    oracleReading.style.display = "flex";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        oracleReading.classList.add("visible");
        /* trigger the fill bar */
        oracleReadingFill.style.transition = "width 1.8s cubic-bezier(0.25,0.46,0.45,0.94)";
        oracleReadingFill.style.width = "100%";
      })
    );
    setTimeout(revealOracleResult, 2300);
  }, 380);
}

function revealOracleResult() {
  const winner = Object.entries(oScores).sort((a, b) => b[1] - a[1])[0][0];
  const d = oracleDests[winner];

  document.getElementById("oracleRevealImg").src       = d.image;
  document.getElementById("oracleRevealImg").alt       = d.name;
  document.getElementById("oracleRevealName").textContent    = d.name;
  document.getElementById("oracleRevealSubtitle").textContent= d.subtitle;
  document.getElementById("oracleRevealTagline").textContent = d.tagline;
  document.getElementById("oracleRevealDesc").textContent    = d.desc;
  document.getElementById("oracleRevealSeason").textContent  = d.season;
  document.getElementById("oracleRevealDuration").textContent= d.duration;
  document.getElementById("oracleRevealTags").innerHTML =
    d.tags.map(t => `<span class="oracle-reveal-tag">${t}</span>`).join("");

  oracleReading.classList.remove("visible");
  setTimeout(() => {
    oracleReading.style.display = "none";
    oracleReveal.style.display = "grid";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => oracleReveal.classList.add("visible"))
    );
  }, 380);
}

/* Wire up */
if (oracleOpenBtn)  oracleOpenBtn.addEventListener("click", openOracle);
if (oracleCloseBtn) oracleCloseBtn.addEventListener("click", closeOracle);
document.getElementById("oracleRetry")?.addEventListener("click", openOracle);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && oracle?.classList.contains("open")) closeOracle();
});
