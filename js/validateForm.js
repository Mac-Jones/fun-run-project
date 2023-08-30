export function validateForm() {
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

	const validName = (name) => {
		return name.trim().split(' ').length <= 2;
	};

	if (!validName(firstName)) {
		alert('First Name should have 1 or 2 characters');
		return false;
	}

	if (!validName(lastName)) {
		alert('First Name should have 1 or 2 characters');
		return false;
	}

	if (!address) {
		alert('Address is required.');
		return false;
	}

	if (!email) {
		alert('Email Address is required.');
		return false;
	}

	if (!gender) {
		alert('Gender is required.');
		return false;
	}

	if (!shirtSize) {
		alert('Shirt Size is required.');
		return false;
	}

	if (!birthday) {
		alert('Birthday is required.');
		return false;
	}

	if (!termsCheckbox) {
		alert('You must agree to the terms and conditions.');
		return false;
	}

	return true;
}
