document.addEventListener('DOMContentLoaded', () => {
  // مدیریت منو موبایل
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
      title: 'V2RayNG',
      icon: '🤖',
      desc: 'آموزش جامع برنامه V2RayNG برای اندروید'
    },
    {
      title: 'V2RayTUN',
      icon: '🤖',
      desc: 'راهنمای استفاده از V2RayTUN در اندروید'
    },
    {
      title: 'V2Box',
      icon: '🍏',
      desc: 'راهنمای نصب V2Box برای iOS'
    },
    {
      title: 'Streisand',
      icon: '🍏',
      desc: 'آموزش تنظیم Streisand روی iOS'
    },
    {
      title: 'V2RayN',
      icon: '💻',
      desc: 'آموزش کامل نرم‌افزار V2RayN در ویندوز'
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
