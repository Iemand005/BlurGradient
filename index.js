const blurGradient = document.querySelector('.blur-gradient');

for (let i = 10; i > 0; i--) {
	const element = document.createElement('div');

	element.style.setProperty('--blur', `${i}px`);
	element.style.setProperty('--start', `${(10 - i) * 10}%`);
	element.style.setProperty('--end', `${(11 - i) * 10}%`);

	blurGradient.appendChild(element);
}