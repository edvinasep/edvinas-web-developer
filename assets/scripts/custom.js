const header = document.querySelector('header');
const main = document.querySelector('main');
const menuBurger = document.querySelector('.menu-burger');
const backdrop = document.querySelector('.backdrop')

window.addEventListener('load', pageLoadedHandler);

menuBurger.addEventListener("click", menuClickHandler);
backdrop.addEventListener("click", menuClickHandler);

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

