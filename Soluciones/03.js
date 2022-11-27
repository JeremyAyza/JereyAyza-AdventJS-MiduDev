//ADVENTSJS - MIDUDEV
//Challenges #3
//Descripcion del problema:
//https://adventjs.dev/challenges/03

function isValid(letter) {
	// ¡No dejes que el Grinch gane!
	const tachadas = ["}", "{", "[", "]", "()"]
	for (let i = 0; i < tachadas.length; i++) {
		if (letter.includes(tachadas[i])) {
			return false
		}
	}
	const palabras = letter.split(" ")
	for (let i = 0; i < palabras.length; i++) {
		const p = palabras[i]
		if (p.includes("(") || p.includes(")")) {
			if (p[0] != "(" || p.substr(-1) != ")") return false
		}
	}
	return true


}