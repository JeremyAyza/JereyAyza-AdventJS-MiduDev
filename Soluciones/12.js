//ADVENTSJS - MIDUDEV
//Challenges #12
//Descripcion del problema:
//https://adventjs.dev/challenges/12

function getMinJump(obstacles) {
	obstacles.sort((a, b) => a - b)

	for (let i = 2; i <= 10; i++) {
		if (obstacles.every(x => x % i != 0)) return i
	}
}

