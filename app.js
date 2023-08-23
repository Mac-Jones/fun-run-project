const myName = 'Mac Jones';
const validName = myName.trim().split(' ');
console.log(validName.length <= 2);

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
	const gender = document.getElementById('gender').value; // Make sure to use the correct ID
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
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod porro
				ducimus hic quas, cum obcaecati nam a quia quos quis placeat
				doloremque, assumenda reiciendis fuga fugiat at ad cupiditate vitae
				aperiam odit in saepe molestiae. Quis cum ducimus debitis voluptatibus
				quibusdam, unde, veritatis deleniti soluta odio reprehenderit ipsa
				placeat voluptatem nemo cupiditate illum adipisci fugit, voluptate a
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

	// Update modal content with data
	const modal = document.getElementById('myModal');
	modal.innerHTML = modalContent;
	// modal.style.display = 'block';
	modal.classList.add('modal-active');

	// Clear form fields
	e.target.reset();
	console.log(e.target);
};

function calculateAge(birthday) {
	// ... (rest of the code)
}

function validateForm() {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const address = document.getElementById('address').value;
	const email = document.getElementById('email').value;
	const gender = document.getElementById('gender').value; // Make sure to use the correct ID
	console.log(gender);
	const shirtSize = document.getElementById('shirtSize').value;
	const birthday = document.getElementById('birthday').value;
	const termsCheckbox = document.querySelector(
		'input[name="subscribe"]:checked'
	);

	// 	const myName = 'Mac Jones';
	// const validName = myName.trim().split(' ');
	// console.log(validName.length <= 2);

	const validName = (name) => {
		return name.trim().split(' ').length <= 2;
	};

	// Perform your form validation checks
	if (!validName(firstName)) {
		alert('First Name should have 1 or 2 characters');
		return false;
	}

	if (!validName(lastName)) {
		alert('First Name should have 1 or 2 characters');
		return false;
	}

	if (address === '') {
		alert('Address is required.');
		return false;
	}

	if (email === '') {
		alert('Email Address is required.');
		return false;
	}

	if (gender === '') {
		alert('Gender is required.');
		return false;
	}

	if (shirtSize === '') {
		alert('Shirt Size is required.');
		return false;
	}

	if (birthday === '') {
		alert('Birthday is required.');
		return false;
	}

	if (!termsCheckbox) {
		alert('You must agree to the terms and conditions.');
		return false;
	}

	return true;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
