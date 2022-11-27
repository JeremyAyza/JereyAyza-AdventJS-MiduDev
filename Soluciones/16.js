//ADVENTSJS - MIDUDEV
//Challenges #16
//Descripcion del problema:
//https://adventjs.dev/challenges/16

function decodeNumber(cadena) {
	const traductor = {
		".": 1,
		",": 5,
		":": 10,
		";": 50,
		"!": 100
	}
	let acumulador = 0;
	for (let i = 0; i < cadena.length; i++) {
		let actual = traductor[cadena[i]]
		let siguiente = traductor[cadena[i + 1]]
		if (siguiente && actual < siguiente) {
			acumulador -= actual
		}
		else {
			acumulador += actual
		}
	}
	return acumulador;

}

