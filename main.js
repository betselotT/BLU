const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLists = document.querySelector(".navbar-lists");
const navbarBtns = document.querySelector(".navbar-btns");

hamburgerMenu.addEventListener("click", () => {
  navbarLists.classList.toggle("active");
  navbarBtns.classList.toggle("active");
});
