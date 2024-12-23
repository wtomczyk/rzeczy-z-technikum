var modelMaterial = new THREE.MeshBasicMaterial(
    {
        map: new THREE.TextureLoader().load("mario/mario2.jpg"),
        morphTargets: true // ta własność odpowiada za animację materiału modelu
    });
var loader = new THREE.JSONLoader();
loader.load('mario/mario.js', function (geometry) {
           
    meshModel = new THREE.Mesh(geometry, modelMaterial)
    meshModel.name = "name";
    meshModel.rotation.y = 1; // ustaw obrót modelu
    meshModel.position.y = 0; // ustaw pozycje modelu
    meshModel.scale.set(1,1,1); // ustaw skalę modelu

    //

    scene.add(meshModel);

});

