class Pionek{
    constructor(mapa){
        this._mapa=mapa
        var container = new THREE.Object3D() // kontener na obiekty 3D
        var geometry = new THREE.CylinderGeometry( 4, 4, 3, 25 );
        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, 
            map: new THREE.TextureLoader().load(mapa) ,
            transparent: true, 
            opacity: 0.8,
            });
        /*var material2 = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide, 
            map: new THREE.TextureLoader().load('static/textures/tekstura2.jpg') ,
            transparent: true, 
            opacity: 0.8,
            });*/
        var cube = new THREE.Mesh(geometry, material);
        
        return cube
    }
}