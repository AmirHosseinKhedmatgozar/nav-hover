const list = document.querySelector(".nav--links");
const hover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const links = document.querySelectorAll(".nav__link");
    const target = e.target;
    links.forEach((link) => {
      if (link !== target) {
        link.style.opacity = this;
      }
    });
  }
};
list.addEventListener("mouseover", hover.bind(0.5));
list.addEventListener("mouseout", hover.bind(1));
