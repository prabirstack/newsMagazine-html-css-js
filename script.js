const navToggle = document.querySelector('.nav-menu_toggle'),
  navMenu = document.querySelector('.nav-menu'),
  navClose = document.querySelector('.nav-menu_close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Header Right

const rightHeader = document.querySelector('.right_header-toggle'),
  headerRightMenu = document.querySelector('.header-right'),
  rightClose = document.querySelector('.header-right_close');

if (rightHeader) {
  rightHeader.addEventListener('click', () => {
    headerRightMenu.classList.add('show-right_menu');
  });
}
if (rightClose) {
  rightClose.addEventListener('click', () => {
    headerRightMenu.classList.remove('show-right_menu');
  });
}
