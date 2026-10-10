// Injects a small animated cartoon-hacker SVG mascot into any element with
// class "mascot-slot". Pure inline SVG - no image files, no 3D model loading,
// so nothing to break across browsers or on GitHub Pages.

function mascotSVG(size = 48) {
  return `
  <svg class="mascot" width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <g class="mascot-bob">
      <!-- desk -->
      <rect x="14" y="96" width="92" height="4" rx="2" fill="var(--mascot-dim, #2a2f2a)"/>
      <!-- laptop -->
      <rect x="36" y="82" width="48" height="7" rx="2" fill="#111511"/>
      <rect x="38" y="56" width="44" height="26" rx="3" fill="#0a0e0c" stroke="var(--mascot-accent, #2de2e6)" stroke-width="1.6"/>
      <rect class="mascot-codeline" x="42" y="61" width="24" height="2.4" rx="1" fill="var(--mascot-accent, #2de2e6)"/>
      <rect class="mascot-codeline mascot-codeline-2" x="42" y="66" width="32" height="2.4" rx="1" fill="var(--mascot-accent, #2de2e6)"/>
      <rect class="mascot-codeline mascot-codeline-3" x="42" y="71" width="18" height="2.4" rx="1" fill="var(--mascot-accent, #2de2e6)"/>
      <!-- torso / hoodie -->
      <path d="M40 92 C40 70 44 58 60 58 C76 58 80 70 80 92 Z" fill="#0d100d" stroke="var(--mascot-accent, #2de2e6)" stroke-width="1.2"/>
      <!-- hood + head -->
      <circle cx="60" cy="34" r="15" fill="#0d100d" stroke="var(--mascot-accent, #2de2e6)" stroke-width="1.2"/>
      <path d="M43 32 C43 14 77 14 77 32 C77 24 70 18 60 18 C50 18 43 24 43 32 Z" fill="#0a0c0a"/>
      <!-- glowing eyes -->
      <circle class="mascot-eye" cx="54" cy="35" r="2.1" fill="var(--mascot-accent, #2de2e6)"/>
      <circle class="mascot-eye" cx="66" cy="35" r="2.1" fill="var(--mascot-accent, #2de2e6)"/>
      <!-- hands typing -->
      <rect class="mascot-hand mascot-hand-l" x="45" y="86" width="8" height="5" rx="2" fill="var(--mascot-accent, #2de2e6)" opacity="0.85"/>
      <rect class="mascot-hand mascot-hand-r" x="67" y="86" width="8" height="5" rx="2" fill="var(--mascot-accent, #2de2e6)" opacity="0.85"/>
    </g>
  </svg>`;
}

document.querySelectorAll(".mascot-slot").forEach(slot => {
  const size = parseInt(slot.dataset.size || "48", 10);
  slot.innerHTML = mascotSVG(size);
});
