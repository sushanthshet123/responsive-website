const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar__menu");
const navlogo = document.querySelector(".navbar_logo");

//display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is_active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// show active menu when scrolling
const highlighted = () => {
  const elem = document.querySelector(".highlight");
  const homePage = document.querySelector("#home_page");
  const aboutPage = document.querySelector("#about_page");
  const servicePage = document.querySelector("#services_page");
  const scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homePage.classList.add("highlight");
    aboutPage.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutPage.classList.add("highlight");
    homePage.classList.remove("highlight");
    servicePage.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2000) {
    servicePage.classList.add("highlight");
    aboutPage.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlighted);
window.addEventListener("click", highlighted);

//hide mobile menu

const hideMenu = () => {
  const menuBar = document.querySelector(".is_active");
  if (window.innerWidth <= 768 && menuBar) {
    menu.classList.toggle("is_active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click",hideMenu)
navlogo.addEventListener("click",hideMenu)