console.log("wczytano main")

class Main {
    constructor() {
        
    } 
    aaaaaa(info){
        document.getElementById("info").innerHTML=""
        document.getElementById("iduserow").innerHTML=""
        for(var aa = 0; aa< info.length; aa++){
            document.getElementById("info").innerHTML+=info[aa]._id + " " + info[aa].login+ " " +info[aa].password+"<br/>"
            document.getElementById("iduserow").innerHTML+="<option value="+info[aa]._id+">"+info[aa]._id+"</option>"
        }
    }
    dodajzeuzytkownika(){
        var user = document.getElementById("login").value
        var password = document.getElementById("haslo").value
        document.getElementById("login").value=""
        document.getElementById("haslo").value=""
        if(user!="" && password != ""){
            console.log("git")
            info={login:user,password:password}
            console.log(info)
            net.wysłanieinfo(info)
        }
    }
    apdejt(){
        var id = document.getElementById("iduserow").value
        var user = document.getElementById("login").value
        var password = document.getElementById("haslo").value
        document.getElementById("login").value=""
        document.getElementById("haslo").value=""
        if(user!="" && password != ""){
            console.log("git")
            info={id:id,login:user,password:password}
            console.log(info)
            net.update(info)
        }
    }
    usun(){
        var id = document.getElementById("iduserow").value
        net.usun(id)
    }
}
