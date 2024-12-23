console.log("wczytano main")

class Main {
    constructor() {
        
    } 
    start(){
        var bazy = document.createElement("div")
        bazy.id="bazy"
        document.getElementById("main").append(bazy)

        var kolekcje = document.createElement("div")
        kolekcje.id="kolekcje"
        document.getElementById("main").append(kolekcje)

        var nowabaza = document.createElement("button")
        nowabaza.id="nowabaza"
        document.getElementById("main").append(nowabaza)

        var usunbaze = document.createElement("button")
        usunbaze.id="usunbaze"
        document.getElementById("main").append(usunbaze)

        var nowakolekcja = document.createElement("button")
        nowakolekcja.id="nowakolekcja"
        document.getElementById("main").append(nowakolekcja)

        var usunkolekcje = document.createElement("button")
        usunkolekcje.id="usunkolekcje"
        document.getElementById("main").append(usunkolekcje)

        console.log("aaaaaaaaaaaaaaaaaa")
        var ip = prompt("gibe ip","")
        if(ip!=null){
            document.getElementById("main").innerHTML+=ip

        }
    }
}
