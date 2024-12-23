console.log("wczytano plik hex3d.js")

class Main3D {
    constructor(){
        this.scene=null
    }

tworzenieplanszy(info,wielkosc){

    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    this.scene=scene
    var Z;
    var X;
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff)
        renderer.setSize(aaa, bbb);
        $("body").html( renderer.domElement );
        

        //var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        //orbitControl.addEventListener('change', function () {
         //   renderer.render(scene, camera)
        //});
        

        for(var a=0;a<info.length;a++){
        var hex = new Hex3D
            console.log(info[a].id)
            var koordynaty = info[a].id.split("_")
            console.log(hex)
            scene.add(hex)
            hex.position.x=3/2*Settings.radius*koordynaty[1]+1

            if(koordynaty[1]%2==0){
                hex.position.z=Settings.radius*Math.sqrt(3)*koordynaty[2]+1
            }
            else{
                hex.position.z=Settings.radius*Math.sqrt(3)*koordynaty[2]+Settings.radius*Math.sqrt(3)/2+1
            }
            Settings.licznik++ 
            hex.position.y=25
            console.log(hex.position)
            if(info[a].type=="swiatlo"){
                var light1 = new Light
                light1.position.set(0,100,0)
                hex.add(light1)        
                Settings.tablicaswiatel.push(light1)
            }
            if(info[a].type=="ally"){
                var ally=new Ally()
                ally.addTo(this.scene)
                Settings.modeleaalies.push(ally)
                
                ally.getPlayerCont().position.x=3/2*Settings.radius*koordynaty[1]+1
                if(koordynaty[1]%2==0){
                    ally.getPlayerCont().position.z=Settings.radius*Math.sqrt(3)*koordynaty[2]+1
                }
                else{
                    ally.getPlayerCont().position.z=Settings.radius*Math.sqrt(3)*koordynaty[2]+Settings.radius*Math.sqrt(3)/2+1
                }
                
            }
            if(a==0){
                /*player.getPlayerCont().position.x*/X=hex.position.x
              /*  player.getPlayerCont().position.z*/Z=hex.position.z
            }
        }


        Settings.allies.splice(0,1)

        
        var div1 = "<div id='div1'></div>"
        var suwak1_1='<input type="range" id="suwak" min="50" max="150" value="100">'
        $("body").append(div1)
        $("#div1").append(suwak1_1)
        $("#suwak").on("input", function(){
            var a1 = this.value;
            for(var b=0;b<Settings.tablicaswiatel.length;b++){
                Settings.tablicaswiatel[b].position.y=a1
            }
        })
		var div2 = "<div id='div2'></div>"
        var suwak2_2='<input type="range" id="suwak2" min="1" max="10" value="1" step="0.1">'
        $("body").append(div2)
        $("#div2").append(suwak2_2)
        $("#suwak2").on("input", function(){
            var a2 = this.value;
			
            for(var b=0;b<Settings.tablicaswiatel.length;b++){
                Settings.tablicaswiatel[b].children[0].intensity=a2
            }
        })


        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        var square = new THREE.BoxGeometry(2, 2, 2);
        var szescian = new THREE.Mesh(square, Settings.material5);
        scene.add(szescian)
        //var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        //orbitControl.addEventListener('change', function () {
        //    renderer.render(scene, camera)
        //});
        

        var allies = []

        var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
        var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D

        // wektory
        var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający PUNKT kliknięcia
        var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający KIERUNEK ruchu playera
        /*
        $(document).mousemove(function (event) {
            if(scene.children!=null){
                var raycaster3 = new THREE.Raycaster();
                console.log(scene.children)
                console.log(Settings.allies)
                mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
                mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
                raycaster3.setFromCamera(mouseVector, camera);
                var intersects2 = raycaster3.intersectObjects(Settings.allies);
                console.log(intersects2.length)
                if (intersects2.length > 0) {
                    console.log(Settings.allies)
                    console.log(Settings.modeleaalies)
                    console.log(intersects2[0].object);  
                    var szukane = null;
                    for(var aaaa=0;aaaa<Settings.allies.length;aaaa++){
                        if(intersects2[0].object==Settings.allies[aaaa]){
                            szukane=aaaa
                        }
                    }
                    console.log(szukane)
                }
            }
        })
        */
        $(document).mousedown(function (event) {
            console.log(scene.children)
            console.log(Settings.allies)
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, camera);
            var intersects = raycaster.intersectObjects(Settings.allies);
            console.log(intersects.length)
            if (intersects.length > 0) {
                console.log(Settings.allies)
                console.log(Settings.modeleaalies)
                console.log(intersects[0].object);  
                var szukane = null;
                for(var aaaa=0;aaaa<Settings.allies.length;aaaa++){
                    if(intersects[0].object==Settings.allies[aaaa]){
                        szukane=aaaa
                    }
                }
                Settings.allies.splice(szukane, 1)
                Settings.chodzacysojusznicy.push(Settings.modeleaalies[szukane])
                Settings.modeleaalies.splice(szukane,1)

                console.log(Settings.chodzacysojusznicy)
                Settings.zezwolenie2=false
            }
            else{
                Settings.zezwolenie2=true
            }
        })

        let grid = new Grid(2000, 0xffffff, false)
        grid.addTo(scene)

        var player = new Player();
        console.log(player)
        player.addTo(scene)
        player.getPlayerCont().position.x=X
        player.getPlayerCont().position.z=Z
        player.getPlayerCont().position.y=3

        var point = new THREE.Mesh(new THREE.SphereGeometry(0, 0, 0), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        scene.add(point)
        point.position.y = 5






        function ruch() {
            if(Settings.zezwolenie2){
            //console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
            if (player.getPlayerCont().position.clone().distanceTo(clickedVect) > 10) {
                player.getPlayerCont().translateOnAxis(directionVect, 3)
                player.getPlayerCont().position.y = 3
                
                camera.position.x = player.getPlayerCont().position.x + 200
                camera.position.z = player.getPlayerCont().position.z + 200
                camera.lookAt(player.getPlayerCont().position)
            }
            else{
                //model.stopAnimation()
            }
            /*
            for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                console.log(Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().distanceTo(player.getPlayerCont().position.clone()) )
                if (Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().distanceTo(player.getPlayerCont().position.clone()) > 1*a+11) {
                    console.log(a)
                    console.log(kierunki[a])
                    Settings.chodzacysojusznicy[a].getPlayerCont().translateOnAxis(kierunki[a], 3)
                    Settings.chodzacysojusznicy[a].getPlayerCont().position.y = 3
                }
                else{
                    //model.stopAnimation()
                }    
            }
            */
            }
        }
    
    
        function zezwolenie(event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1
            raycaster.setFromCamera(mouseVector, camera);
    
            var intersects = raycaster.intersectObjects(scene.children);
    
            if (intersects.length > 0) {
                clickedVect = intersects[0].point
                console.log(clickedVect)
                console.log(player.getPlayerCont().position)
                console.log(intersects[0].object);
                directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()
                console.log(directionVect)
                /*
                for(var a=0;a<Settings.chodzacysojusznicy.length;a++){
                    //Settings.directionsojusznikow[a] = directionVect2
                    kierunki[a] = player.getPlayerCont().position.clone().sub(Settings.chodzacysojusznicy[a].getPlayerCont().position).normalize()
                    console.log(kierunki[a])
                    Settings.directionsojusznikow[a] =  player.getPlayerCont().position.clone().sub(Settings.chodzacysojusznicy[a].getPlayerCont().position).normalize()
                    console.log(a)
                    console.log(Settings.directionsojusznikow[a])
                }
                */
                var angle = Math.atan2(
                    player.getPlayerCont().position.clone().x - clickedVect.x,
                    player.getPlayerCont().position.clone().z - clickedVect.z
                )
                console.log(angle)
                player.getPlayerMesh().rotation.y = Math.PI + angle
                /*
                for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                    var rzecz = Math.atan2(
                        Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().x - player.getPlayerCont().position.x,
                        Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().z - player.getPlayerCont().position.z
                    ) 
                    Settings.chodzacysojusznicy[a].getPlayerMesh().rotation.y = Math.PI + rzecz
                }
                */
                point.position.x = clickedVect.x
                point.position.y = 5
                point.position.z = clickedVect.z
                //
                player.model.setAnimation();
                /*for(var a =0;a<Settings.chodzacysojusznicy.length;a++){
                    Settings.chodzacysojusznicy[a].model.setAnimation();
                }*/
                //console.log(Settings.anglesojusznikow)
            }
        }
    
        function ruchsojusznikow(){
            for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                var directionVect2 = new THREE.Vector3(0, 0, 0)
                directionVect2 = player.getPlayerCont().position.clone().sub(Settings.chodzacysojusznicy[a].getPlayerCont().position).normalize()
                console.log(Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().x)
                var angle = Math.atan2(
                    Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().x - player.getPlayerCont().position.clone().x,
                    Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().z - player.getPlayerCont().position.clone().z
                )
                console.log(angle)
                Settings.chodzacysojusznicy[a].getPlayerMesh().rotation.y = Math.PI + angle
                Settings.chodzacysojusznicy[a].model.setAnimation();

                    //console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
                    if (Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().distanceTo(player.getPlayerCont().position.clone()) > 30 +a*20) {
                        Settings.chodzacysojusznicy[a].getPlayerCont().translateOnAxis(directionVect2, 2.5)
                        Settings.chodzacysojusznicy[a].getPlayerCont().position.y = 3
                    }
                
            }
        }

        function szukaniesciany(){
            if(Settings.zezwolenie2){
                var raycasterC = new THREE.Raycaster();
                var ray = new THREE.Ray(player.getPlayerCont().position, Settings.meshgracza.getWorldDirection(new THREE.Vector3(1,1,1)))
                raycasterC.ray = ray
                var intersects = raycasterC.intersectObjects(Settings.sciany, true); 
                if (intersects[0]) {
                                
                    //console.log(intersects[0].distance) // odległość od vertex-a na wprost, zgodnie z kierunkiem ruchu
                    //console.log(intersects[0].point) // współrzędne vertexa na wprost
                    szescian.position.x=intersects[0].point.x
                    szescian.position.y=15
                    szescian.position.z=intersects[0].point.z

                    if(intersects[0].distance<30){
                        Settings.zezwolenie2=false
                        player.model.stopAnimation()
                    }
                }
            }
        }

        var clock = new THREE.Clock();

        function render() {
            var delta = clock.getDelta();

            player.model.updateModel(delta)
            for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                Settings.chodzacysojusznicy[a].model.updateModel(delta)
            }
            if (player.getPlayerCont().position.clone().distanceTo(clickedVect) > 10) {
                //nicosc
            }
            else{
                player.model.stopAnimation()
            }
            for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                if (Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().distanceTo(player.getPlayerCont().position.clone()) > 30 +a*20) {
                    //nicosc
                }
                else{
                    Settings.chodzacysojusznicy[a].model.stopAnimation()
                }
            }
            ruch()
            ruchsojusznikow()
            renderer.render(scene, camera);
            requestAnimationFrame(render);
            szukaniesciany()
        }

        $(document).mousedown(event => {
            if(Settings.zezwolenie2){
            zezwolenie(event)
            $(document).on("mousemove", event => {
                zezwolenie(event)
            })
            $(document).mouseup(event => {
                $(document).off("mousemove")
            })
        }
        })
        render()
    
    }









