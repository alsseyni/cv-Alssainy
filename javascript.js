// === Thème sombre / clair ===
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Thème par défaut clair
body.classList.add('light-mode');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Changer l’icône et le texte
  toggleBtn.innerHTML = body.classList.contains('dark-mode')
    ? '<i class="fa-solid fa-sun"></i> Mode Clair'
    : '<i class="fa-solid fa-moon"></i> Mode Sombre';
});

// === Animation des barres de progression ===
function animateProgress() {
  document.querySelectorAll('.progress').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}

window.addEventListener('scroll', animateProgress);
window.addEventListener('load', animateProgress);

// === Animation d’apparition (fade-in) ===
function fadeInSections() {
  document.querySelectorAll('.fade').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInSections);
window.addEventListener('load', fadeInSections);

// === Formulaire de contact ===
const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = "✅ Message envoyé avec succès !";
  msg.style.color = "green";
  form.reset();
});
