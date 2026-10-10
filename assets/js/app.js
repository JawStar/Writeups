let ALL_ENTRIES = [];
let activePlatform = "all";

const entriesEl = document.getElementById("entries");
const emptyStateEl = document.getElementById("emptyState");
const searchBox = document.getElementById("searchBox");
const visibleCountEl = document.getElementById("visibleCount");
const totalCountEl = document.getElementById("totalCount");

function render() {
  const query = searchBox.value.trim().toLowerCase();

  const filtered = ALL_ENTRIES.filter(e => {
    const platformOk = activePlatform === "all" || e.platform === activePlatform;
    const queryOk = !query ||
      e.title.toLowerCase().includes(query) ||
      e.excerpt.toLowerCase().includes(query);
    return platformOk && queryOk;
  });

  entriesEl.innerHTML = filtered.map(e => `
    <div class="entry">
      <div class="entry-top">
        <div class="entry-title">
          <a href="writeup.html?path=${encodeURIComponent(e.path)}">${escapeHtml(e.title)}</a>
        </div>
        <span class="tag ${e.platform}">${e.platform.toUpperCase()}</span>
      </div>
      <div class="entry-meta">${e.date}</div>
      <div class="entry-excerpt">${escapeHtml(e.excerpt)}...</div>
    </div>
  `).join("");

  emptyStateEl.style.display = filtered.length === 0 ? "block" : "none";
  visibleCountEl.textContent = filtered.length;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activePlatform = btn.dataset.platform;
    render();
  });
});

searchBox.addEventListener("input", render);

fetch("manifest.json")
  .then(r => r.json())
  .then(data => {
    ALL_ENTRIES = data;
    totalCountEl.textContent = data.length;
    render();
  })
  .catch(() => {
    entriesEl.innerHTML = "";
    emptyStateEl.textContent = "manifest.json not found — run scripts/convert_medium_export.py first.";
    emptyStateEl.style.display = "block";
  });
