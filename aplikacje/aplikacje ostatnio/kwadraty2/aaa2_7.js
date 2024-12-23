

$(document).ready(function(){

    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    var zezwolenie = false
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
    
        renderer.setSize(aaa, bbb);
    
        $("#root").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
        var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D
        
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        var geometry = new THREE.BoxGeometry(30, 30, 30);
        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, 
            map: new THREE.TextureLoader().load('mats/tekstura.jpg') ,
            transparent: true, 
            opacity: 0.8,
            });
        var cube = new THREE.Mesh(geometry, material);

        
        scene.add(cube);

        $(document).mousedown(function (event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, camera);
            var intersects = raycaster.intersectObjects(scene.children);
            console.log(intersects.length)
            if (intersects.length > 0) {

                //zerowy w tablicy czyli najbliższy kamery obiekt to ten, którego potrzebujemy:
        
                console.log(intersects[0].object); 
                zezwolenie = true
              
        }
        })

        function render() {
            if(zezwolenie){
                cube.rotation.y += 1;
            }
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            //
        
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            //cube.rotation.y += 0.01;

            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })