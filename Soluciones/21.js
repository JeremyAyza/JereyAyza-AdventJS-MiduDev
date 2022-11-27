//ADVENTSJS - MIDUDEV
//Challenges #21
//Descripcion del problema:
//https://adventjs.dev/challenges/21

function canCarry(limite, trip) {
	let partida = trip[0][1];
	let meta = trip.at(-1)[2];
	let regalos = 0;
	const pDescargas = trip.map(e => e[2]);
	const pSubidas = trip.map(e => e[1]);
	for (let p = partida; p <= meta; p++) {
		if (pDescargas.includes(p)) {
			const descargado = trip.find(d => d[2] == p)[0]
			regalos -= descargado;
			console.log("p es descarga, regalos dismimuye " + descargado);
		}
		if (pSubidas.includes(p)) {
			const agregado = trip.find(d => d[1] == p)[0]
			regalos += agregado;
			console.log("p es carga, regalos aumenta " + agregado);
		}
		if (regalos > limite) return false
	}
	return true
}

