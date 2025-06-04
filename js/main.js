document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // کارت‌های آموزش
  const tutorials = [
    { title: 'V2RayNG', icon: '<i class="fab fa-android"></i>', desc: 'راهنمای کامل استفاده از V2RayNG' },
    { title: 'V2RayTUN', icon: '<i class="fab fa-android"></i>', desc: 'آموزش تنظیمات V2RayTUN برای اندروید' },
    { title: 'V2Box (iOS)', icon: '<i class="fab fa-apple"></i>', desc: 'آموزش راه‌اندازی V2Box در آیفون' },
    { title: 'Streisand (iOS)', icon: '<i class="fab fa-apple"></i>', desc: 'راهنمای استفاده از Streisand در iOS' },
    { title: 'V2RayN (Windows)', icon: '<i class="fas fa-laptop"></i>', desc: 'آموزش کامل نرم‌افزار V2RayN' }
  ];

  const tutorialGrid = document.querySelector('.tutorial-grid');
  if (tutorialGrid) {
    tutorials.forEach(t => {
      const card = document.createElement('div');
      card.className = 'tutorial-card';
      card.innerHTML = `
        <div class="tutorial-icon">${t.icon}</div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
        <a href="#" class="btn">مشاهده آموزش</a>
      `;
      tutorialGrid.appendChild(card);
    });
  }
});
