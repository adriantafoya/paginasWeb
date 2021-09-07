const bottonMenu = document.querySelector('.nav__button-menu');
const menu = document.querySelector('.nav__menu');

bottonMenu.addEventListener('click', () => {
	menu.classList.toggle('activado');
});