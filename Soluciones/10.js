//ADVENTSJS - MIDUDEV
//Challenges #10
//Descripcion del problema:
//https://adventjs.dev/challenges/10
export default function getCoins(change) {
	const coins = [1, 2, 5, 10, 20, 50]
	coins.reverse()
	let vuelto = [0, 0, 0, 0, 0, 0]
	coins.forEach((e, i) => {
		while (change >= e) {
			vuelto[i] += 1
			change -= e
		}

	});
	vuelto.reverse()
	return vuelto

}
