console.log("konstruktor klasy Net")

class Net{
    constructor() {
        this.client=null
    }
    start(){
        var client = io();
        this.client=client
        client.on("onconnect", function (data) {
        if(data.zezwolenie){
            console.log("yos")
            console.log(data.gracz)
            setup.start(data.info,data.gracz,data.ataki)
        }
        else{
            $("#test").text(`get out of here stalker`)
        }
        
    })
    }
    wyslaniedruzyn(team,gracz){
        var client=this.client
        client.emit("join", {
            gracz:gracz,
            team:team
        })
        client.on("join", function (data) {
            console.log(data)
            setup.jakitogracz(data)
        })
        this.client.on("move", function (data) {
            ui.ruch(data)
        })
        this.client.on("death", function (data) {
            ui.ruch(data)
        })
        this.client.on("koniec", function (data) {
            ui.koniec(data)
        })
    }

    ruchpokemona(gracz,pokemon,ruch){
        this.client.emit("move", {
            gracz:gracz,
            pokemon:pokemon,
            ruch:ruch
        })
    }
    pokpadl(gracz,pokemon){
        this.client.emit("death", {
            gracz:gracz,
            pokemon:pokemon
        })
    }
    koniec(koniec){
        this.client.emit("koniec", {
            koniec:koniec
        })
    }
}