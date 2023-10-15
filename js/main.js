const openMenu = document.querySelector(".open");
const menuClose = document.querySelector(".close");
const menuWrapper = document.querySelector(".header__menu__mobile");

openMenu.addEventListener("click", function () {
  menuWrapper.classList.toggle("active");
  menuClose.classList.toggle("active");
});

menuClose.addEventListener("click", function () {
  menuWrapper.classList.remove("active");
  menuClose.classList.remove("active");
});
