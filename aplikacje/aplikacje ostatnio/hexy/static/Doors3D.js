class Door{
    constructor(){
        if(Settings.zezwolenie){
            
        var container = new THREE.Object3D()
        var geometry = new THREE.BoxGeometry(Settings.radius/3, 50, 1);
        if(Settings.tab.poziom[Settings.licznik].type=="sciana"){
                var wall1 = new THREE.Mesh(geometry, Settings.material1);
                var wall2 = new THREE.Mesh(geometry, Settings.material1);
                }
                else if(Settings.tab.poziom[Settings.licznik].type=="potwor"){
                    var wall1 = new THREE.Mesh(geometry, Settings.material2);
                    var wall2 = new THREE.Mesh(geometry, Settings.material2);
                }
                else if(Settings.tab.poziom[Settings.licznik].type=="skarb"){
                    var wall1 = new THREE.Mesh(geometry, Settings.material3);
                    var wall2 = new THREE.Mesh(geometry, Settings.material3);
                }
                else{
                    var wall1 = new THREE.Mesh(geometry, Settings.material4);
                    var wall2 = new THREE.Mesh(geometry, Settings.material4);
                }
                
        wall1.position.x=-Settings.radius/3
        wall1.position.z=0
        container.add(wall1)
        wall2.position.x=Settings.radius/3
        wall2.position.z=0
        container.add(wall2)

        return container  
        }
    }
}