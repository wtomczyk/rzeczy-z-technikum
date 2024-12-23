class Main {
    //3D
    constructor(player, enemy){
        this.player = player
        this.enemy = enemy
        this.init()
    }
    init(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            45,
            $(window).width()/$(window).height(),
            0.1,
            10000
        );
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff);
        renderer.setSize($(window).width(), $(window).height());
        $("#root").append( renderer.domElement );
        camera.position.set(500, 700, -2000);
        camera.lookAt(scene.position);
        var axes = new THREE.AxesHelper(5000);
        axes.position.y = 10
        scene.add(axes)

        //grid
        var geometry = new THREE.PlaneGeometry(10000, 10000, 100, 100);
        var material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, side: THREE.DoubleSide, wireframe: true} );
        var plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = Math.PI / 2
        scene.add(plane)

        //ściana
        var geometry = new THREE.BoxGeometry(100, 100, 100);
        var material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                side: THREE.DoubleSide,
                wireframe: false,
        })
        var materialS = new THREE.MeshBasicMaterial({
                color: 0x000000,
                side: THREE.DoubleSide,
                wireframe: true,
        })

		var siatki = []
		var klocki = []
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 4; j++){
                var cube = new THREE.Mesh(geometry, material)
                cube.position.set(i * 100 + 325, j * 100 + 50, 2000)
                cube.name = "Klocek" + i + j
				klocki.push(cube)
                scene.add(cube)

                var cubeS = new THREE.Mesh(geometry, materialS)
				cubeS.name = "Siatka" + i + j
                cubeS.position.set(i * 100 + 325, j * 100 + 50, 2000)
				siatki.push(cubeS)
                scene.add(cubeS)
            }
        }
        
        //armata
        var cannon = new Cannon(this.player)
        scene.add(cannon.getCannon())
		var ball = new Ball(this.player)
        scene.add(ball.getBall())
        if(this.enemy == true){
			if(this.player%2 == 1){
				var enemyCannon = new Cannon(this.player + 1)
				scene.add(enemyCannon.getCannon())
				var enemyBall = new Ball(this.player + 1)
				scene.add(enemyBall.getBall())
			}
			else{
				var enemyCannon = new Cannon(this.player - 1)
				scene.add(enemyCannon.getCannon())
				var enemyBall = new Ball(this.player - 1)
				scene.add(enemyBall.getBall())
			}
			//odbiór ruchu i strzału
			client.on("move", function (data) {
				enemyCannon.alfa(enemyBall, data.alfa, data.rotation)
				enemyCannon.rotacja(enemyBall, data.alfa, data.rotation)
			})
			client.on("fire", function (data) {
                enemyCannon.strzał(enemyBall, enemyCannon, data.alfa, data.rotation)
			})
        }
		
        //sterowanie
		var cel
		var trafiony = false
        var raycaster = new THREE.Raycaster()
        var mouseVector = new THREE.Vector2()
        $(document).mousedown(function (event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1
            raycaster.setFromCamera(mouseVector, camera)
            var intersects = raycaster.intersectObjects(scene.children, true)
            if(intersects.length > 0){
                if(intersects[0].object.parent.name == "cannon"){
                    intersects[0].object.parent.children[0].material.color = {r:1,g:0,b:0}
                    //ruszanie armatką
                    $(document).mousemove(function (event) {
                        var RL = -($(window).width() / 2 -  event.clientX) / 200
                        var UD =  ($(window).height() / 2 -  event.clientY) / 100
                        if(RL < Math.PI / 3 && RL > -Math.PI / 3) cannon.RL = RL
                        if(UD < Math.PI / 2 && UD > 0) cannon.UD = UD
                        cannon.rotacja(ball, cannon.UD, cannon.RL)
                        cannon.alfa(ball, cannon.UD, cannon.RL)
                        net.move(client.id, cannon.UD, cannon.RL)
                    })

                    $(document).mouseup(function (event) {
                        if(main.player % 2 == 1) intersects[0].object.parent.children[0].material.color = {r:0,g:0,b:1}
                        else intersects[0].object.parent.children[0].material.color = {r:1,g:1,b:0}
                        $(document).off("mousemove")
                    })
                }
                else if(intersects[0].object.name.slice(0,6) == "Klocek") zderzenie(true, intersects[0].object)
            }
        })

		$("#strzał").on("click", function(){ 
            ball.fire = true
			cannon.strzał(ball, cannon, cannon.UD,  cannon.RL)
			net.fire(client.id, cannon.UD,  cannon.RL)
			var lot = setInterval(function(){
				if(ball.getBall().position.z > 1910){
					clearInterval(lot)
					zderzenie(false)
				}
			})
		})
		
		//zderzenie
		function zderzenie(click, object){
			var ustrzelony = false
			if(click == true){
				cel = object
				ustrzelony = true
			}
			else{
				for(var i in klocki){
					if( klocki[i] != undefined && Math.abs(klocki[i].name[6] * 100 + 325 - ball.getBall().position.x) < 50 && Math.abs(klocki[i].name[7] * 100 - ball.getBall().position.y) < 50 ){
						cel = klocki[i]
						ustrzelony = true
						break
					}
				}
			}
			if(ustrzelony == true){
				for(var i in klocki){
					if(cel == klocki[i]){
						var name = "Siatka" + cel.name.slice(6, cel.name.length)
						for(var i in siatki){
							if(siatki[i] != undefined && siatki[i].name == name){
								var siatka = siatki[i]
								break
							}
						}
						klocki[i] = undefined
						siatki[i] = undefined
						break
					}
				}
				var spadające = []
				trafiony = true
				//spadanie
				for(var i in klocki){
					if(klocki[i] != undefined && klocki[i].name[6] == cel.name[6] && parseInt(klocki[i].name[7]) > parseInt(cel.name[7])){
						spadające.push({klocek: klocki[i], siatka: siatki[i], h: klocki[i].position.y})
						klocki[i].name = "Klocek" + klocki[i].name[6] + (parseInt(klocki[i].name[7]) - 1)
						siatki[i].name = "Siatka" + siatki[i].name[6] + (parseInt(siatki[i].name[7]) - 1)
					}
				}
				var spadanie = setInterval(function(){
					for(var i in spadające){
						if(spadające[i].h - 100 != spadające[i].klocek.position.y){
							spadające[i].klocek.position.y -= 1.25
							spadające[i].siatka.position.y = spadające[i].klocek.position.y
						} 
						else clearInterval(spadanie)
					}
				})
				//odrzucenie
				var time = new Date()
				time = time.getTime()
				var z = cel.position.z
				var y = cel.position.y
				var positionBefore = 0
				var rotationAlfa = 0
				var rotationSpeed = 80
				var odrzut = setInterval(function(){
					var now = new Date()
					var t = (now - time) / 100
					if(180 * t - ((6 * t * t) / 2) >= positionBefore){
						cel.position.z = z + 180 * t - ((6 * t * t) / 2)
						cel.position.y = y - ((9.81 * t * t) / 2)
						if(cel.position.y < 50){
							cel.position.y = 50
							rotationAlfa += Math.PI / rotationSpeed
							cel.rotation.x = rotationAlfa
							siatka.rotation.x = rotationAlfa
							rotationSpeed += 0.25
						}
						siatka.position.z = cel.position.z
						siatka.position.y = cel.position.y
						positionBefore = 180 * t - ((6 * t * t) / 2)
					}
					else{
						clearInterval(odrzut)
						cel.rotation.x = Math.PI
						siatka.rotation.x = Math.PI
						trafiony  = false
					}
				})
			}
		}
        //render
        function render() {
			if(trafiony == true){
				camera.position.set(cel.position.x, cel.position.y + 200, cel.position.z - 700)
				camera.lookAt(cel.position.x, cel.position.y, cel.position.z)
				//camera.position.set(350, 1000, 500)
                //camera.lookAt(500, 200, 2000)
			}
            else if(ball.fire == true){
                camera.position.set(ball.getBall().position.x, ball.getBall().position.y + 200, ball.getBall().position.z - 500)
                camera.lookAt(ball.getBall().position.x, ball.getBall().position.y, ball.getBall().position.z)
				//camera.position.set(350, 1000, 500)
                //camera.lookAt(500, 200, 2000)
            }
			else{
                camera.position.set(cannon.getCannon().position.x - cannon.RL * 250, 200, -500)
                camera.lookAt(cannon.getCannon().position.x, cannon.getCannon().position.y, cannon.getCannon().position.z)
				//camera.position.set(350, 1000, 500)
                //camera.lookAt(500, 200, 2000)
                
            }
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
        render();
    }
}