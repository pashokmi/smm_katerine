const menuBtnActive = document.querySelector('.menu__btn');
const menuActive = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuBtnActive.addEventListener('click', () => {
  menuBtnActive.classList.toggle('menu__btn--active');
  menuActive.classList.toggle('menu__list--hide');
});

menuLink.forEach(item => {
  item.addEventListener('click', () => {
    menuActive.classList.add('menu__list--hide');
    menuBtnActive.classList.remove('menu__btn--active');
  });
});







let mixer = mixitup('.portfolio');