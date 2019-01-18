"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  const navAnchorS = document.querySelectorAll("nav a:not(.lang)");
  navAnchorS.forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
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

  function showContent(section) {
    if (section) {
      console.log(section);
    }
  }
}
