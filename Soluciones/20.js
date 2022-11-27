//ADVENTSJS - MIDUDEV
//Challenges #20
//Descripcion del problema:
//https://adventjs.dev/challenges/20

function pangram(frase) {
	let abcMin = "abcdefghijklmnopqrstuvwxyzñ";
	let vocales = "aeiouAEIOU"
	let tildados = "áéíóúÁÉÍÓÚ"
	let dieresis = "äëïöüÄËÏÖÜ"
	const verificar = (l) => frase.includes(l);

	for (let i = 0; i < abcMin.length; i++) {
		let letra = abcMin[i];
		if (verificar(letra) || verificar(letra.toUpperCase())) {
			continue
		}
		else if (vocales.includes(letra)) {
			let ix = vocales.indexOf(letra);
			if (verificar(tildados[ix]) || verificar(dieresis[ix])) {
				continue
			}
		}
		else {
			return false
		}
	}
	return true
}

console.log(
	pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'),
	pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'),

	pangram('Esto es una frase larga pero no tiene todas las letras del abecedario'),
	pangram('De la a a la z, nos faltan letras')
);