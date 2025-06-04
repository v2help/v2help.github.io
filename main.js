document.addEventListener('DOMContentLoaded', () => {
  // مدیریت منو
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle?.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu?.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  menuOverlay?.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // تایپینگ
  const typingText = document.querySelector('.typing-effect');
  if (typingText) {
    const text = "به دانشنامه V2Ray خوش آمدید";
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

  // آموزش‌ها
  const tutorials = [
    {
      title: 'اندروید - V2RayNG',
      icon: '🤖',
      desc: 'راهنمای کامل V2RayNG برای اندروید'
    },
    {
      title: 'اندروید - V2RayTUN',
      icon: '🤖',
      desc: 'آموزش اتصال با V2RayTUN'
    },
    {
      title: 'iOS - V2Box',
      icon: '',
      desc: 'نصب و استفاده از V2Box در iOS'
    },
    {
      title: 'iOS - Streisand',
      icon: '',
      desc: 'راهنمای تنظیمات Streisand'
    },
    {
      title: 'ویندوز - V2RayN',
      icon: '💻',
      desc: 'آموزش گام‌به‌گام V2RayN'
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
        <a href="#" class="btn">مشاهده آموزش</a>
      `;
      tutorialGrid.appendChild(card);
    });
  }
});
