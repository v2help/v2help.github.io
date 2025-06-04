const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// بارگذاری تم ذخیره‌شده
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

// تغییر تم
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// منوی همبرگری
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
