console.log("konstruktor klasy 3d")

class Main3d{

    constructor() {
        this.scene=null
        this.pierwszy=null
        this.drugi=null
        this.player=null
    }
    rozpoczecie(data,gracz){
        var aaa = $(document).width()
        var bbb = $(document).height()
        var scene = new THREE.Scene();
        this.scene=scene
        var that = this

        var geometry = new THREE.CylinderGeometry( 60, 60, 1, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0x00ff00    } );
        var cylinder1 = new THREE.Mesh( geometry, material );
        scene.add( cylinder1 );
        cylinder1.position.z=100
        var cylinder2 = new THREE.Mesh( geometry, material );
        scene.add( cylinder2 );
        cylinder2.position.z=-100

        var camera = new THREE.PerspectiveCamera(
            45,    // kąt patrzenia kamery (FOV - field of view)
            4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
            0.1,    // minimalna renderowana odległość
            10000    // maxymalna renderowana odległość od kamery 
            );
            var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
            scene.add( ambientLight );
            
            var renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0xffffff)
            renderer.setSize(aaa, bbb);
            
            $("#test").append( renderer.domElement );
        
            
            /*
            var a ="Houndoom"

            var loadingmodel=function(a){
                var loadingManager = new THREE.LoadingManager( function () {
                    that.scene.add( pokemon );
                    pokemon.scale.set(0.33,0.33,0.33)
                } );
                var loader = new THREE.ColladaLoader( loadingManager );
                loader.load( './models/collada/'+a+'/'+a+'.dae', function ( collada ) {
                    pokemon = collada.scene;
                } );
            }
            loadingmodel(a)
            */
            camera.position.y = 200;
            if(gracz=="pierwszy"){
                camera.position.z = 200; 
                camera.position.x = 200;
            }
            else{
                camera.position.z = -200; 
                camera.position.x = -200;
            }
            
            
            
            camera.lookAt(scene.position)
    
            ui.rozpoczecie(data,gracz)

            function render() {
                requestAnimationFrame(render); 
                renderer.render(scene, camera);
            }
        
            render();
    }
    startowemodele(ty,wrog,gracz){
        this.player=gracz
        var that = this
        var ty = ty
        var pokemon;
        var loadingmodel=function(ty){
            var loadingManager = new THREE.LoadingManager( function () {
                that.scene.add( pokemon );
                pokemon.scale.set(0.33,0.33,0.33)
                console.log(pokemon)
                if(gracz=="pierwszy"){
                    that.pierwszy=pokemon
                    that.pierwszy.position.z=100
                    that.pierwszy.rotation.z=Math.PI
                }
                else{
                    that.drugi=pokemon
                    that.drugi.position.z=-100
                }
            } );
            var loader = new THREE.ColladaLoader( loadingManager );
            loader.load( './models/collada/'+ty+'/'+ty+'.dae', function ( collada ) {
                pokemon = collada.scene;

            } );
        }
        loadingmodel(ty)
        var pokemon2;
        var wrog = wrog
        var loadingmodel=function(wrog){
            var loadingManager = new THREE.LoadingManager( function () {
                that.scene.add( pokemon2 );
                pokemon2.scale.set(0.33,0.33,0.33)
                console.log(pokemon2)
                if(gracz=="pierwszy"){
                    that.drugi=pokemon2
                    that.drugi.position.z=-100
                }
                else{
                    that.pierwszy=pokemon2
                    that.pierwszy.rotation.z=Math.PI
                    that.pierwszy.position.z=100
                }
            } );
            var loader = new THREE.ColladaLoader( loadingManager );
            loader.load( './models/collada/'+wrog+'/'+wrog+'.dae', function ( collada ) {
                pokemon2 = collada.scene;
               
            } );
        }
        loadingmodel(wrog)
    }
    animacja(kolejnosc,poki){
        console.log(kolejnosc)
        console.log(poki)
        var that = this
        var zezwolenie1=true
        var zezwolenie2=true
        kolejnosc=kolejnosc.split(";")
        
        console.log(this.pierwszy)
        console.log(this.drugi)
        console.log(kolejnosc)

        //dead,change,animate,add
        
        for(var a = 0;a<kolejnosc.length;a++){
            if(kolejnosc[a]!=""){
                var info = kolejnosc[a].split("_")
                if(info[0]=="pierwszy"){


                    if(info[1]=="animate"){
                        if(zezwolenie1){
                            setTimeout(function(){
                                var pierwszyruch = setInterval(ruch1,1)
                                function ruch1(){
                                    that.pierwszy.position.x+=1.5
                                }
                                setTimeout(function(){ clearInterval(pierwszyruch); }, 125);
                            }, 0+a*500);

                            setTimeout(function(){
                                var drugiruch = setInterval(ruch2,1)
                                function ruch2(){
                                    that.pierwszy.position.x-=1.5
                                }
                                setTimeout(function(){ clearInterval(drugiruch); }, 250);
                            }, 125+a*500);

                            setTimeout(function(){
                                var trzeciruch = setInterval(ruch3,1)
                                function ruch3(){
                                    that.pierwszy.position.x+=1.5
                                }
                                setTimeout(function(){ clearInterval(trzeciruch);
                                    that.pierwszy.position.x=0 }, 125);
                            }, 375+a*500);
                        }
                    }


                    else if(info[1]=="change"){
                        setTimeout(function(){
                            that.scene.remove(that.pierwszy);
                        }, 0+a*500);  
                        setTimeout(function(){
                            var pokemon;
                            var loadingmodel=function(){
                                var loadingManager = new THREE.LoadingManager( function () {
                                    that.scene.add( pokemon );
                                    pokemon.scale.set(0.33,0.33,0.33)
                                    that.pierwszy=pokemon
                                    that.pierwszy.position.z=100
                                    that.pierwszy.rotation.z=Math.PI
                                } );
                                var loader = new THREE.ColladaLoader( loadingManager );
                                loader.load( './models/collada/'+poki.firstplayer.name+'/'+poki.firstplayer.name+'.dae', function ( collada ) {
                                    pokemon = collada.scene;
                                } );
                            }
                            loadingmodel()
                        }, 250+a*500); 
                    }


                    else if(info[1]=="dead"){
                        setTimeout(function(){
                            that.pierwszy.rotation.y=Math.PI/2
                        }, 0+a*500);
                        setTimeout(function(){
                            that.scene.remove(that.pierwszy);
                        }, 500+a*500);  
                        zezwolenie1=false
                    }


                    else if(info[1]=="add"){
                        setTimeout(function(){
                            var pokemon;
                            var loadingmodel=function(){
                                var loadingManager = new THREE.LoadingManager( function () {
                                    that.scene.add( pokemon );
                                    pokemon.scale.set(0.33,0.33,0.33)
                                    that.pierwszy=pokemon
                                    that.pierwszy.position.z=100
                                    that.pierwszy.rotation.z=Math.PI
                                } );
                                var loader = new THREE.ColladaLoader( loadingManager );
                                loader.load( './models/collada/'+poki.firstplayer.name+'/'+poki.firstplayer.name+'.dae', function ( collada ) {
                                    pokemon = collada.scene;
                                } );
                            }
                            loadingmodel()
                        }, 0+a*500); 
                    }
                }
                else if(info[0]=="drugi"){
                    if(info[1]=="animate"){
                        if(zezwolenie2){
                            setTimeout(function(){
                                var pierwszyruch = setInterval(ruch1,1)
                                function ruch1(){
                                    that.drugi.position.x+=1.5
                                }
                                setTimeout(function(){ clearInterval(pierwszyruch); }, 125);
                            }, 0+a*500);

                            setTimeout(function(){
                                var drugiruch = setInterval(ruch2,1)
                                function ruch2(){
                                    that.drugi.position.x-=1.5
                                }
                                setTimeout(function(){ clearInterval(drugiruch); }, 250);
                            }, 125+a*500);

                            setTimeout(function(){
                                var trzeciruch = setInterval(ruch3,1)
                                function ruch3(){
                                    that.drugi.position.x+=1.5
                                }
                                setTimeout(function(){ clearInterval(trzeciruch); 
                                    that.drugi.position.x=0
                                }, 125);
                            }, 375+a*500);
                        }
                    }
                    else if(info[1]=="change"){
                        setTimeout(function(){
                            that.scene.remove(that.drugi);
                        }, 0+a*500);  
                        setTimeout(function(){
                            var pokemon;
                            var loadingmodel=function(){
                                var loadingManager = new THREE.LoadingManager( function () {
                                    that.scene.add( pokemon );
                                    pokemon.scale.set(0.33,0.33,0.33)
                                    that.drugi=pokemon
                                    that.drugi.position.z=-100
                                } );
                                var loader = new THREE.ColladaLoader( loadingManager );
                                loader.load( './models/collada/'+poki.secondplayer.name+'/'+poki.secondplayer.name+'.dae', function ( collada ) {
                                    pokemon = collada.scene;
                                } );
                            }
                            loadingmodel()
                        }, 250+a*500); 
                    }
                    else if(info[1]=="dead"){
                        setTimeout(function(){
                            that.drugi.rotation.y=Math.PI/2
                        }, 0+a*500);
                        setTimeout(function(){
                            that.scene.remove(that.drugi);
                        }, 500+a*500);  
                        zezwolenie2=false
                    }
                    else if(info[1]=="add"){
                        setTimeout(function(){
                            var pokemon;
                            var loadingmodel=function(){
                                var loadingManager = new THREE.LoadingManager( function () {
                                    that.scene.add( pokemon );
                                    pokemon.scale.set(0.33,0.33,0.33)
                                    that.drugi=pokemon
                                    that.drugi.position.z=-100
                                } );
                                var loader = new THREE.ColladaLoader( loadingManager );
                                loader.load( './models/collada/'+poki.secondplayer.name+'/'+poki.secondplayer.name+'.dae', function ( collada ) {
                                    pokemon = collada.scene;
                                } );
                            }
                            loadingmodel()
                        }, 0+a*500); 
                    }
                }
            }
        }
        //odegranie

    }
}