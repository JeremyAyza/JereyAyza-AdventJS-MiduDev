//ADVENTSJS - MIDUDEV
//Challenges #9
//Descripcion del problema:
//https://adventjs.dev/challenges/09


export default function groupBy(collection, it) {
	const resultado = {}

	collection.forEach(element => {
		let valor;
		console.log("_____________");
		if (typeof it == "string") {
			valor = element[it]

		}
		else {
			valor = it(element);
		}

		if (resultado[valor] == undefined) {
			resultado[valor] = [];
		}
		resultado[valor].push(element);
		console.log(resultado);
	});
	return resultado;
}