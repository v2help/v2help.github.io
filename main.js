document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);

  function toggleTheme() {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    setTimeout(() => body.style.transition = '', 500);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') toggleTheme();
  });

  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuOverlay.classList.add('active');
      body.style.overflow = 'hidden';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
      body.style.overflow = '';
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }

  const typingText = document.querySelector('.typing-effect');
  if (typingText) {
    const text = typingText.getAttribute('data-text') || typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i++);
      } else {
        clearInterval(typing);
      }
    }, 100);
  }

  const tutorials = [
    { title: 'ویندوز', icon: '💻', desc: 'آموزش کامل V2RayN' },
    { title: 'اندروید', icon: '📱', desc: 'راهنمای V2RayNG' },
    { title: 'iOS', icon: '🍏', desc: 'تنظیمات V2Box' },
    { title: 'مک', icon: '🖥️', desc: 'آموزش V2RayX' }
  ];

  const tutorialGrid = document.querySelector('.tutorial-grid');
  if (tutorialGrid) {
    tutorials.forEach(tut => {
      const card = document.createElement('div');
      card.className = 'tutorial-card';
      card.innerHTML = `
        <div class="tutorial-icon">${tut.icon}</div>
        <h3>${tut.title}</h3>
        <p>${tut.desc}</p>
        <a href="#" class="btn btn-secondary">مشاهده آموزش</a>
      `;
      tutorialGrid.appendChild(card);
    });
  }
});
