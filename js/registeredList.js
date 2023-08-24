export const participants = JSON.parse(
	localStorage.getItem('participants')
) || [
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

export function addParticipants(participant) {
	const existingParticipants =
		JSON.parse(localStorage.getItem('participants')) || [];

	const highestId = Math.max(
		...existingParticipants.map((person) => person.id)
	);

	const newParticipant = { ...participant, id: highestId + 1 };

	const updatedParticipants = [...existingParticipants, newParticipant];

	localStorage.setItem('participants', JSON.stringify(updatedParticipants));
}
