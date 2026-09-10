const blurGradient = document.querySelector('.blur-gradient');

const layers = 100;
const maxBlur = 10;
const exponent = 2;

for (let i = layers; i > 0; i--) {
	const element = document.createElement('div');
	const t = (i - 1) / (layers - 1);

	element.style.setProperty('--blur', `${maxBlur * t ** exponent}px`);
	element.style.setProperty('--start', `${(layers - i) / layers * 100}%`);
	element.style.setProperty('--end', `${(layers - i + 1) / layers * 100}%`);

	blurGradient.appendChild(element);
}