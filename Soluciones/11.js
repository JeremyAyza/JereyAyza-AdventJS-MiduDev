//ADVENTSJS - MIDUDEV
//Challenges #11
//Descripcion del problema:
//https://adventjs.dev/challenges/11


export default function shouldBuyFidelity(veces) {
	let costoXveces = veces * 12;
	let costoWTarjeta;

	const sumaPotencias = function (a, n) {
		return ((1 - Math.pow(a, n + 1)) / (1 - a)) - 1
	}

	costoWTarjeta = 250 + 12 * (sumaPotencias(0.75, veces))

	return costoWTarjeta < costoXveces


	/*
	250
	250$ + (12$ * 0, 75)
	250$ + (12$ * 0, 75) +(12$ * 0, 75 * 0, 75)
	250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75)
	250$ + 12(0.75)+12(0.75*0.75)+12(0.75*0.75*0.75)
	250$ + 12(Math.pow(a,1)+Math.pow(a,2)+Math.pow(a,3))
	suma de potencias
	S=((1-Math.pow(a,n+1))/(1-a))-1
	*/
}