const blurGradient = document.querySelector('.blur-gradient');

/*
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
	*/

const layers = 10;
const blur = 1;

for (let i = 0; i < layers; i++) {
    const element = document.createElement('div');
    const start = (layers - i - 1) / layers * 100;
    const end = 100;

    element.style.setProperty('--blur', `${blur}px`);
    element.style.setProperty('--start', `${start}%`);
    element.style.setProperty('--end', `${end}%`);

    blurGradient.appendChild(element);
}