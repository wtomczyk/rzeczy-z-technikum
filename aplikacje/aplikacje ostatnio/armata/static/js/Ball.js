class Ball {
    constructor(player){
        this.container = new THREE.Object3D()
        this.player = player
        this.fire = false
		this.init()
    }
    init() {
        var geometry = new THREE.SphereGeometry(40, 30, 30);
        var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
        this.kula = new THREE.Mesh( geometry, material );
        this.container.add(this.kula);
		this.kula.geometry.translate(0, 100, 0)
        this.container.position.y = 250
        this.container.position.x = this.player * 350
    }
    getBall() {
        return this.container
    }
}