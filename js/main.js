
const menu = document.querySelector('.mobol--open');
const menuBtn = document.querySelector('.button-mobol');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
  menu.classList.add('mobol');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobol');
});

