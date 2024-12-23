//import { networkInterfaces } from "os";

console.log("konstruktor klasy Game")

class Game{

    constructor() {
        console.log("konstruktor klasy Game")
        this.scene=null
        this.tab=null
        this.camera=null
        this.pozycjepionkow=null
        this.gracz=null
        this.kliknietypionek=null
        this.pozycjepol=null
        this.zmiana=true
        this.zezwolenie=false
    }
    tworzenieplanszy(){
        var aaa = $(document).width()
        var bbb = $(document).height()
        var scene = new THREE.Scene();
        this.scene=scene
        console.log(this.scene)
        var camera = new THREE.PerspectiveCamera(
            45,    // kąt patrzenia kamery (FOV - field of view)
            4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
            0.1,    // minimalna renderowana odległość
            10000    // maxymalna renderowana odległość od kamery 
            );
            
            var renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0x0ffff0)
            renderer.setSize(aaa, bbb);
            $("body").html( renderer.domElement );
            var axes = new THREE.AxesHelper(1000)
            scene.add(axes)
        
            camera.position.x = 0;
            camera.position.y = 100;
            camera.position.z = 100;
            this.camera=camera
            camera.lookAt(scene.position)
                    
            var tablica=[
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
            ]
            var tablicapionkow=[
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
            ]
            this.pozycjepionkow = []
            this.pozycjepol=[]
            var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
            var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D
            var that=this
            var info=null
            this.tab=tablica
            var geometry = new THREE.BoxGeometry(10, 1, 10);
            var material = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide, 
                map: new THREE.TextureLoader().load('static/textures/biale.png') ,
                transparent: true, 
                opacity: 1,
                });
            var material2 = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide, 
                map: new THREE.TextureLoader().load('static/textures/czarne.png') ,
                transparent: true, 
                opacity: 1,
                });
            for(let a =0; a<8; a++){
                for(let b = 0; b<8;b++){
                    if(tablica[a][b]==1){
                        var cube = new THREE.Mesh(geometry, material);
                        scene.add(cube);
                        cube.position.x=a*10-35
                        cube.position.z=b*10-35
                        cube.name="l_"+a+"_"+b
                        this.pozycjepol.push(cube)
                    }
                    else{
                        var cube = new THREE.Mesh(geometry, material2);
                        scene.add(cube);
                        cube.position.x=a*10-35
                        cube.position.z=b*10-35
                        cube.name="l_"+a+"_"+b
                        this.pozycjepol.push(cube)
                    }
                }
            }
            $(document).mousedown(function (event) {
            if(that.zezwolenie){
                mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
                mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
                raycaster.setFromCamera(mouseVector, camera);
                var intersects = raycaster.intersectObjects(scene.children);
                console.log(intersects.length)
                if (intersects.length > 0) {

                    console.log(intersects[0].object);  
                    console.log(intersects[0].object.material.map.image.src); 
                    info = intersects[0].object.material.map.image.src.split("/")
                    info=info[5]
                    console.log(intersects[0].object.name);  
                    //console.log(intersects[1].object.material.map.image.src);
                    //console.log(intersects[0].object);        
            }
                if(that.gracz=="biale"){
                    if(info=="tekstura.jpg"){
                        that.kliknietypionek=intersects[0].object
                        console.log(that.kliknietypionek)
                    }
                    else if(info=="czarne.png"){
                        if(that.kliknietypionek!=null){
                            var zezwolenie = true
                            for(var aaa=0;aaa<that.pozycjepionkow.length;aaa++){
                                if(intersects[0].object.position.x==that.pozycjepionkow[aaa].position.x && intersects[0].object.position.z==that.pozycjepionkow[aaa].position.z){
                                    zezwolenie=false
                                }
                            }
                            if(zezwolenie){
                                var koordynaty = intersects[0].object.name
                                koordynaty = koordynaty.split("_")
                                var pozycjax=intersects[0].object.position.x
                                console.log(pozycjax)
                                var pozycjaz=intersects[0].object.position.z
                                console.log(pozycjaz)

                                var starapozycja = that.kliknietypionek.name
                                var nowapozycja = intersects[0].object.name
                                var qwerty=starapozycja.split("_")

                                tablicapionkow[koordynaty[2]][koordynaty[1]]=1
                                tablicapionkow[qwerty[2]][qwerty[1]]=0

                                if(qwerty[2]-koordynaty[2]==1){
                                    if(qwerty[1]-koordynaty[1]==1 || qwerty[1]-koordynaty[1]==-1){
                                        that.kliknietypionek.position.x=pozycjax
                                        that.kliknietypionek.position.z=pozycjaz
                                        that.kliknietypionek.name="p_"+koordynaty[1]+"_"+koordynaty[2]
                                        that.kliknietypionek=null


                                        console.log(tablicapionkow)
                                        console.log(starapozycja)
                                        console.log(nowapozycja)
                                        console.log(that.gracz)

                                        that.zezwolenie=false
                                        net.dostarczanietablicy(tablicapionkow,starapozycja,nowapozycja,that.gracz)
                                    }
                                }
                            }
                        }
                    }
                }
                else if(that.gracz=="czarne"){
                    if(info=="tekstura2.jpg"){
                        that.kliknietypionek=intersects[0].object
                        console.log(that.kliknietypionek)
                    }
                    else if(info=="czarne.png"){
                        if(that.kliknietypionek!=null){
                            var zezwolenie = true
                            for(var aaa=0;aaa<that.pozycjepionkow.length;aaa++){
                                if(intersects[0].object.position.x==that.pozycjepionkow[aaa].position.x && intersects[0].object.position.z==that.pozycjepionkow[aaa].position.z){
                                    zezwolenie=false
                                }
                            }
                            if(zezwolenie){
                                var koordynaty = intersects[0].object.name
                                koordynaty = koordynaty.split("_")
                                var pozycjax=intersects[0].object.position.x
                                console.log(pozycjax)
                                var pozycjaz=intersects[0].object.position.z
                                console.log(pozycjaz)

                                var starapozycja = that.kliknietypionek.name
                                var nowapozycja = intersects[0].object.name
                                var qwerty=starapozycja.split("_")

                                tablicapionkow[koordynaty[2]][koordynaty[1]]=2
                                tablicapionkow[qwerty[2]][qwerty[1]]=0

                                if(qwerty[2]-koordynaty[2]==-1){
                                    if(qwerty[1]-koordynaty[1]==1 || qwerty[1]-koordynaty[1]==-1){
                                        that.kliknietypionek.position.x=pozycjax
                                        that.kliknietypionek.position.z=pozycjaz
                                        that.kliknietypionek.name="p_"+koordynaty[1]+"_"+koordynaty[2]
                                        that.kliknietypionek=null

                                        console.log(tablicapionkow)
                                        console.log(starapozycja)
                                        console.log(nowapozycja)

                                        that.zezwolenie=false
                                        net.dostarczanietablicy(tablicapionkow,starapozycja,nowapozycja,that.gracz)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            })
            var zapytanie = document.createElement("div")
            zapytanie.id="zapytanie"
            $("body").append(zapytanie)
            zapytanie.style.position="absolute"
            zapytanie.style.left= (aaa/2 - 100) + "px"

            var pole = document.createElement("div")
            pole.id="pole"
            pole.style.position="relative"
            pole.style.left="20px"
            pole.style.bottom="180px"

            $("body").append(pole)
            ui.interfejs()       
            function render() {
                requestAnimationFrame(render);  
                renderer.render(scene, camera);
            }
        
            render();
        }
        gra(kolor){
            this.gracz=kolor
            if(this.gracz=="biale"){
                this.zezwolenie=true
            }
            console.log(kolor)
            if(kolor=="czarne"){
                this.camera.position.z=this.camera.position.z*(-1)
                this.camera.lookAt(this.scene.position)
            }
            for(let a =0; a<8; a++){
                for(let b = 0; b<3;b++){
                    if(this.tab[a][b]==0){
                        var pionek = new Pionek('static/textures/tekstura2.jpg')
                        this.scene.add(pionek);
                        pionek.position.x=a*10-35
                        pionek.position.z=b*10-35
                        pionek.position.y=1
                        pionek.name="p_"+a+"_"+b
                        this.pozycjepionkow.push(pionek)
                    }
                }
            }
            for(let a =0; a<8; a++){
                for(let b = 5; b<8;b++){
                    if(this.tab[a][b]==0){
                        var pionek = new Pionek('static/textures/tekstura.jpg')
                        this.scene.add(pionek);
                        pionek.position.x=a*10-35
                        pionek.position.z=b*10-35
                        pionek.position.y=1
                        pionek.name="p_"+a+"_"+b
                        this.pozycjepionkow.push(pionek)
                    }
                }
            }   
            var polee = document.getElementById("pole")
            polee.innerHTML=""
            for(var a=0;a<8;a++){
                for(var b = 0;b<8;b++){
                    var pudelko = document.createElement("div")
                    pudelko.style.width="20px"
                    pudelko.style.height="20px"
                    pudelko.style.border="1px solid black"
                    pudelko.style.float="left"
                    pudelko.style.textAlign="center"
                    if(this.tab[a][b]==0){
                        pudelko.innerHTML="0"
                    }
                    else if(this.tab[a][b]==1){
                        pudelko.innerHTML="1"
                        pudelko.style.color="green"
                    }
                    else{
                        pudelko.innerHTML="2"
                        pudelko.style.color="red"
                    }
                    $(polee).append(pudelko)
                }
            }

            var ktoterazmature = setInterval(function(){ 
                //console.log("kek")
                net.tura()
            },500)
        }
        aktualizacjatablicy(info){

        }
        zmianatury(info){
            ui.przycisknapozycje(info.tab)
            console.log(info)
            if(this.gracz!=info.gracz){
                var pudlo = document.getElementById("zapytanie")
                pudlo.innerHTML="twa tura"
                this.zezwolenie=true
                var stare = info.starapozycja
                var nowe = info.nowapozycja
                console.log(this.pozycjepionkow)
                console.log(this.pozycjepol)
                var szukanypionek = null
                var szukanepole = null
                for(var a = 0;a<this.pozycjepionkow.length;a++){
                    if(this.pozycjepionkow[a].name==stare){
                        szukanypionek=this.pozycjepionkow[a]
                    }
                }
                for(var a = 0;a<this.pozycjepol.length;a++){
                    if(this.pozycjepol[a].name==nowe){
                        szukanepole=this.pozycjepol[a]
                    }
                }
                szukanypionek.position.x=szukanepole.position.x
                szukanypionek.position.z=szukanepole.position.z
                nowe=nowe.split("_")
                szukanypionek.name="p_"+nowe[1]+"_"+nowe[2]
            }
            else{
                var pudlo = document.getElementById("zapytanie")
                pudlo.innerHTML="tura oponenta"
            }
        }  
}