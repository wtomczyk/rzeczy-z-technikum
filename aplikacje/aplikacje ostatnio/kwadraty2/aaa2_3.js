

$(document).ready(function(){
    var zezwolenie = false
    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    licznik=0;
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000)
        renderer.setSize(aaa, bbb);
    
        $("#root").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 0;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, 
            map: new THREE.TextureLoader().load('mats/tekstura.jpg') ,
            transparent: true, 
            opacity: 0.8,
            });
        var cube = new THREE.Mesh(geometry, material);

        
        scene.add(cube);
        $("#button").on("click", function(){
            zezwolenie = true
        })
        
        function render() {
            if(zezwolenie){
                camera.position.x--
                camera.position.z--
                camera.lookAt(scene.position)
                
            }
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            //mesh.rotation.y += 0.01;
        
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            
            cube.rotation.y += 1;
            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })