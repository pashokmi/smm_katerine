let swiper = new Swiper(".services__slider", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const menuBtnActive = document.querySelector('.menu__btn');
const menuActive = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');
const menuScroll = document.querySelector('.menu');


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


window.addEventListener('scroll', scrollMenu);

function scrollMenu() {
  if (window.pageYOffset <= 6) {
    menuScroll.classList.remove('menu--active');
  } else {
    menuScroll.classList.add('menu--active');
  }
}


const popupOpen = document.querySelector('.call-back');
const popupClose = document.querySelector('.popup__close');
const popupModal = document.querySelector('.popup');

popupClose.addEventListener('click', () => {
 popupModal.classList.remove('show');
});

popupOpen.addEventListener('click', () => {
  popupModal.classList.add('show');
});



 
   
 


