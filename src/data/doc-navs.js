const func = () => {
	return [
		{
			title: "Dashboard",
			to: "/doc/overview",
			htmlBefore: '<i class="material-icons">edit</i>',
			htmlAfter: "",
		},
		{
			title: "Appointments",
			htmlBefore: '<i class="material-icons">vertical_split</i>',
			to: "/doc/appointments",
		},
		{
			title: "My Schedules",
			htmlBefore: '<i class="material-icons">note_add</i>',
			to: "/doc/schedules",
		},
		{
			title: "Closed Days",
			htmlBefore: '<i class="material-icons">close</i>',
			to: "/doc/closed-days",
		},
		{
			title: "Special Days",
			htmlBefore: '<i class="material-icons">star</i>',
			to: "/doc/special-days",
		},
	];
};
export default func;
