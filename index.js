"use strict";
const toggleMenu = document.getElementById("toggleMenu");
const menu = document.getElementsByClassName("menu");

toggleMenu.addEventListener("click", (e) => {
  menu[0].classList.toggle("active");
});

const numValues = document.querySelectorAll(".value");

const duration = 1500

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const endPoint = +entry.target.textContent;
        let startPoint = 0;
        const calcTime = duration / endPoint;
        const counter = setInterval(()=> {
        startPoint++;
        entry.target.textContent = startPoint;
        if(startPoint == endPoint){
          clearInterval(counter)
         }
          }, calcTime)
      } else {
        console.log(entry.target.textContent)
      }
    });
  },
  {
    threshold: 0.5,
  }
);
numValues.forEach((num) => {
  observer2.observe(num)
  
})


const elementsToAnimate = document.querySelectorAll(`
  .hero-presentasion h1,
  .hero-presentasion p,
  h2,
  .hero-ctas > *,
  .project_container,
  .section_cta,
  .about_container .meeting_team h3,
  .about_container .purpose h3,
  .member_card,
  .services a,
  .service,
  .our_purpose p,
  .our_purpose h1,
  .process_step .description,
  .process_step .title
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
