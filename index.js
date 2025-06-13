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
  .about_container .meeting_team h3,
  .about_container .purpose h3,
  .member_card,
  .services h2,
  .services a,
  .service,
  .our_purpose p,
  .our_purpose h1
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

