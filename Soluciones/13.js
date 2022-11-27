//ADVENTSJS - MIDUDEV
//Challenges #13
//Descripcion del problema:
//https://adventjs.dev/challenges/13


export default function wrapGifts(gifts) {
	if (gifts.length == 0) return []
	const numTapa = gifts[0].length
	const tapa = "*".repeat(numTapa) + "**"
	const resultado = gifts.map(e =>"*" + e + "*");
	resultado.push(tapa)
	resultado.unshift(tapa)
	return resultado
}