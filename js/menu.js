const body = document.body;
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.remove("open-menu");
  });
});

menuButton.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
  menu.classList.add("open-menu");
});

closeMenuButton.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  menu.classList.remove("open-menu");
});
