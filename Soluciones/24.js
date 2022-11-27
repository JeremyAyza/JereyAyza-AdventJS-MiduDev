//ADVENTSJS - MIDUDEV
//Challenges #24
//Descripcion del problema:
//https://adventjs.dev/challenges/24


//Hay un error con la página, te aprueba con solo evaluar una rama
// o con solo evaluar la misma cantidad objetos,
// más informacion en el discord de midudev

function checkIsSameTree(treeA, treeB) {
	function evaluar(X,Y) {
		if(typeof X != typeof Y) return false
		else if(X!=null && typeof X =="object"){
			const b1=evaluar(X.value,Y.value);
			const b2=evaluar(X.left,Y.left) && evaluar(X.right,Y.right);
			return b1 && b2
		}
		return X==Y
	}

	evaluar(treeA,treeB)
}


