//ADVENTSJS - MIDUDEV
//Challenges #19
//Descripcion del problema:
//https://adventjs.dev/challenges/19

function learn(time, courses) {
	const sumas=[];
	const candidates = [];
	for (let i = 0; i<courses.length; i++) {
		for (let k = i + 1; k < courses.length; k++) {
			const suma=courses[i]+courses[k];
			if(time>=suma){
				sumas.push(suma);
				candidates.push([i,k]);
			}
			
		}
	}	
    
	if(sumas.length==0) return null
	else{
		const iMax=sumas.indexOf(Math.max(...sumas))
		return candidates[iMax]
	}
}
