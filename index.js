const blurGradient = document.querySelector('.blur-gradient');
const children = blurGradient.children;

for (let i = 0; i < children.length; i++) {
	const start = i / children.length * 100;
	const end = (i + 1) / children.length * 100;

	children[i].style.setProperty('--start', `${start}%`);
	children[i].style.setProperty('--end', `${end}%`);
}