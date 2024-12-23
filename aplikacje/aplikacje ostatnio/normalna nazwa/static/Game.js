console.log("wczytano game")
//3d shit
class Game {
    constructor() {
        
    }
    test(){
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
        document.getElementById("loginwindow").style.display="none"
        $("#mainwindow").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

       
        
            var geometry = new THREE.BoxGeometry(10, 10, 10);
            var material = new THREE.MeshBasicMaterial({
                    color: 0x8888ff,
                    side: THREE.DoubleSide,
                    wireframe: true,
                    transparent: true, 
                    opacity: 0.5
                });
            var cube = new THREE.Mesh(geometry, material);
    
            var loader = new THREE.FBXLoader();

            
            loader.load('models/Absol/Absol.FBX', function (object3d) {
                scene.add(object3d);
            });
            //console.log(loader)
            scene.add(cube);

        function render() {
            
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            //mesh.rotation.y += 0.01;
        
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
            requestAnimationFrame(render);
            
            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    }
}