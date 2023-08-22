const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const homeIcon = document.querySelector('.home-icon');
const registrationIcon = document.querySelector('.registration-icon');

const navigationMenu = document.querySelector('.navigation-menu');

menuIcon.addEventListener('click', () => {
	navigationMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
	navigationMenu.classList.toggle('active');
});

homeIcon.addEventListener('click', () => {
	navigationMenu.classList.toggle('active');
});

registrationIcon.addEventListener('click', () => {
	navigationMenu.classList.toggle('active');
});

// =================
function smoothScroll(target) {
	const element = document.querySelector(target);
	if (element) {
		window.scrollTo({
			top: element.offsetTop,
			behavior: 'smooth',
		});
	}
}

const navLinks = document.querySelectorAll('ul li a');
console.log(navLinks);
navLinks.forEach((link) => {
	console.log(link);
	link.addEventListener('click', function (event) {
		event.preventDefault();
		console.log(this.getAttribute('href'));
		const target = this.getAttribute('href');
		smoothScroll(target);

		if (target.startsWith('#')) {
			smoothScroll(target);
		}
	});
});
