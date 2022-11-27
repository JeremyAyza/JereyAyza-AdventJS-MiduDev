//ADVENTSJS - MIDUDEV
//Challenges #1
//Descripcion del problema:
//https://adventjs.dev/challenges/01


function contarOvejas(ovejas) {
  // aquí tu magia
  let ovejasrojas=ovejas.filter(obj=>obj.color=="rojo")
    console.log(ovejasrojas);

    let superOvejas=[]

    ovejasrojas.forEach(obj=>{
        let name=obj.name
        if((name.includes("n") || name.includes("N")) &&( name.includes("a")|| name.includes("A"))){
            superOvejas.push(obj)
            console.log("Esta cumple"+obj);
        }
    })
    return superOvejas
}
