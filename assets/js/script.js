const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const headerMenu = document.querySelector(".header_menu"),
  menuBtn = document.querySelector(".menu-btn"),
  headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
    menuBtn.focus();
  });
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const logoImage = document.getElementById("logoImage");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    logoImage.src = "assets/img/lightlogo.png"; 
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    logoImage.src = "assets/img/logo.png"; 
  }
});
