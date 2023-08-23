import { validateForm } from './validateForm.js';

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const homeIcon = document.querySelector('.home-icon');
const registrationIcon = document.querySelector('.registration-icon');

const navigationMenu = document.querySelector('.navigation-menu');

// Form functionality
document.addEventListener('DOMContentLoaded', function () {
	const dataForm = document.getElementById('dataForm');
	dataForm.addEventListener('submit', submitForm);
});

const submitForm = (e) => {
	e.preventDefault();

	if (!validateForm()) {
		return;
	}

	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const gender = document.getElementById('gender').value;
	const shirtSize = document.getElementById('shirtSize').value;
	const birthday = document.getElementById('birthday').value;

	const age = calculateAge(birthday);
	const raceCategory = age <= 18 ? 'Junior' : 'Senior';

	const modalContent = `
    <div class="modal-content">
      <div class="close">&times;</div>
      <h2>Congratulations!!</h2>
      <hr />
      <p>You have successfully registered to the event.</p>
			<p>
				Awesome job! 🎉 Your form for the Fun Run event is submitted and confirmed. Get ready to lace up and join the excitement! 🏃‍♂️🏃‍♀️ Your journey towards the finish line starts here. Train well and stay tuned for updates. Your enthusiasm is truly commendable – see you on race day! 🥳🏁 #FunRunSuccess voluptatem nemo cupiditate illum adipisci fugit, voluptate a
				magni obcaecati vel doloremque? Recusandae quam eum quasi? Molestiae
				soluta necessitatibus possimus qui magni non, doloremque nesciunt! Qui
				quaerat non sunt, impedit, alias, aut labore magnam fuga facere id
				cupiditate expedita voluptatem earum.</p>
      <div class="modal-data">	
        <div class="title description">
          <span class="participants">Participant/s</span>
          <span class="data-registered">${new Date()}</span>
        </div>
        <table id="dataTable" class="dataTable">
          <thead>
            <tr>
              <th>Participant Name</th>
              <th>Race Category</th>
              <th>Race Segment</th>
              <th>Race Shirt Size</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            <tr>
              <td>${firstName} ${lastName}</td>
              <td>${raceCategory}</td>
              <td>${gender}</td>
              <td>${shirtSize}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

	const modal = document.getElementById('myModal');
	modal.innerHTML = modalContent;
	modal.classList.add('modal-active');

	e.target.reset();
};

function calculateAge(birthday) {
	const birthDate = new Date(birthday);
	const currentDate = new Date();

	const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
	const monthDiff = currentDate.getMonth() - birthDate.getMonth();
	const dayDiff = currentDate.getDate() - birthDate.getDate();

	// Adjust age based on month and day difference
	let age = yearDiff;
	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		age--;
	}

	return age;
}

// For the Icon
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

// ================= Smooth scroll ============
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
navLinks.forEach((link) => {
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
