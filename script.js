/* ════════════════════════════════════════
   NAV — DROPDOWN "MES PROJETS"
   ════════════════════════════════════════ */
document.querySelectorAll('.nav-has-dropdown').forEach(li => {
  const btn = li.querySelector('button');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = li.classList.contains('open');
    // Ferme tous les dropdowns
    document.querySelectorAll('.nav-has-dropdown').forEach(x => x.classList.remove('open'));
    if (!isOpen) li.classList.add('open');
  });
});

// Ferme le dropdown si clic en dehors
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-has-dropdown').forEach(x => x.classList.remove('open'));
});

// Empêche la fermeture si clic à l'intérieur du dropdown
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  dd.addEventListener('click', e => e.stopPropagation());
});

/* ════════════════════════════════════════
   FADE-IN AU SCROLL
   ════════════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ════════════════════════════════════════
   LIEN DE NAV ACTIF (page courante)
   ════════════════════════════════════════ */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links > li > a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href.includes(currentPage)) a.classList.add('active');
});

/* ════════════════════════════════════════
   FORMULAIRE DE CONTACT
   ════════════════════════════════════════ */
function sendForm() {
  const name  = document.getElementById('f-name')?.value.trim();
  const email = document.getElementById('f-email')?.value.trim();
  const msg   = document.getElementById('f-msg')?.value.trim();
  if (!name || !email || !msg) { alert('Veuillez remplir tous les champs.'); return; }
  const ok = document.getElementById('form-success');
  if (ok) ok.style.display = 'block';
  document.getElementById('f-name').value  = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-msg').value   = '';
}
