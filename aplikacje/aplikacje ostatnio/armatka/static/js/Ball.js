class Ball extends THREE.Mesh {

    constructor (){
        console.log("qwqwqwqw")
        super()
        
        var geometry = new THREE.SphereGeometry( 5, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var sphere = new THREE.Mesh( geometry, material );

        this.sphere = sphere
    }
    dajkule () {
        return this.sphere
    }
}