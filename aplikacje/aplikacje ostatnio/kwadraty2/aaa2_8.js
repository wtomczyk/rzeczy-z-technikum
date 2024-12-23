
$(document).ready(function(){
    var angle = 120
    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    var zezwolenie = false
    var góra = false;
    var dół = false;
    var lewo=false;
    var prawo=false;
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
        var tablica=[]
        var globalnazmienna
        
        tablica[0]={x:30,y:0,z:0}
        tablica[1]={x:30,y:30,z:0}
        tablica[2]={x:30,y:60,z:0}
        tablica[3]={x:30,y:0,z:30}
        tablica[4]={x:30,y:0,z:60}
        tablica[0]={x:60,y:60,z:0}
        camera.position.z = 200 * Math.cos(angle);
        camera.position.x = 200 * Math.sin(angle);
        camera.position.y=200
        camera.lookAt(scene.position)
        for(a=0;a<tablica.length;a++){
        var geometry = new THREE.BoxGeometry(30, 30, 30);
        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, 
            map: new THREE.TextureLoader().load('mats/tekstura.jpg') ,
            transparent: true, 
            opacity: 0.8,
            });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.set(tablica[a].x,tablica[a].y,tablica[a].z)
        }

        $(document).mousedown(function (event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, camera);
            intersects = raycaster.intersectObjects(scene.children);
            console.log(intersects.length)
            if (intersects.length > 0) {

                //zerowy w tablicy czyli najbliższy kamery obiekt to ten, którego potrzebujemy:
        
                console.log(intersects[0].object); 
                zezwolenie = true
                console.log(zezwolenie)
                globalnazmienna =intersects[0].object
        }
        })

        $(document).keydown(function(e){
                if(e.which==27){
                    zezwolenie=false
                    console.log(zezwolenie)
                }
            })
          
                //intersects[0].object.rotation.y += 1;
                $(document).keydown(function(e){
                if(zezwolenie){    
                    console.log(e.which)
                    if(e.which==38){
                        globalnazmienna.position.z-=30
                    }
                    else if(e.which==40){
                        globalnazmienna.position.z+=30
                    }else if(e.which==39){
                        globalnazmienna.position.x+=30
                    }
                    else if(e.which==37){
                        globalnazmienna.position.x-=30
                    }
                    else if(e.which==16){
                        globalnazmienna.position.y+=30
                    }
                    else if(e.which==17){
                        globalnazmienna.position.y-=30
                    }
                }
            })
            $(document).keydown(function(e){
                if(!zezwolenie){ 
                    if(e.which==38){
                        góra=true
                        console.log(góra)
                    }
                    else if(e.which==40){
                        dół=true
                    }else if(e.which==39){
                        lewo=true
                    }
                    else if(e.which==37){
                        prawo=true
                    }
                }
            })
            $(document).keyup(function(e){
                if(!zezwolenie){ 
                    if(e.which==38){
                        góra=false
                        console.log(góra)
                    }
                    else if(e.which==40){
                        dół=false
                    }else if(e.which==39){
                        lewo=false
                    }
                    else if(e.which==37){
                        prawo=false
                    }
                }
            })   
        function render() {
                if(góra){
                    camera.position.y+=1
                }
                if(dół){
                    camera.position.y-=1
                }
                if(lewo){
                    camera.position.z = 200 * Math.cos(angle);
                    camera.position.x = 200 * Math.sin(angle);
                    angle+=0.03
                }
                if(prawo){
                    camera.position.z = 200 * Math.cos(angle);
                    camera.position.x = 200 * Math.sin(angle);
                    angle-=0.03
            } 
            camera.lookAt(scene.position)
        
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