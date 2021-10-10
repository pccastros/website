const navbar = document.querySelector("#navbar");
const menu = document.querySelector(".navbar-toggler");
const links = document.querySelector(".nav-header");

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
    links.classList.toggle("show");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".nav-header  .active");
  const shouldBeActive = document.querySelector(
    ".nav-header [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}