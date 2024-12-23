

$(document).ready(function(){

    var aaa = $(document).width()
    var bbb = $(document).height()
    scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        aaa/bbb,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff)
        renderer.setSize(aaa, bbb);
    
        $("#root").append( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var materials = [];
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//bok
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//bok
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//góra
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//dół
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//bok
        materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('mats/tekstura.jpg') }));//bok
        
        var cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);
        cube.position.set(0,5,0)
        var geometry = new THREE.PlaneGeometry( 300, 300, 300 );
        var material = new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
        var plane = new THREE.Mesh( geometry, material );
        plane.rotateX(Math.PI / 2)
        scene.add( plane );

        new THREE.MeshPhongMaterial({
            color: 0xff0000,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load("mats/text1.jpg"),
            
        })
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        var light = new THREE.SpotLight(0xffff00, 10, 500, Math.PI/2);
        light.position.set(50, 10, 50);
        light.lookAt(cube.position);
        //scene.add(light);

        plane.receiveShadow = true
        cube.castShadow = true
        light.castShadow = true
        licznik = 0
        console.log(light)
            $("#button").on("click", function(){
                if(licznik==0){
                    var light1 = new Light(0xffffff)
                    console.log(light1)
                    scene.add(light1.getLight())
                    light1.getLight().lookAt(cube.position)
                    light1.getLight().position.set(0,50,100)
                    light1.changeColor(0xff0000)
                    licznik++
                    div1 = "<div id='div1'></div>"
                    suwak1_1='<input type="range" id="suwak1_1" min="1" max="100" value="50">'
                    suwak1_2='<input type="range" id="suwak1_2" min="0" max="200" value="100">'
                    color1='<input type="color" id="color1">'
                    $("#root").append(div1)
                    $("#div1").append(suwak1_1)
                    $("#div1").append(suwak1_2)
                    $("#div1").append(color1)
                    a1=50
                    b1=100
                    $("#suwak1_1").on("input", function(){
                        a1 = this.value;
                        light1.getLight().position.set(0,a1,b1)
                    })
                    $("#suwak1_2").on("input", function(){
                        b1 = this.value;
                        light1.getLight().position.set(0,a1,b1)
                    })
                    $("#color1").on("input", function(){
                        c1 = this.value;
                        light1.changeColor(c1)
                    })
                }
                else if(licznik==1){
                    var light2 = new Light(0xffffff)
                    console.log(light2)
                    scene.add(light2.getLight())
                    light2.getLight().lookAt(cube.position)
                    light2.getLight().position.set(100,50,0)
                    light2.changeColor(0x0000ff)
                    licznik++

                    div2 = "<div id='div2'></div>"
                    suwak2_1='<input type="range" id="suwak2_1" min="1" max="100" value="50">'
                    suwak2_2='<input type="range" id="suwak2_2" min="0" max="200" value="100">'
                    color2='<input type="color" id="color2">'
                    $("#root").append(div2)
                    $("#div2").append(suwak2_1)
                    $("#div2").append(suwak2_2)
                    $("#div2").append(color2)
                    a2=50
                    b2=100
                    $("#suwak2_1").on("input", function(){
                        a2 = this.value;
                        light2.getLight().position.set(b2,a2,0)
                    })
                    $("#suwak2_2").on("input", function(){
                        b2 = this.value;
                        light2.getLight().position.set(b2,a2,0)
                    })
                    $("#color2").on("input", function(){
                        c2 = this.value;
                        light2.changeColor(c2)
                    })
                    

                }
                else if(licznik==2){
                    var light3 = new Light(0xffffff)
                    console.log(light3)
                    scene.add(light3.getLight())
                    light3.getLight().lookAt(cube.position)
                    light3.getLight().position.set(-100,50,0)
                    light3.changeColor(0x00ff00)
                    licznik++
                    div3 = "<div id='div3'></div>"
                    suwak3_1='<input type="range" id="suwak3_1" min="1" max="100" value="50">'
                    suwak3_2='<input type="range" id="suwak3_2" min="-200" max="0" value="-100">'
                    color3='<input type="color" id="color3">'
                    $("#root").append(div3)
                    $("#div3").append(suwak3_1)
                    $("#div3").append(suwak3_2)
                    $("#div3").append(color3)
                    a3=50
                    b3=-100
                    $("#suwak3_1").on("input", function(){
                        a3 = this.value;
                        light3.getLight().position.set(b3,a3,0)
                    })
                    $("#suwak3_2").on("input", function(){
                        b3 = this.value;
                        light3.getLight().position.set(b3,a3,0)
                    })
                    $("#color3").on("input", function(){
                        c3 = this.value;
                        light3.changeColor(c3)
                    })
                }
                else if(licznik==3){
                    var light4 = new Light(0xffffff)
                    console.log(light4)
                    scene.add(light4.getLight())
                    light4.getLight().lookAt(cube.position)
                    light4.getLight().position.set(0,50,-100)
                    light4.changeColor(0xffffff)
                    licznik++
                    div4 = "<div id='div4'></div>"
                    suwak4_1='<input type="range" id="suwak4_1" min="1" max="100" value="50">'
                    suwak4_2='<input type="range" id="suwak4_2" min="-200" max="0" value="-100">'
                    color4='<input type="color" id="color4">'
                    $("#root").append(div4)
                    $("#div4").append(suwak4_1)
                    $("#div4").append(suwak4_2)
                    $("#div4").append(color4)
                    a4=50
                    b4=-100
                    $("#suwak4_1").on("input", function(){
                        a4 = this.value;
                        light4.getLight().position.set(0,a4,b4)
                    })
                    $("#suwak4_2").on("input", function(){
                        b4 = this.value;
                        light4.getLight().position.set(0,a4,b4)
                    })
                    $("#color4").on("input", function(){
                        c4 = this.value;
                        light4.changeColor(c4)
                    })
                }
            })
        function render() {


            
            renderer.shadowMap.enabled = true
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;



    plane.receiveShadow = true
    cube.castShadow = true
    light.castShadow = true
    
            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu
        
            plane.rotation.z += 0.01;
            cube.rotation.y -= 0.01;
            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
        
            requestAnimationFrame(render);
            

            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
                
            renderer.render(scene, camera);
        }
    
        render();
    })