//mobile nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-[0px]';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);
  } else {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
  }
  closeBtnIcon.classList.toggle(arrowLeftClass);
  closeBtnIcon.classList.toggle(arrowRightClass);
});

//Swiper
// swiper;
// const swiper = new Swiper('.swiper', {
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
