console.log("wczytano plik hex3d.js")

class Hex3D {
    constructor(){
        //var radius = 100 // zmienna wielkość hexagona, a tym samym całego labiryntu
        if(Settings.zezwolenie){
        var container = new THREE.Object3D() // kontener na obiekty 3D

        var geometry = new THREE.BoxGeometry(Settings.radius, 50, 1);
        var geometry2 = new THREE.CylinderGeometry( Settings.radius, Settings.radius, 1, 6 );
        if(Settings.tab.poziom[Settings.licznik].type=="sciana"){
            var wall = new THREE.Mesh(geometry, Settings.material1);
            var cylinder = new THREE.Mesh( geometry2, Settings.material1 );
        }
        else if(Settings.tab.poziom[Settings.licznik].type=="potwor"){
            var wall = new THREE.Mesh(geometry, Settings.material2);
            var cylinder = new THREE.Mesh( geometry2, Settings.material2 );
        }
        else if(Settings.tab.poziom[Settings.licznik].type=="skarb"){
            var wall = new THREE.Mesh(geometry, Settings.material3);
            var cylinder = new THREE.Mesh( geometry2, Settings.material3 );
        }
        else{
            var wall = new THREE.Mesh(geometry, Settings.material4);
            var cylinder = new THREE.Mesh( geometry2, Settings.material4 );
        }
        cylinder.position.y=-25
        cylinder.rotation.y+=22.5
        console.log(Settings.tab)
        console.log(Settings.licznik)
        for (var i = 0; i < 6; i++) {
            var side = wall.clone()
                if(Settings.tab.poziom[Settings.licznik].dirIn==i){
                    var door = new Door
                    door.position.x = (Settings.radius * Math.sqrt(3) / 2) * Math.sin((Math.PI / 3 * i)+Math.PI)
                    door.position.z = -(Settings.radius * Math.sqrt(3) / 2) * Math.cos((Math.PI / 3 * i)+Math.PI)
                    door.lookAt(container.position) // nakierowanie ścian na środek kontenera 3D  
                    container.add(door)
                    Settings.sciany.push(door)
                }
                else if(Settings.tab.poziom[Settings.licznik].dirOut==i){
                    var door = new Door
                    door.position.x = (Settings.radius * Math.sqrt(3) / 2) * Math.sin((Math.PI / 3 * i)+Math.PI)
                    door.position.z = -(Settings.radius * Math.sqrt(3) / 2) * Math.cos((Math.PI / 3 * i)+Math.PI)
                    door.lookAt(container.position) // nakierowanie ścian na środek kontenera 3D  
                    container.add(door)
                    Settings.sciany.push(door)
                }
                else{
                side.position.x = (Settings.radius * Math.sqrt(3) / 2) * Math.sin((Math.PI / 3 * i)+Math.PI)
                side.position.z = -(Settings.radius * Math.sqrt(3) / 2) * Math.cos((Math.PI / 3 * i)+Math.PI)
                side.lookAt(container.position) // nakierowanie ścian na środek kontenera 3D  
                container.add(side)
                Settings.sciany.push(side)
                }
            
        }
        container.add(cylinder)
        if(Settings.tab.poziom[Settings.licznik].type=="skarb"){
            var square = new THREE.BoxGeometry(10, 10, 10);
            var szescian = new THREE.Mesh(square, Settings.material5);
            container.add(szescian)
            szescian.position.y=-20
        }
        if(Settings.tab.poziom[Settings.licznik].type=="ally"){
            //var ally=new Ally()
            //ally.addTo(container)
            //Settings.modeleaalies.push(ally)
            
            //console.log(ally.model.dajmodel())
            //Settings.allies.push(ally.model.dajmodel())
        }
        
    }
    return container  
    }  
}