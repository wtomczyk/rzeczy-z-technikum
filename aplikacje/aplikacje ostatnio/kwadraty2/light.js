class Light {

    constructor(parametrA, parametrB) {

        this.parametrA = parametrA
        this.parametrB = parametrB

        this.container = new THREE.Object3D();

        this.init()
    }

    init() {

        // utworzenie i spozycjonowanie światła
        this.light = new THREE.SpotLight(0x00ff00, 1, 2000, Math.PI/8);
        this.light.position.set(0,0,0);
        this.light.castShadow = true;
        
	// dodanie światła do kontenera
        this.container.add(this.light);
		this.light.lookAt(scene.position)
	// nakierowanie na środek sceny
	//...

        //utworzenie widzialnego elementu reprezentującego światło
        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var materials = new THREE.MeshBasicMaterial({
            color: 0x8888ff,
                side: THREE.DoubleSide,
                wireframe: true,
                transparent: true, 
                opacity: 0.5
            });
        this.mesh = new THREE.Mesh(geometry, materials)
		this.mesh.position.set(0,0,0)
        // dodanie do kontenera
        this.container.add(this.mesh);
    }


    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getLight() {
        return this.container;
    }

    // inne funkcje, np zmiana koloru bryły, zmiana koloru światła

    changeColor (color) {
        this.light.color.set(color)
    }   

}