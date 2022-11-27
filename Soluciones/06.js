//ADVENTSJS - MIDUDEV
//Challenges #6
//Descripcion del problema:
//https://adventjs.dev/challenges/06

function sumPairs(numbers, rest) {

	for (let i = 0; i < numbers.length - 1; i++) {
		let x = numbers[i]
		let complemento = rest - x
		for (let j = i + 1; j < numbers.length; j++) {
			if (complemento == numbers[j])
				return [x, complemento]
		}
	}
	return null
}


