//ADVENTSJS - MIDUDEV
//Challenges #9
//Descripcion del problema:
//https://adventjs.dev/challenges/09

export default function maxProfit(price) {

	let max = 0;
	price.forEach((x, indexX) => {

		price.forEach((y, indexY) => {
			if (indexY > indexX) {
				if (y - x > max) {
					max = y - x

				}
			}
		});
	});
	console.log("el maximo es: " + max);
	if (max > 0) {
		console.log(max);
		return max;
	}
	else {
		console.log("retornará -1");
		return -1;
	}
}