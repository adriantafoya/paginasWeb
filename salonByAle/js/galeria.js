document.addEventListener('DOMContentLoaded', () => {
	const LIGHT_BOX = document.querySelector('.lightbox');
	const IMAGENES = document.querySelectorAll('.galeria-section__grid-item');
	const IMAGEN_LIGHT_BOX = document.querySelector('.lightbox__img');

	IMAGENES.forEach(imagen => {
		imagen.addEventListener('click', () => {
			mostrarEnLighBox(imagen.getAttribute('src'), imagen.getAttribute('alt'));
		});
	});

	const mostrarEnLighBox = (src, alt) => {
		LIGHT_BOX.classList.toggle('lightbox--activo');
		IMAGEN_LIGHT_BOX.src = src;
		IMAGEN_LIGHT_BOX.alt = alt;
	}

	LIGHT_BOX.addEventListener('click', () => {
		LIGHT_BOX.classList.toggle('lightbox--activo');
	});
});