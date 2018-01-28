import Palette from '@bezet/palette';

const myPalette = new Palette({ colors: [
  'rgba(117, 79, 68, 1)',
  'rgba(236, 115, 87, 1)',
  'rgba(225, 206, 122, 1)',
  'rgba(253, 214, 146, 1)',
  'rgba(251, 255, 185, 1)',
] });

const paletteButton = document.querySelector('.color-palette__btn');

paletteButton.addEventListener('click', event => {
  const theBody = document.querySelector('body');
  theBody.classList.toggle('js-active');
});
