import { participants } from './registeredList.js';

$(document).ready(function () {
	console.log(participants);

	$('.dashboard').DataTable({
		data: participants,
		columns: [
			{ data: 'id' },
			{ data: 'name' },
			{ data: 'age' },
			{ data: 'gender' },
			{ data: 'address' },
			{ data: 'email' },
			{ data: 'contactNumber' },
			{ data: 'date' },
		],
	});
});

const closeList = document.querySelector('.close-registration');
closeList.addEventListener('click', function () {
	window.location.href = '../index.html';
});
