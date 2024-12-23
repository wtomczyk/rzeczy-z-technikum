class Main3D {
    constructor(){
        console.log("aaa")
    }
    start(){
        var aaa = $(document).width()
        var bbb = $(document).height()
        var scene = new THREE.Scene();
        
        var camera = new THREE.PerspectiveCamera(
            45,    // kąt patrzenia kamery (FOV - field of view)
            4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
            0.1,    // minimalna renderowana odległość
            10000    // maxymalna renderowana odległość od kamery 
            );
            var zezwolenie = false
            var renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0xffffff)
            renderer.setSize(aaa, bbb);
            var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
            orbitControl.addEventListener('change', function () {
               renderer.render(scene, camera)
            });
            $("#root").append( renderer.domElement );
        
            var axes = new THREE.AxesHelper(1000)
            scene.add(axes)
        
            

            var div1 = "<div id='div1'></div>"
            var suwak1_1='<input type="range" id="suwak" min="-0.5" max="0" value="0" step="0.01">'
            $("body").append(div1)
            $("#div1").append(suwak1_1)
            $("#suwak").on("input", function(){
                var a1 = this.value;
                armatka.dajlufe().rotation.z=Math.PI*a1
                aaaa = armatka.dajkatarmaty()
                bbbb = armatka.dajkatlufy()
                x = r*Math.sin(bbbb)*Math.cos(aaaa)*-1
                z = r*Math.sin(bbbb)*Math.sin(aaaa)
                y = r*Math.cos(bbbb)
                kulka.dajkule().position.set(x,y,z)
            })
            var vector = new THREE.Vector3();
            var div2 = "<div id='div2'></div>"
            var suwak2_2='<input type="range" id="suwak2" min="-1" max="1" value="0" step="0.01">'
            $("body").append(div2)
            $("#div2").append(suwak2_2)
            $("#suwak2").on("input", function(){
                var a2 = this.value;
                armatka.dajarmate().rotation.y=Math.PI*a2
                aaaa = armatka.dajkatarmaty()
                bbbb =  armatka.dajkatlufy()
                x = r*Math.sin(bbbb)*Math.cos(aaaa)*-1
                z = r*Math.sin(bbbb)*Math.sin(aaaa)
                y = r*Math.cos(bbbb)
                kulka.dajkule().position.set(x,y,z)
                iks = armatka.dajlufe().getWorldDirection(vector).x*-1
                console.log(iks)
            })
            var strzal = "<button id='strzal'></button>"
            $("body").append(strzal)
            $("#strzal").on("click", function(){
                zezwolenie = true
            })
            camera.position.x = 200;
            camera.position.y = 200;
            camera.position.z = 200;
            camera.lookAt(scene.position)
    
            var armatka = new Cannon
            scene.add(armatka.dajarmate())

            var kulka = new Ball
            scene.add(kulka.dajkule())
            let iks = null
            let r = 32
            let aaaa = -1 * armatka.dajkatarmaty()
            let bbbb = -1 * armatka.dajkatlufy()
            let x = r*Math.sin(bbbb)*Math.cos(aaaa)
            let z = r*Math.sin(bbbb)*Math.sin(aaaa)
            let y = r*Math.cos(bbbb)
            kulka.dajkule().position.set(x,y,z)
        
            armatka.dajlufe().geometry.translate(0,10,0)

            var t = 1
            function render() {    
                if(zezwolenie){
                    var alfa = armatka.dajkatlufy()*(-1)
                    var z100 = armatka.dajlufe().getWorldDirection(new THREE.Vector3( 1, 1, 1 )).z / Math.sin(Math.abs(Math.PI/2 - alfa))
                    var x100 = armatka.dajlufe().getWorldDirection(new THREE.Vector3( 1, 1, 1 )).x / Math.sin(Math.abs(Math.PI/2 - alfa))*-1
                    console.log(iks)
                    var g = 9.81
                    var v = 50
                    var x1 = x100 * v * t * Math.cos( Math.abs(Math.PI/2 - alfa) )
                    var y1 = v * t * Math.sin( Math.abs(Math.PI/2 - alfa) ) - ((9.81 * t * t) / 2)
                    var z1 =  z100 * v * t * Math.cos( Math.abs(Math.PI/2 - alfa) )
                    t=t+0.1
                    kulka.dajkule().position.set(z1,y1,x1)
                    if(y1<=0){
                        zezwolenie=false
                        aaaa = -1 * armatka.dajkatarmaty()
                        bbbb = -1 * armatka.dajkatlufy()
                        x = r*Math.sin(bbbb)*Math.cos(aaaa)
                        z = r*Math.sin(bbbb)*Math.sin(aaaa)
                        y = r*Math.cos(bbbb)
                        kulka.dajkule().position.set(x,y,z)
                        t=1

                    }
                }   
                requestAnimationFrame(render);
                renderer.render(scene, camera);
            }
        
            render();
    }
}
