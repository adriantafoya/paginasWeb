// Este codigo es para el menu en el caso de telefonos celulares, en las computadoras no aplica
const BTN_MENU = document.querySelector('#menu');
const MENU = document.querySelector('.menu__lista');
const CELDA_DEPLEGABLE = document.querySelector('#menu__celda-origen');
const ORIGEN_SUB_MENU = document.querySelector('#origen-sub-menu');
const SUB_MENU = document.querySelector('.sub-menu');

BTN_MENU.addEventListener('click', () => {
    BTN_MENU.classList.toggle('btn-menu');
    MENU.classList.toggle('desplegar-menu');
    CELDA_DEPLEGABLE.classList.remove('menu__celda--desplegable');
});

CELDA_DEPLEGABLE.addEventListener('click', () => {
	ORIGEN_SUB_MENU.classList.toggle('btn-menu');
    SUB_MENU.classList.toggle('desplegar-sub-menu');
});
