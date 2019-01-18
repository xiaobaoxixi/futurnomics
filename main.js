"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  const navAnchorS = document.querySelectorAll("nav a:not(.lang)");
  navAnchorS.forEach(a => {
    a.addEventListener("click", e => {
      hightlightAnchor(e.target);
      showContent(e.target.dataset.section);
    });
  });

  function hightlightAnchor(elem) {
    if (elem.classList.contains("chosen")) {
      elem.classList.remove("chosen");
    } else {
      if (document.querySelector(".chosen")) {
        document.querySelector(".chosen").classList.remove("chosen");
      }
      elem.classList.add("chosen");
    }
  }

  const descCircleS = document.querySelectorAll(".desc-circle");
  const partnerCircleS = document.querySelectorAll(".partner-circle");
  const redDot = document.querySelector(".red-dot-wrapper");
  descCircleS.forEach(c => {
    c.addEventListener("mouseenter", stopAnimation);
  });
  partnerCircleS.forEach(c => {
    c.addEventListener("mouseenter", stopAnimation);
  });
  descCircleS.forEach(c => {
    c.addEventListener("mouseleave", resumeAnimation);
  });
  partnerCircleS.forEach(c => {
    c.addEventListener("mouseleave", resumeAnimation);
  });

  function stopAnimation() {
    descCircleS.forEach(c => {
      c.style.WebkitAnimationPlayState = "paused";
      c.style.animationPlayState = "paused";
    });
    partnerCircleS.forEach(c => {
      c.style.WebkitAnimationPlayState = "paused";
      c.style.animationPlayState = "paused";
    });
    redDot.style.WebkitAnimationPlayState = "paused";
    redDot.style.animationPlayState = "paused";
  }
  function resumeAnimation() {
    descCircleS.forEach(c => {
      c.style.WebkitAnimationPlayState = "running";
      c.style.animationPlayState = "";
    });
    partnerCircleS.forEach(c => {
      c.style.WebkitAnimationPlayState = "running";
      c.style.animationPlayState = "";
    });
    redDot.style.WebkitAnimationPlayState = "running";
    redDot.style.animationPlayState = "";
  }

  function showContent(section) {
    if (section) {
      console.log(section);
    }
  }
}
