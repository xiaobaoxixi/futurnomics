"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  let section = window.localStorage.getItem("section");
  if (section) {
    showContent(section);
    document
      .querySelector(`[data-section="${section}"]`)
      .classList.add("chosen");
  }

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
        document.querySelector(".chosen:not(.lang)").classList.remove("chosen");
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

  function showContent(classKeyword) {
    if (
      classKeyword === "entre" ||
      classKeyword === "intra" ||
      classKeyword === "founder"
    ) {
      window.localStorage.setItem("section", classKeyword);
    } else if (classKeyword === "home") {
      window.localStorage.removeItem("section");
    } else {
      console.log(classKeyword);
    }

    if (classKeyword) {
      document.querySelector(".hero").classList.remove("close");
      document.querySelector(".hero").classList.remove("half");
      document
        .querySelectorAll(`.content:not(.${classKeyword}-content)`)
        .forEach(c => {
          c.classList.add("hide");
        });
      document.querySelectorAll(`.${classKeyword}-content`).forEach(s => {
        s.classList.remove("hide");
      });
    }
    if (classKeyword === "founder") {
      document.querySelector(".hero").classList.add("close");
    }
    if (classKeyword === "entre" || classKeyword === "intra") {
      document.querySelector(".hero").classList.add("half");
    }
  }
}
