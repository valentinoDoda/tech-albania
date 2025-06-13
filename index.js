"use strict";
const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementsByClassName("menu");

toggleMenu.addEventListener("click", (e) => {
  menu[0].classList.toggle("active");
});

const elementsToAnimate = document.querySelectorAll(`
  .hero-presentasion h1,
  .hero-presentasion p,
  .hero-ctas > *,
  .about_container h2,
  .about_container h3,
  .member_card
`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

elementsToAnimate.forEach((el) => observer.observe(el));

const viewMore = document.querySelectorAll("#viewMore");
viewMore.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnParentElement = e.target.parentElement;
    btnParentElement.children[0].classList.toggle("truncate-3-lines");
  });
});
