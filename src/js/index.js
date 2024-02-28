import '@/styles/style';

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
  header.classList.toggle('open');
});

const headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
  });
});
