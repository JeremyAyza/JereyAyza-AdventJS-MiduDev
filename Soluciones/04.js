//ADVENTSJS - MIDUDEV
//Challenges #4
//Descripcion del problema:
//https://adventjs.dev/challenges/04

function createXmasTree(h) {
	// ¡Y no olvides también poner los turrones!
	let str = "";
	for (let i = 1; i <= h; i++) {
		let asteriscos = "*".repeat(2 * i - 1);
		let guiones = "_".repeat(h - i)
		str += guiones + asteriscos + guiones + "\n"
	}

	let tronco = "_".repeat(h - 1) + "#" + "_".repeat(h - 1)
	let arbol = str + tronco + "\n" + tronco
	return arbol
}