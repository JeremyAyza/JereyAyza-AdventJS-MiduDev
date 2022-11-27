//ADVENTSJS - MIDUDEV
//Challenges #23
//Descripcion del problema:
//https://adventjs.dev/challenges/23

function canReconfigure(from, to) {
	if (from.length != to.length) return false;
	let nuevoFrom = ""
	let nuevoTo = "";
	for (let i = 0; i < from.length; i++) {
		if (nuevoTo.includes(to[i]) || nuevoFrom.includes(from[i])) {
			tIndice = to.indexOf(to[i])
			fIndice = from.indexOf(from[i])
			if (from[i] != from[tIndice]) return false;
			if (to[i] != to[fIndice]) return false;
		}
		else {
			nuevoTo += to[i]
			nuevoFrom += from[i]
		}
	}
	return true
}
