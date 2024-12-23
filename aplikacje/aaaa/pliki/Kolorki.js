export default {
	kolory: [
		'red', 
		'magenta', 
		'green', 
		'cyan', 
		'lightblue', 
		'yellow', 
		'black'
	],
	get losowatablica() {
		return [this.kolory[Math.floor(Math.random() * 7)], this.kolory[Math.floor(Math.random() * 7)], this.kolory[Math.floor(Math.random() * 7)]]
	},
}
