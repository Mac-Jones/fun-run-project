import { validateForm } from './js/validateForm.js';
import { addParticipants } from './js/registeredList.js';

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const homeIcon = document.querySelector('.home-icon');
const registrationIcon = document.querySelector('.registration-icon');

const navigationMenu = document.querySelector('.navigation-menu');

console.log(JSON.parse(localStorage.getItem('participants')));
// localStorage.removeItem('participants');

//
const initialParticipants = [
	{
		id: 1,
		name: 'Glydell Soriano',
		age: 25,
		gender: 'Female',
		address: 'Brgy: Barat, Umingan, Pangasinan',
		email: 'glydellsoriano@gmail.com',
		contactNumber: '09555577788',
		date: new Date(),
	},
	{
		id: 2,
		name: 'Mac Jones Soriano',
		age: 22,
		gender: 'Male',
		address: 'Brgy: Barat, Umingan, Pangasinan',
		email: 'sorianomacjones@gmail.com',
		contactNumber: '09157904885',
		date: new Date(),
	},
];

if (!localStorage.getItem('participants')) {
	localStorage.setItem('participants', JSON.stringify(initialParticipants));
}
//
// Form functionality
document.addEventListener('DOMContentLoaded', function () {
	const dataForm = document.getElementById('dataForm');
	dataForm.addEventListener('submit', submitForm);
});

const submitForm = (e) => {
	e.preventDefault();

	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const gender = document.getElementById('gender').value;
	const shirtSize = document.getElementById('shirtSize').value;
	const birthday = document.getElementById('birthday').value;
	const address = document.getElementById('address').value;
	const email = document.getElementById('email').value;
	const contactNumber = document.getElementById('contactNumber').value;

	const age = calculateAge(birthday);
	const raceCategory = age <= 18 ? 'Junior' : 'Senior';

	if (!validateForm()) {
		return;
	}

	console.log(address, gender, email);

	console.log(`${firstName} ${lastName}`);
	console.log(age);

	const participant = {
		name: `${firstName} ${lastName}`,
		age,
		gender,
		address,
		email,
		contactNumber,
		date: new Date(),
	};

	addParticipants(participant);

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
			<button id="dashboardButton" class="dashboardButton">
				Go to Dashboard
			</button>
    </div>
  `;

	const modal = document.getElementById('myModal');

	modal.innerHTML = modalContent;
	modal.classList.toggle('modal-active');

	// Close btn for modal
	const closeBtn = document.querySelector('.close');
	closeBtn.addEventListener('click', () => {
		modal.classList.toggle('modal-active');
	});

	// Handle dashboard button click
	const dashboardButton = document.getElementById('dashboardButton');
	dashboardButton.addEventListener('click', function () {
		modal.classList.toggle('modal-active');

		window.location.href = 'pages/dashboard.html';
	});

	e.target.reset();
};

// NOT WORK
// $(document).ready(function () {
// 	$('.display').DataTable({
// 		ajax: './js/data.json',
// 		columns: [
// 			{ participants: 'id' },
// 			{ participants: 'firstName' },
// 			{ participants: 'lastName' },
// 			{ participants: 'gender' },
// 			{ participants: 'email' },
// 			{ participants: 'address' },
// 			{ participants: 'contactNumber' },
// 		],
// 	});
// });

// OBJECTS WITH DATA PROPERTY LIKE JSON =============
// $(document).ready(function () {
// 	$('.display').DataTable({
// 		ajax: {
// 			url: './js/data.json',
// 			dataSrc: 'participants',
// 		},
// 		columns: [
// 			{ data: 'id' },
// 			{ data: 'firstName' },
// 			{ data: 'lastName' },
// 			{ data: 'gender' },
// 			{ data: 'email' },
// 			{ data: 'address' },
// 			{ data: 'contactNumber' },
// 		],
// 	});
// });

// =============================

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
document
	.querySelector('.registration-btn')
	.addEventListener('click', function () {
		smoothScroll('#registration-section');
	});

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
		const target = this.getAttribute('href');
		smoothScroll(target);

		if (target.startsWith('#')) {
			smoothScroll(target);
		}
	});
});
