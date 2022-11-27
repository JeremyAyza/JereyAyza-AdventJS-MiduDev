//ADVENTSJS - MIDUDEV
//Challenges #17
//Descripcion del problema:
//https://adventjs.dev/challenges/17

function countPackages(carriers, nombre){
	let paquetes = 0;
	contar(carriers);
	function contar(carriers, nombre) {
		let carrier = carriers.find(e => e[0] == nombre);
		paquetes += carrier[1]
		if (carrier[2].length > 0) {
			carrier[3].forEach(e =>contar(e));
		}
	}
	console.log(paquetes);
	return paquetes
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu')