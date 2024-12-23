$(document).ready(function(){

    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff)
        renderer.setSize(aaa, bbb);
    
        $("#root").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
        var material = new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        
        var geometry = new THREE.PlaneGeometry( 300, 300, 300 );
        var plane = new THREE.Mesh( geometry, material );
        plane.rotateX(Math.PI / 2)
        scene.add( plane );

        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)




        mixer= ""
        aaaa = ""

        var modelMaterial = new THREE.MeshBasicMaterial(
            {
                map: new THREE.TextureLoader().load("mario/mario2.jpg"),
                morphTargets: true // ta własność odpowiada za animację materiału modelu
            });
			var loader = new THREE.GLTFLoader();

			loader.load( 'Absol/Absol.glb', function ( gltf ) {

				scene.add( gltf.scene );

			}, undefined, function ( error ) {

				console.error( error );

			} );
			/*
        var loader = new THREE.JSONLoader();
        loader.load('mario/mario.js', function (geometry) {
                   
            meshModel = new THREE.Mesh(geometry, modelMaterial)
            meshModel.name = "name";
            meshModel.rotation.y = 1; // ustaw obrót modelu
            meshModel.position.y = 24; // ustaw pozycje modelu
            meshModel.scale.set(1,1,1); // ustaw skalę modelu
        
            scene.add(meshModel);
			mixer = new THREE.AnimationMixer(meshModel)
            var box = new THREE.Box3().setFromObject(meshModel);
            console.log(box.getSize().y);

            console.log(geometry.animations)
            for (var i = 0; i < geometry.animations.length; i++) {
                    var button = document.createElement("button")
                    button.innerText = geometry.animations[i].name
                    button.className="button"
                    button.addEventListener("click", function(){
						
                        aaaa = this.innerText
                        
                       
						mixer.uncacheRoot(meshModel)
                        mixer.clipAction(aaaa).play()
                    })

                       // console.log(geometry.animations[i].name);
                       $("#przyciski").append(button)
                    }

            
            //mixer.clipAction("deathc").play()
        });*/
        var clock = new THREE.Clock();
        
        


        var angle=0
        function render() {
            
            var delta = clock.getDelta();
            //console.log(delta) // zobacz czy widać zmieniającą się liczbę w konsoli
            if (mixer) mixer.update(delta)



            camera.position.z = 200 * Math.cos(angle);
            camera.position.x = 200 * Math.sin(angle);
            camera.lookAt(scene.position)
            angle+=0.01


    
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            

            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })