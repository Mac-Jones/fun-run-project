export const participants = JSON.parse(localStorage.getItem('participants'));

export function addParticipants(participant) {
	const existingParticipants =
		JSON.parse(localStorage.getItem('participants')) || [];

	// const newParticipant = {...participant}

	const highestId =
		existingParticipants.length > 0
			? Math.max(...existingParticipants.map((person) => person.id))
			: 0;

	const newParticipant = { ...participant, id: highestId + 1 };

	const updatedParticipants = [...existingParticipants, newParticipant];

	localStorage.setItem('participants', JSON.stringify(updatedParticipants));
}
