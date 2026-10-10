// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
}

// ---------- Scroll-reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

function observeReveals(root = document) {
  root.querySelectorAll(".section-head, .card, .cert-card").forEach(el => revealObserver.observe(el));
}

// ---------- Active nav link on scroll ----------
const sectionEls = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { threshold: 0.4, rootMargin: "-80px 0px -60% 0px" });
sectionEls.forEach(s => navObserver.observe(s));

// ---------- Escape helper ----------
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}

// ---------- Card renderer ----------
function renderCards(containerId, entries, emptyMsg) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!entries.length) {
    el.innerHTML = `<div class="empty-section">${emptyMsg}</div>`;
    return;
  }
  el.innerHTML = entries.map(e => `
    <div class="card">
      <a class="card-title" href="writeup.html?path=${encodeURIComponent(e.path)}">${escapeHtml(e.title)}</a>
      <div class="card-meta">${e.date}</div>
      <div class="card-excerpt">${escapeHtml(e.excerpt)}...</div>
    </div>
  `).join("");
  observeReveals(el);
}

// ---------- Animated counters ----------
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

// ---------- Load data ----------
Promise.all([
  fetch("manifest.json").then(r => r.json()).catch(() => []),
  fetch("certifications.json").then(r => r.json()).catch(() => []),
]).then(([manifest, certs]) => {
  const byPlatform = (p) => manifest.filter(e => e.platform === p);

  renderCards("thm-cards", byPlatform("tryhackme"), "No TryHackMe writeups converted yet — run scripts/convert_medium_export.py");
  renderCards("htb-cards", byPlatform("hackthebox"), "No HackTheBox writeups converted yet — run scripts/convert_medium_export.py");
  renderCards("offsec-cards", byPlatform("offsec"), "No OffSec writeups converted yet — run scripts/convert_medium_export.py");
  renderCards("hw-cards", byPlatform("hardware-ot-ics-scada"), "No hardware/OT/ICS/SCADA writeups yet — add one to writeups/hardware-ot-ics-scada/");
  renderCards("news-cards", byPlatform("news"), "No news posted yet — use admin.html to add one.");
  renderCards("other-cards", byPlatform("other"), "Nothing filed here yet.");

  // Certifications
  const certEl = document.getElementById("cert-cards");
  if (certEl) {
    certEl.innerHTML = certs.map(c => `
      <div class="cert-card">
        <div class="cert-name">${escapeHtml(c.name)}</div>
        <div class="cert-full">${escapeHtml(c.full_name)}</div>
        <div class="cert-issuer">${escapeHtml(c.issuer)} — ${escapeHtml(c.note)}</div>
      </div>
    `).join("");
    observeReveals(certEl);
  }

  // Hero stats
  const totalWriteups = manifest.length;
  const platforms = new Set(manifest.map(e => e.platform)).size;
  document.getElementById("stat-total").dataset.target = totalWriteups;
  document.getElementById("stat-certs").dataset.target = certs.length;
  document.getElementById("stat-platforms").dataset.target = Math.max(platforms, 6);

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target, 10) || 0);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".hero-stats .num").forEach(el => statObserver.observe(el));

  observeReveals();
});
