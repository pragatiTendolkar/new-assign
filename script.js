
  let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee-text", {
  xPercent: -100,
  repeat: -1,
  duration: 5,
  ease: "linear"
}).totalProgress(0.5);

gsap.set(".marquee-box", { xPercent: 0 });

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });

  arrows.forEach((arrow) => {
    if (isScrollingDown) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });

  currentScroll = window.pageYOffset;
});
