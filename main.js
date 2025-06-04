document.addEventListener('DOMContentLoaded', () => {
  // مدیریت تم
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // تنظیم تم اولیه
  body.setAttribute('data-theme', savedTheme);
  updateThemeText(savedTheme);
  
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
    updateThemeText(newTheme);
    
    // انیمیشن تغییر تم
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    setTimeout(() => {
      body.style.transition = '';
    }, 500);
  }
  
  function updateThemeText(theme) {
    const themeText = document.getElementById('themeText');
    if (themeText) {
      themeText.textContent = theme === 'dark' ? 'تیره' : 'روشن';
    }
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
      desc: 'آموزش کامل V2RayN با آخرین نسخه'
    },
    {
      title: 'اندروید',
      icon: '📱',
      desc: 'راهنمای جامع V2RayNG'
    },
    {
      title: 'iOS',
      icon: '🍏',
      desc: 'تنظیمات پیشرفته V2Box'
    },
    {
      title: 'مک',
      icon: '🖥️',
      desc: 'آموزش V2RayX برای macOS'
    },
    {
      title: 'لینوکس',
      icon: '🐧',
      desc: 'پیکربندی V2Ray در توزیع‌های مختلف'
    },
    {
      title: 'روتر',
      icon: '📶',
      desc: 'نصب V2Ray بر روی روترهای خانگی'
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
  
  // بارگذاری سرورها
  const servers = [
    { name: 'سرور پرسرعت #1', location: 'آلمان', ping: '32ms' },
    { name: 'سرور اختصاصی #2', location: 'فرانسه', ping: '45ms' },
    { name: 'سرور ابری #3', location: 'آمریکا', ping: '68ms' },
    { name: 'سرور پریمیوم #4', location: 'ژاپن', ping: '92ms' }
  ];
  
  const serverGrid = document.querySelector('.server-grid');
  if (serverGrid) {
    serverGrid.innerHTML = `
      <div class="server-header">
        <span>نام سرور</span>
        <span>موقعیت</span>
        <span>پینگ</span>
        <span>وضعیت</span>
      </div>
    `;
    
    servers.forEach(server => {
      const serverItem = document.createElement('div');
      serverItem.className = 'server-item';
      serverItem.innerHTML = `
        <span>${server.name}</span>
        <span>${server.location}</span>
        <span>${server.ping}</span>
        <span class="status active">فعال</span>
      `;
      serverGrid.appendChild(serverItem);
    });
  }
});
