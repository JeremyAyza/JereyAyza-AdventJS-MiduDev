//ADVENTSJS - MIDUDEV
//Challenges #25
//Descripcion del problema:
//https://adventjs.dev/challenges/25

function canMouseEat(direction, room) {
	let y = room.findIndex(a => a.includes("m"))
	let x = room[y].indexOf("m")
	console.log(y, x);

	if (direction == "up" && y >= 1) y -= 1
	else if (direction == "down" && y < room.length - 1) y += 1
	else if (direction == "right" && x < room[y].length - 1) x += 1
	else if (direction == "left" && x >= 1) x -= 1
	else return false

	console.log(room[y][x] == "*");
	return room[y][x] == "*"

}




















