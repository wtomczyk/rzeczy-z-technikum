

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
    
        renderer.setSize(aaa, bbb);
    
        $("#root").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        var geometry = new THREE.BoxGeometry(100, 100, 100);
        var material = new THREE.MeshBasicMaterial({
                color: 0xffff00,
                side: THREE.DoubleSide,
                wireframe: true,
                transparent: true, 
                opacity: 0.5
            });
        var cube = new THREE.Mesh(geometry, material);

        var geometry2 = new THREE.CylinderGeometry( 70, 70, 100, 100 );
        var material2 = new THREE.MeshBasicMaterial( {
            color: 0x0000ff,
                side: THREE.DoubleSide,
                wireframe: true,
                transparent: true, 
                opacity: 0.5
        });
        var cylinder = new THREE.Mesh( geometry2, material2 );
        
        var geometry3 = new THREE.CylinderGeometry( 1, 70, 100, 100 );
        var material3 = new THREE.MeshBasicMaterial( {
            color: 0x00ffff,
                side: THREE.DoubleSide,
                wireframe: true,
                transparent: true, 
                opacity: 0.5
        });
        var stozek = new THREE.Mesh( geometry3, material3 );

        var geometry4 = new THREE.TorusBufferGeometry( 50, 10, 10, 300 );
        var material4 = new THREE.MeshBasicMaterial( { 
            side: THREE.DoubleSide,
            wireframe: true,
                transparent: true, 
                opacity: 0.5
        } );
        var torus = new THREE.Mesh( geometry4, material4 );

        function render() {
    
            $("#a").on("click", function(){
                scene.add(cube);
            })

            $("#aa").on("click", function(){
                scene.add( cylinder );
            })

            $("#aaa").on("click", function(){
                scene.add( stozek );
            })

            $("#aaaa").on("click", function(){
                scene.add( torus );
            })
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            //mesh.rotation.y += 0.01;
        
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            
            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })