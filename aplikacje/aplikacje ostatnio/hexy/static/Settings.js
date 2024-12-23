console.log("wczytano settings")
var Settings = {
    radius:100,
    material1: new THREE.MeshPhongMaterial( {color: 0x0000ff, side: THREE.DoubleSide} ),
    material2: new THREE.MeshPhongMaterial( {color: 0xff0000, side: THREE.DoubleSide} ),
    material3: new THREE.MeshPhongMaterial( {color: 0xffff00, side: THREE.DoubleSide} ),
    material4: new THREE.MeshPhongMaterial( {color: 0xf0f0f0, side: THREE.DoubleSide} ),
    material5: new THREE.MeshBasicMaterial( {color: 0xf0f0f0, side: THREE.DoubleSide} ),
    tab:[],
    tablicaswiatel:[],
    licznik:0,
    zezwolenie:false,
    dirIn:null,
    allies:[],
    modeleaalies:[],
    chodzacysojusznicy:[],
    directionsojusznikow:[],
    zezwolenie2:true,
    sciany:[],
    meshgracza:null
}
