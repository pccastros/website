// elements
const navbar = document.querySelector("#navbar");
const menu = document.getElementById('navbarSupportedContent');
const links = document.querySelectorAll(".nav-link");
const header = document.querySelector(".nav-header");
console.log(menu)
console.log(menu.classList)
// to top when refresh
window.onbeforeunload = function () {
  if(window.scrollTo) window.scrollTo(0,0);
};

// navbar background color
//window.addEventListener("scroll", function () {
//  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
//  window.scrollY < 100 && (navbar.style.background = `transparent`);
//});

// close navbar
function closeNavbar() {
  menu.classList.remove("show");
}

// add click function to links
header.addEventListener("click", closeNavbar);
links.forEach((link) => {
  link.addEventListener("click", closeNavbar);
});
