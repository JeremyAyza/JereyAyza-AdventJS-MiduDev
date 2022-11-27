//ADVENTSJS - MIDUDEV
//Challenges #14
//Descripcion del problema:
//https://adventjs.dev/challenges/14

export default function missingReindeer(ids) {
	ids.sort((a, b) => a - b)
	// console.log(ids);
	for (let i = 0; i <= ids.length - 1; i++) {
		if (i != ids[i]) {
			console.log(i);
			return i
		}
	}
	console.log(ids.at(-1) + 1);
	return ids.at(-1) + 1

}