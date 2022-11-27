
//ADVENTSJS - MIDUDEV
//Challenges #5
//Descripcion del problema:
//https://adventjs.dev/challenges/05

export default function daysToXmas(date) {

	const start = new Date('Dec 25, 2021');
	const end = new Date('Dec 25, 2021 23:59:59')

	// const date=new Date('Dec 28, 2023 20:00:01')

	function trans(a, b) {
		let c = (a - b) / (3600 * 1000 * 24);
		return Math.ceil(c);
	}

	if (date < start) {
		console.log(trans(start, date));
		return trans(start, date);
	}
	else if (date > end) {
		console.log(trans(date, end))
		return -trans(date, end);
	}
	else {
		console.log("es hoy");
		return 0
	}
}