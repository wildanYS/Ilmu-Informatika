// Smooth scroll ke artikel saat tombol diklik
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const artikel = document.getElementById('artikel');
  artikel.scrollIntoView({ behavior: 'smooth' });
});

// Dark mode toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') 
    ? '☀️ Light Mode' 
    : '🌙 Dark Mode';
});