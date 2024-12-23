

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
        var xx = 0;
        var yy = 0;
        var zz=0;
        zezwolenie=true;
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshBasicMaterial({
                color: 0x8888ff,
                side: THREE.DoubleSide,
                wireframe: true,
                transparent: true, 
                opacity: 0.5
            });
        var cube = new THREE.Mesh(geometry, material);

        zatrzymanie = ""
        scene.add(cube);
        $("#start").on("click", function(){
            if(zezwolenie){
                zezwolenie=false;
                var g = select.value
                if(g=="x"){
                    ruch = setInterval(funckja, 50);
                    function funckja(){
                        xx=xx+1;
                    }
                    zatrzymanie = ruch
                }
                else if(g=="y"){
                    ruch = setInterval(funckja, 50);
                    function funckja(){
                        yy=yy+1;
                    }
                    zatrzymanie = ruch
                }
                else if(g=="z"){
                    ruch = setInterval(funckja, 50);
                    function funckja(){
                        zz=zz+1;
                    }
                    zatrzymanie = ruch
                }
            }
            })
            $("#stop").on("click", function(){
                clearInterval(zatrzymanie);
                zezwolenie=true;
                zatrzymanie = ""
            })
        function render() {
            
    
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            //mesh.rotation.y += 0.01;
        
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            cube.position.set(xx,yy,zz)
            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })