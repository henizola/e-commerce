import jsPDF from "jspdf";
import "jspdf-autotable";
export const exportPDF = (state) => {
	console.log(state, "here to download");

	const unit = "pt";
	const size = "A4"; // Use A1, A2, A3 or A4
	const orientation = "portrait"; // portrait or landscape

	const marginLeft = 40;
	const doc = new jsPDF(orientation, unit, size);

	doc.setFontSize(15);

	const title = "Patients List";
	const headers = [["Full Name", "Date", "Time", "Reason"]];

	const data = state.map((elt) => [
		elt.patientFirstName,
		elt.appointmentDate.substring(0, 10),
		`${elt.appointmentTime.hour} : ${elt.appointmentTime.minute}`,
		elt.reasonForVisit,
	]);

	let content = {
		startY: 50,
		head: headers,
		body: data,
	};

	doc.text(title, marginLeft, 40);
	doc.autoTable(content);
	doc.save("Patient List.pdf");
};
