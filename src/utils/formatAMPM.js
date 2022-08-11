export const formatAMPM = (hours, minutes) => {
	const ampm = hours >= 12 ? "pm" : "am";

	let newHour = hours % 12;
	newHour = newHour || 12;

	let newMinutes = minutes < 10 ? `0${minutes}` : minutes;

	const strTime = `${newHour}:${newMinutes} ${ampm}`;

	return strTime;
};
