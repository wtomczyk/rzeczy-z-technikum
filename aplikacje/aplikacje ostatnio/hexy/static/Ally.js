console.log("aasas")
class Ally {

    constructor(){   
 
        this.container = new THREE.Object3D()
        
        this.player = null
        var to = this
        this.model = new Model2()
        this.container.add(this.player) // kontener w którym jest player
 
        this.axes = new THREE.AxesHelper(50) // osie konieczne do kontroli kierunku ruchu
        
        this.model.loadModel("mario/mario.js", function (modeldata){
            to.player=modeldata
            to.container.add(to.player)
            to.player.rotation.y = 3*Math.PI /2
            to.player.add(to.axes)
        })
    }
 
     //funkcja zwracająca kontener
 
     getPlayerCont () {
         return this.container
     }
     //funkcja zwracająca playera
 
     getPlayerMesh () {
         return this.player
     }
     addTo(scene) {
        scene.add(this.container)
    }

 }
 