tworzenieplanszy2(){
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
        $("body").html( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        //var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        //orbitControl.addEventListener('change', function () {
        //    renderer.render(scene, camera)
        //});
        

        var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
        var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D

        // wektory
        var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający PUNKT kliknięcia
        var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający KIERUNEK ruchu playera

        let grid = new Grid(2000, 0xffffff, false)
        grid.addTo(scene)

        var player = new Player();
        console.log(player)
        player.addTo(scene)

        var point = new THREE.Mesh(new THREE.SphereGeometry(1, 15, 15), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        scene.add(point)
        point.position.y = 5

        var allies = []

        function ruch() {
            console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
            if (player.getPlayerCont().position.clone().distanceTo(clickedVect) > 10) {
                player.getPlayerCont().translateOnAxis(directionVect, 1)
                player.getPlayerCont().position.y = 0
    
                camera.position.x = player.getPlayerCont().position.x + 200
                camera.position.z = player.getPlayerCont().position.z + 200
                camera.lookAt(player.getPlayerCont().position)
            }
        }
    
    
        function zezwolenie(event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1
            raycaster.setFromCamera(mouseVector, camera);
    
            var intersects = raycaster.intersectObjects(scene.children);
    
            if (intersects.length > 0) {  
                clickedVect = intersects[0].point
                console.log(clickedVect)
                directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()
                console.log(directionVect)
                var angle = Math.atan2(
                    player.getPlayerCont().position.clone().x - clickedVect.x,
                    player.getPlayerCont().position.clone().z - clickedVect.z
                )
                player.getPlayerMesh().rotation.y = Math.PI + angle
                point.position.x = clickedVect.x
                point.position.y = 5
                point.position.z = clickedVect.z
            }
        }
    
        function render() {
            ruch()
            //ruchsojusznikow()
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        $(document).mousedown(event => {
            zezwolenie(event)
            $(document).on("mousemove", event => {
                zezwolenie(event)
            })
            $(document).mouseup(event => {
                $(document).off("mousemove")
            })
        })
        render()
    }







    tworzenieplanszy3(){
    var aaa = $(document).width()
    var bbb = $(document).height()
    var scene = new THREE.Scene();
    this.scene=scene
    var camera = new THREE.PerspectiveCamera(
        45,    // kąt patrzenia kamery (FOV - field of view)
        4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
        0.1,    // minimalna renderowana odległość
        10000    // maxymalna renderowana odległość od kamery 
        );
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xffffff)
        renderer.setSize(aaa, bbb);
        $("body").html( renderer.domElement );
    
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)
    
        camera.position.x = 200;
        camera.position.y = 200;
        camera.position.z = 200;
        camera.lookAt(scene.position)

        //var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
        //orbitControl.addEventListener('change', function () {
        //    renderer.render(scene, camera)
        //});
        

        var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
        var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D

        // wektory
        var clickedVect = new THREE.Vector3(0, 0, 0); // wektor określający PUNKT kliknięcia
        var directionVect = new THREE.Vector3(0, 0, 0); // wektor określający KIERUNEK ruchu playera

        let grid = new Grid(2000, 0xffffff, false)
        grid.addTo(scene)

        var player = new Player();
        console.log(player)
        player.addTo(scene)

        var point = new THREE.Mesh(new THREE.SphereGeometry(1, 15, 15), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        scene.add(point)
        point.position.y = 5

        for(var a=0;a<3;a++){
            var ally=new Ally()
            ally.addTo(this.scene)
            Settings.modeleaalies.push(ally)
            ally.getPlayerCont().position.x=100+100*a
            ally.getPlayerCont().position.z=100+100*a
        }

        Settings.allies.splice(0,1)

        $(document).mousedown(function (event) {
            console.log(scene.children)
            console.log(Settings.allies)
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
            raycaster.setFromCamera(mouseVector, camera);
            var intersects = raycaster.intersectObjects(Settings.allies);
            console.log(intersects.length)
            if (intersects.length > 0) {
                console.log(Settings.allies)
                console.log(Settings.modeleaalies)
                console.log(intersects[0].object);  
                var szukane = null;
                for(var aaaa=0;aaaa<Settings.allies.length;aaaa++){
                    if(intersects[0].object==Settings.allies[aaaa]){
                        szukane=aaaa
                    }
                }
                Settings.allies.splice(szukane, 1)
                Settings.chodzacysojusznicy.push(Settings.modeleaalies[szukane])
                Settings.modeleaalies.splice(szukane,1)

                console.log(Settings.chodzacysojusznicy)
                Settings.zezwolenie2=false
            }
            else{
                Settings.zezwolenie2=true
            }
        })

        function ruchsojusznikow(){
            for(var a = 0;a<Settings.chodzacysojusznicy.length;a++){
                var directionVect2 = new THREE.Vector3(0, 0, 0)
                directionVect2 = player.getPlayerCont().position.clone().sub(Settings.chodzacysojusznicy[a].getPlayerCont().position).normalize()
                console.log(Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().x)
                var angle = Math.atan2(
                    Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().x - player.getPlayerCont().position.clone().x,
                    Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().z - player.getPlayerCont().position.clone().z
                )
                console.log(angle)
                Settings.chodzacysojusznicy[a].getPlayerMesh().rotation.y = Math.PI + angle
                Settings.chodzacysojusznicy[a].model.setAnimation();

                    //console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
                    if (Settings.chodzacysojusznicy[a].getPlayerCont().position.clone().distanceTo(player.getPlayerCont().position.clone()) > 30 +a*30) {
                        Settings.chodzacysojusznicy[a].getPlayerCont().translateOnAxis(directionVect2, 2.5)
                        Settings.chodzacysojusznicy[a].getPlayerCont().position.y = 3
                    }
                
            }
        }

        function ruch() {
            console.log(player.getPlayerCont().position.clone().distanceTo(clickedVect))
            if (player.getPlayerCont().position.clone().distanceTo(clickedVect) > 10) {
                player.getPlayerCont().translateOnAxis(directionVect, 3)
                player.getPlayerCont().position.y = 0
    
                camera.position.x = player.getPlayerCont().position.x + 200
                camera.position.z = player.getPlayerCont().position.z + 200
                camera.lookAt(player.getPlayerCont().position)
            }
        }
    
    
        function zezwolenie(event) {
            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1
            raycaster.setFromCamera(mouseVector, camera);
    
            var intersects = raycaster.intersectObjects(scene.children);
    
            if (intersects.length > 0) {  
                clickedVect = intersects[0].point
                console.log(clickedVect)
                directionVect = clickedVect.clone().sub(player.getPlayerCont().position).normalize()
                console.log(directionVect)
                var angle = Math.atan2(
                    player.getPlayerCont().position.clone().x - clickedVect.x,
                    player.getPlayerCont().position.clone().z - clickedVect.z
                )
                player.getPlayerMesh().rotation.y = Math.PI + angle
                point.position.x = clickedVect.x
                point.position.y = 5
                point.position.z = clickedVect.z
            }
        }
    
        function render() {
            ruch()
            ruchsojusznikow()
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        $(document).mousedown(event => {
            if(Settings.zezwolenie2){
                zezwolenie(event)
                $(document).on("mousemove", event => {
                    zezwolenie(event)
                })
                $(document).mouseup(event => {
                    $(document).off("mousemove")
                })
            }
        })
        render()
    }
}

