// =========== Displaying data on simple array
const peoplesArraySample = [
	{
		id: 1,
		name: 'Mac Jones Soriano',
		age: 22,
		gender: 'male',
		address: 'Brgy: Barat, Umingan, Pangasinan',
		email: 'sorianomacjones@gmail.com',
		contactNumber: '09157904885',
		date: '***Thu Aug 24 2023 10:43:09 GMT+0800 (Philippine Standard Time)',
	},
	{
		id: 2,
		name: 'Princess Mendoza',
		age: 21,
		gender: 'male',
		address: 'Brgy: Barat, Umingan, Pangasinan',
		email: 'sorianomacjones@gmail.com',
		contactNumber: '09157904885',
		date: '***Thu Aug 24 2023 10:43:09 GMT+0800 (Philippine Standard Time)',
	},
	{
		id: 3,
		name: 'Glydell Soriano',
		age: 25,
		gender: 'male',
		address: 'Brgy: Barat, Umingan, Pangasinan',
		email: 'sorianomacjones@gmail.com',
		contactNumber: '09157904885',
		date: '***Thu Aug 24 2023 10:43:09 GMT+0800 (Philippine Standard Time)',
	},
];

$(document).ready(function () {
	$('.display').DataTable({
		data: peoplesArraySample,
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
// ===========
