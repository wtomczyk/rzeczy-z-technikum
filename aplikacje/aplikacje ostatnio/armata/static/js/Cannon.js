class Cannon {
    constructor(player){
        this.container = new THREE.Object3D()
        this.player = player
        this.container.name = "cannon"
        this.RL = 0
        this.UD = 0
        this.init()
    }
    init() {
        //lufa
        var geometry = new THREE.CylinderGeometry(50, 50, 300, 20);
        if(this.player%2 == 1) var material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
        else var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.lufa = new THREE.Mesh(geometry, material);
        this.container.add(this.lufa)

        var geometry = new THREE.CylinderGeometry(51, 51, 300, 20, 8);
        var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, wireframe: true} );
        this.lufaS = new THREE.Mesh(geometry, material);
        this.container.add(this.lufaS)

        //koła
        var geometry = new THREE.CylinderGeometry(100, 100, 50, 20);
        if(this.player%2 == 1) var material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
        else var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.kołoL = new THREE.Mesh(geometry, material)
        this.kołoL.rotation.x = Math.PI/2
        this.kołoL.rotation.z = Math.PI/2
        this.kołoL.position.x = 75
        this.container.add(this.kołoL)

        this.kołoP = new THREE.Mesh(geometry, material)
        this.kołoP.rotation.x = Math.PI/2
        this.kołoP.rotation.z = Math.PI/2
        this.kołoP.position.x = -75
        this.container.add(this.kołoP)

        var geometry = new THREE.CylinderGeometry(101, 101, 50, 20, 2);
        var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide, wireframe: true} );
        this.kołoLS = new THREE.Mesh(geometry, material)
        this.kołoLS.rotation.x = Math.PI/2
        this.kołoLS.rotation.z = Math.PI/2
        this.kołoLS.position.x = 75
        this.container.add(this.kołoLS)

        this.kołoPS = new THREE.Mesh(geometry, material)
        this.kołoPS.rotation.x = Math.PI/2
        this.kołoPS.rotation.z = Math.PI/2
        this.kołoPS.position.x = -75
        this.container.add(this.kołoPS)

        this.lufa.geometry.translate(0, 100, 0)
        this.lufaS.geometry.translate(0, 100, 0)
        this.container.position.y = 100
        this.container.position.x = this.player * 350
    }
    getCannon() {
        return this.container
    }
	
	alfa(ball, alfa, rotation){
		this.lufa.rotation.x = alfa
		this.lufaS.rotation.x = alfa
		ball.getBall().position.x = this.container.position.x + 250 * Math.sin( alfa ) * Math.sin( rotation )
		ball.getBall().position.y = 250 * Math.cos( alfa )
		ball.getBall().position.z = 250 * Math.sin( alfa ) * Math.cos( rotation )
	}
	rotacja(ball, alfa, rotation){
		this.container.rotation.y = rotation
		ball.getBall().position.x = this.container.position.x + 250 * Math.sin( alfa ) * Math.sin( rotation )
		ball.getBall().position.z = 250 * Math.sin( alfa ) * Math.cos( rotation )
	}
	strzał(ball, cannon, alfa, rotation){
		var time = new Date()
		time = time.getTime()
		var x = ball.getBall().position.x
		var y = ball.getBall().position.y
		var z = ball.getBall().position.z
		var speed = 200
		var lot = setInterval(function(){
			var now = new Date()
			var t = (now - time) / 100
			var x100 = cannon.lufa.getWorldDirection(new THREE.Vector3( 1, 1, 1 )).x / Math.sin(Math.abs(Math.PI/2 - alfa))
			var z100 = cannon.lufa.getWorldDirection(new THREE.Vector3( 1, 1, 1 )).z / Math.sin(Math.abs(Math.PI/2 - alfa))
			ball.getBall().position.x = x + x100 * speed * t * Math.cos( Math.abs(Math.PI/2 - alfa) )
			ball.getBall().position.y = y + speed * t * Math.sin( Math.abs(Math.PI/2 - alfa) ) - ((9.81 * t * t) / 2)
			ball.getBall().position.z = z + z100 * speed * t * Math.cos( Math.abs(Math.PI/2 - alfa) )
			if(ball.getBall().position.y + 60 < 0){
				clearInterval(lot)
				ball.getBall().position.x = cannon.getCannon().position.x + 250 * Math.sin( alfa ) * Math.sin( rotation )
				ball.getBall().position.y = 250 * Math.cos( alfa )
                ball.getBall().position.z = 250 * Math.sin( alfa ) * Math.cos( rotation )
                ball.fire = false
			}
		})
	}
}