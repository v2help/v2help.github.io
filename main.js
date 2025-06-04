document.addEventListener('DOMContentLoaded', () => {
  // مدیریت تم
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // تنظیم تم اولیه
  body.setAttribute('data-theme', savedTheme);
  
  // تغییر تم با کلیدهای چپ/راست
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      toggleTheme();
    }
  });
  
  // تغییر تم با کلیک
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // انیمیشن تغییر تم
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    setTimeout(() => {
      body.style.transition = '';
    }, 500);
  }
  
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
  
  // بستن منو با کلیک خارج از آن
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // افکت تایپینگ
  const typingText = document.querySelector('.typing-effect');
  if (typingText) {
    const text = typingText.textContent;
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
  
  // بارگذاری محتوای آموزش‌ها
  const tutorials = [
    {
      title: 'ویندوز',
      icon: '💻',
      desc: 'آموزش کامل V2RayN'
    },
    {
      title: 'اندروید',
      icon: '📱',
      desc: 'راهنمای V2RayNG'
    },
    {
      title: 'iOS',
      icon: '🍏',
      desc: 'تنظیمات V2Box'
    },
    {
      title: 'مک',
      icon: '🖥️',
      desc: 'آموزش V2RayX'
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
        <a href="#" class="btn btn-secondary">مشاهده آموزش</a>
      `;
      tutorialGrid.appendChild(card);
    });
  }
});
