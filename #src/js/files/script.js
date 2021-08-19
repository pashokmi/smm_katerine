
const menuBtnActive = document.querySelector('.menu__btn');
const menuActive = document.querySelector('.menu__list');

menuBtnActive.addEventListener("click", () => {
  menuBtnActive.classList.toggle('menu__btn--active');
});

document.querySelector('.menu__btn').addEventListener('click', () => {
  document.querySelector('.menu__list').classList.toggle('menu__list--hide');
});


let mixer = mixitup('.portfolio');