"use strict";
const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementsByClassName("menu");

toggleMenu.addEventListener("click", (e) => {
  menu[0].classList.toggle("active");
});
