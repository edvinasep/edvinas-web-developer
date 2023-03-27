const colorLight = '#f8f8f8';
const colorDark = '#161616';
const scrollTop = -80;
const header = document.querySelector('header');
const main = document.querySelector('main');
const menuBurger = document.querySelector('.menu-burger');
const backdrop = document.querySelector('.backdrop');
const headerNav = document.querySelector('header nav a');
const about = document.querySelector('#about');
const menuLine =  document.querySelectorAll('header .menu-burger__icon .line');
const logoText = document.querySelector('.text-black');
const letterW = document.querySelector('.letter-w g');

window.addEventListener('load', pageLoadedHandler);
window.addEventListener("scroll", scrollHandler, { passive: true });
menuBurger.addEventListener('click', menuClickHandler);
backdrop.addEventListener('click', menuClickHandler);
headerNav.addEventListener('click', menuClickHandler);

function pageLoadedHandler() {
  setTimeout(_removeClass, 600);
  function _removeClass() {
    main.classList.remove('initial-load');
  }
}
function menuClickHandler() {
  header.classList.toggle('menu-open');
  main.classList.toggle('menu-open');
}
function scrollHandler() {
  if (parseFloat(about.getBoundingClientRect().top) < scrollTop ) {
    menuLine.forEach(el => el.classList.add('switch-color'));
    logoText.classList.add('switch-color');
    letterW.setAttribute('stroke', colorLight);
  } else {
    menuLine.forEach(el => el.classList.remove('switch-color'));
    logoText.classList.remove('switch-color');
    letterW.setAttribute('stroke', colorDark);
  }
}
       
