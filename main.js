document.addEventListener('DOMContentLoaded', () => {
  // مدیریت منو
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

  // افکت تایپینگ
  const typingText = document.querySelector('.typing-effect');
  if (typingText) {
    const text = "به دانشنامه v2ray خوش آمدید";
    typingText.textContent = '';

    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  }

  // بارگذاری آموزش‌ها
  const tutorials = [
    {
      title: 'V2RayNG (اندروید)',
      icon: '📱',
      desc: 'آموزش استفاده از V2RayNG در اندروید'
    },
    {
      title: 'V2RayTUN (اندروید)',
      icon: '📲',
      desc: 'راهنمای کامل V2RayTUN برای کاربران اندروید'
    },
    {
      title: 'V2Box (iOS)',
      icon: '🍏',
      desc: 'آموزش تنظیم V2Box در آیفون و آیپد'
    },
    {
      title: 'Streisand (iOS)',
      icon: '📡',
      desc: 'راهنمای اتصال با Streisand برای iOS'
    },
    {
      title: 'V2RayN (ویندوز)',
      icon: '💻',
      desc: 'راهنمای گام‌به‌گام نصب و راه‌اندازی V2RayN'
    }
  ];

  const tutorialGrid = document.querySelector('.tutorial-grid');
  if (tutorialGrid) {
    tutorials.forEach(tutorial => {
      const card = document.createElement('div');
      card.className = 'tutorial-card';
      card.innerHTML = `
        <div class="tutorial-icon">${tutorial.icon}</div>
        <h3>${tutorial.title}</h3>
        <p>${tutorial.desc}</p>
        <a href="#" class="btn btn-primary">مشاهده آموزش</a>
      `;
      tutorialGrid.appendChild(card);
    });
  }
});
