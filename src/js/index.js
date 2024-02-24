import '@/styles/style';
import '@/assets/pdf/resume.pdf';

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
  header.classList.toggle('open');
});
