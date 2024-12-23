class Cannon extends THREE.Object3D {

    constructor (){
        console.log("armata")
        super()
        var container = new THREE.Object3D()
       
        var geometry = new THREE.CylinderGeometry( 10, 10, 8, 32 );
        var material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true, 
            opacity: 0.5,
            
        });
        var circle1 = new THREE.Mesh( geometry, material );
        circle1.position.z = -11
        circle1.rotation.x=Math.PI / 2;
        
        var circle2 = new THREE.Mesh( geometry, material );
        circle2.position.z = 11
        circle2.rotation.x=Math.PI / 2;
        
        
        var geometry2 = new THREE.CylinderGeometry( 7, 7, 40, 32 );
        var material2 = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true, 
            opacity: 0.5,
            
        });
        var cylinder = new THREE.Mesh( geometry2, material2 );
        cylinder.position.y=1

        container.add( circle1 );
        container.add( circle2 );
        container.add( cylinder );

        this.armata = cylinder
        this.kolo1 = circle1
        this.kolo2 = circle2
        this.container = container
        //return container
    }

    dajarmate () {
        return this.container
    }
    dajlufe(){
        return this.armata
    }
    dajkolo1(){
        return this.kolo1
    }
    dajkolo2(){
        return this.kolo2
    }
    dajkatlufy(){
        return this.armata.rotation.z
    }
    dajkatarmaty(){
        return this.container.rotation.y
    }
}