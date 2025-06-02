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

//faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn');

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

//scrollreveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  //reset:true, //resets anomation
});

//hero
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img');

//stats
sr.reveal('.stats__item', {
  origin: 'top',
  distance: '100px',
  interval: 100,
  delay: 600,
});

//services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  origin: 'bottom',
  distance: '100px',
  interval: 100,
  delay: 600,
});

//appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonials');
sr.reveal('.testimonials__container');

//team
sr.reveal('.team__title');
sr.reveal('.team__slider');

//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  origin: 'bottom',
  distance: '100px',
  interval: 100,
  delay: 600,
});

//departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  distance: '100px',
  interval: 100,
  delay: 600,
});

//brand
sr.reveal('.brands__logo', {
  distance: '100px',
  interval: 100,
  delay: 600,
});

//newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

//footer
sr.reveal('.footer__item', {
  distance: '100px',
  interval: 100,
  delay: 600,
});
