//ADVENTSJS - MIDUDEV
//Challenges #15
//Descripcion del problema:
//https://adventjs.dev/challenges/15

function checkSledJump(heights) {
	const maximo = Math.max(...heights)
	const imax = heights.indexOf(maximo)
	if (heights[0] >= maximo || heights.at(-1) >= maximo) return false
	for (let i = 1; i < heights.length; i++) {
		let actual = heights[i]
		let anterior = heights[i - 1]
		if (i < imax && anterior >= actual) return false
		else if (i > imax && anterior <= actual) return false
	}

	return true

}