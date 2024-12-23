class Net {
	constructor() {}
	move(enemy, alfa, rotation){
		client.emit("move", {
			enemy:enemy,
			alfa:alfa,
			rotation:rotation
		})
	}
	fire(enemy, alfa, rotation){
		client.emit("fire", {
			enemy:enemy,
			alfa:alfa,
			rotation:rotation
		})
	}
}