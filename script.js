document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('show');
});

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
});
