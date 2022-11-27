//ADVENTSJS - MIDUDEV
//Challenges #18
//Descripcion del problema:
//https://adventjs.dev/challenges/18

function fixFiles(files) {
	const cantidad = {};
	const newArray = files.map(element => {
		cantidad[element] = cantidad[element] + 1 || 1
		console.log(cantidad);
		return cantidad[element] == 1 ? `${element}` : `${element}(${cantidad[element] - 1})`
	});
	console.log(newArray);
	return newArray
}