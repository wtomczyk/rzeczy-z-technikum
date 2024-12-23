class Model2 {

    constructor(){      
       this.container = new THREE.Object3D()
       this.mixer = null
       this.mesh = null
       this.rzecz=null
    }    
 
    loadModel(url, callback) {
        var modelMaterial = new THREE.MeshBasicMaterial(
            {
                map: new THREE.TextureLoader().load("mario/mario2.jpg"),
                morphTargets: true // ta własność odpowiada za animację materiału modelu
            });

         var loader = new THREE.JSONLoader();
 
         loader.load(url, function (geometry) {
            var meshModel = new THREE.Mesh(geometry, modelMaterial)
            meshModel.name = "name";
            meshModel.rotation.y = 1; // ustaw obrót modelu
            meshModel.position.y = 24; // ustaw pozycje modelu
            meshModel.scale.set(1,1,1); // ustaw skalę modelu
            this.mesh=meshModel
            Settings.allies.push(meshModel)

            //stowrzyc osobny model na ally, aby gracz sam siebie nie klikał!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

         // ładowanie modelu jak poprzednio
         this.mixer = new THREE.AnimationMixer(meshModel)
         //utworzenie mixera jak poprzednio
             
             //dodanie modelu do kontenera
             
             this.container.add(meshModel)
 
             // zwrócenie kontenera
 
             callback(this.container); 
 
         }.bind(this))
     };
     
 
    // update mixera
 
     updateModel(delta) {
         if (this.mixer) this.mixer.update(delta)
     };
 
    //animowanie postaci
 
     setAnimation() {
        if(this.rzecz != "run"){
            this.mixer.uncacheRoot(this.mesh)
        }
        this.mixer.clipAction("run").play();
        this.rzecz="run"
     }
     stopAnimation(){
        
        this.mixer.uncacheRoot(this.mesh)
        this.mixer.clipAction("stand").play();
        this.rzecz="stand"
     }
 }