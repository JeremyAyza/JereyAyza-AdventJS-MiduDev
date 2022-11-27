//ADVENTSJS - MIDUDEV
//Challenges #7
//Descripcion del problema:
//https://adventjs.dev/challenges/07

export default function contains(store, product) {
	// ¡Y no olvides compartir tu solución en redes!
	const palabras = []
	function c(obj) {
		for (const a in obj) {
			if (typeof obj[a] == "object") {
				c(obj[a]);
				console.log("es objeto, seguirá");
			}
			else {
				palabras.push(obj[a]);
				console.log("no es objeto, lo añadirá al array " + palabras);
				continue;
			}
		}
	}
	c(store)

	console.log(palabras);
	let x = palabras.find(y => y == product)

	if (x == undefined) {
		return false
	}
	else {
		return true
	}
}