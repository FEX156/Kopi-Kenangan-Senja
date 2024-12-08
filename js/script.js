//togle
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar untuk canceled

const menu = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});
