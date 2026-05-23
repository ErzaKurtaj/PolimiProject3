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
