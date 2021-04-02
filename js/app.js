const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar__list");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  overlay.classList.toggle("overlay-active");
});
