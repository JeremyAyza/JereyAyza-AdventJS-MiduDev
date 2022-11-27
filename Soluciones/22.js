//ADVENTSJS - MIDUDEV
//Challenges #22
//Descripcion del problema:
//https://adventjs.dev/challenges/22


function countDecorations(tree) {
	let decoraciones = 0
	function evaluar(x) {
		if (x!=null && typeof x == "object") {
			const valores=Object.values(x);
			valores.forEach(e=>evaluar(e))
		}
		else if(typeof x=="number") {
			decoraciones+=x
		}
	}
	evaluar(tree)
  return decoraciones
}
