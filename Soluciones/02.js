//ADVENTSJS - MIDUDEV
//Challenges #2
//Descripcion del problema:
//https://adventjs.dev/challenges/02

export default function listGifts(letter) {
	// ¡Tú puedes!
	letter = letter.trim()
	let array = letter.split(" ");
	array = array.map(element => element.trim());
	let regalos = {}
	array.forEach((value, index) => {
		if (value[0] == "_") {
			return
		}
		else if (array.indexOf(value) === index) {
			regalos[value] = 1;
		}
		else {
			regalos[value]++;
		}
	})
	return regalos;

}