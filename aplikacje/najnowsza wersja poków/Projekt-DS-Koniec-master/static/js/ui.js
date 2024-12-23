console.log("konstruktor klasy Ui")

class Ui{

    constructor() {
        this.player=null
        this.activepokemon=null;
        this.team=null;
        this.enemy=null
    }
    rozpoczecie(data,gracz){
        this.player=gracz
        if(gracz=="pierwszy"){
            this.activepokemon=data.firstplayer[0]
            this.team=data.firstplayer
            this.enemy=data.secondplayer[0]
        }
        else{
            this.activepokemon=data.secondplayer[0]
            this.team=data.secondplayer
            this.enemy=data.firstplayer[0]
        }
        main3d.startowemodele(this.activepokemon.name,this.enemy.name,this.player)

        document.getElementById("test").style.position="relative"
        var oknogracza = document.createElement("div")
        oknogracza.id="oknogracza"
        $("#test").append(oknogracza)

        var przebiegwalki=document.createElement("div")
        przebiegwalki.id="przebiegwalki"
        $("#test").append(przebiegwalki)

        var oknoprzeciwnika = document.createElement("div")
        oknoprzeciwnika.id="oknoprzeciwnika"
        $("#test").append(oknoprzeciwnika)

        var pomoc = document.createElement("div")
        pomoc.id="pomocwwalce"
        $("#test").append(pomoc)
        pomoc.onclick=function(){

        }


        var pomoc = document.createElement("div")
        pomoc.id="pomoc2"
        pomoc.innerHTML="Help"
        $("#test").append(pomoc)
        var pomocopis = document.createElement("div")
        pomocopis.style.width="400px"
        pomocopis.style.height="400px"
        pomocopis.style.position="absolute"
        pomocopis.style.top="20px"
        pomocopis.style.right="20px"
        pomocopis.style.display="none"
        pomocopis.style.zIndex="5"
        pomocopis.style.textAlign="center"
        pomocopis.style.backgroundColor="white"
        pomocopis.id="a"
        pomocopis.style.border="1px solid black"
        pomocopis.innerHTML="W lewym górnym oknie jest ukazane procentowo ile życia pozostało wrogowi, w dolnym lewy rogu zapisywane będzie ciągle przebieg rund, czy ktoś umarł, ile obrażeń zadano itd. Drugie dolne okno jest podzielone na trzy sekcje. W pierwszej są dostępne ataki dla pokemona. W drugiej są statystyki, trzymany przedmiot, status i życie. Zaś w trzecim jest reszta drużyny. Celem gry jest pokonanie wszystkich wrogich pokemonów. W turze można użyć jednego z ruchu, bądz zmienić swojego pokemona. Niektóre ataki działają silniej lub słabiej na pokemony o określonym typie np, typ Normal nie jest efektywny na Steel, albo Water jest efektywny na Fire.   <br/> <br/>Kliknij to okno, by je wyłączyć"
        $("#test").append(pomocopis)
        pomocopis.onclick=function(){
            this.style.display="none"
        }
        pomoc.onclick=function(){
            //bla bla 
            document.getElementById("a").style.display="block"
        }

        ui.twojeui()
        ui.wróg()
    }
    twojeui(){
        var that = this
        var oknogracza=document.getElementById("oknogracza")
        oknogracza.innerHTML=""
        for(var a=0;a<4;a++){
            var okno = document.createElement("div")
            $(oknogracza).append(okno)
            okno.id="okno_"+a
            okno.innerHTML=that.activepokemon.moves[a].name+"<br/>Power: "+that.activepokemon.moves[a].power+"<br/>Accuracy: "+that.activepokemon.moves[a].accuracy+"<br/>PP :"+that.activepokemon.moves[a].currentPP+"<br/>Type: "+that.activepokemon.moves[a].type
            okno.onclick=function(){
                var a= this.id.split("_")
                a=a[1]
                document.getElementById("oknogracza").innerHTML="waiting for oponent"
                net.ruchpokemona(that.player,that.activepokemon,that.activepokemon.moves[a])
            }
        }
        var aktywnypokemon = document.createElement("div")
        aktywnypokemon.id="aktywnypokemon"
        $(oknogracza).append(aktywnypokemon)
        var sprite = document.createElement("img")
            sprite.src="res/sprites/"+that.activepokemon.name+".gif"
            if(that.activepokemon.name=="Dugtrio" || that.activepokemon.name=="Donphan"){
                sprite.style.marginTop="50px"
                sprite.style.marginLeft="50px"
            }
            else if(that.activepokemon.name=="Venusaur" || that.activepokemon.name=="Metagross" || that.activepokemon.name=="Nidoking" || that.activepokemon.name=="Glalie"  || that.activepokemon.name=="Arcanine"){
                sprite.style.marginTop="30px"
                sprite.style.marginLeft="30px"
            }
            else if(that.activepokemon.name=="Houndoom" || that.activepokemon.name=="Hitmonchan"){
                sprite.style.marginTop="20px"
                sprite.style.marginLeft="20px"
            }
            else if(that.activepokemon.name=="Pidgeot" ){
                sprite.style.marginTop="0px"
                sprite.style.marginLeft="0px"
            }
            else{
                sprite.style.marginTop="10px"
                sprite.style.marginLeft="10px"
            }
            $(aktywnypokemon).append(sprite) 
        var stats = document.createElement("div")
        stats.id="stats"
        stats.innerHTML+="<p>HP:"+Math.floor(that.activepokemon.HP)+"/"+ Math.floor(that.activepokemon.maxHP)+"</p><p>Attack:"+that.activepokemon.attack+"</p><p>Defense:"+that.activepokemon.defense+"</p><p>SpAttack:"+that.activepokemon.spAttack+"</p><p>SpDefense:"+that.activepokemon.spDefense+"</p><p>Speed:"+that.activepokemon.speed+"</p><p>Ability:"+that.activepokemon.ability+"</p><p>Held Item:"+that.activepokemon.heldItem+"</p><p>Status:"+that.activepokemon.status+"</p>"
        $(aktywnypokemon).append(stats)

        var reszta = document.createElement("div")
        reszta.id="reszta"
        $(oknogracza).append(reszta)
        reszta.innerHTML="---- Your other pokemon ----"
        reszta.style.textAlign="center"
        for(var b=0;b<6;b++){
            var pok = document.createElement("div")
            pok.id="pok_"+b
            pok.innerHTML="<p>"+that.team[b].name+"</p><p>Is alive: "+that.team[b].isAlive+"</p>"
            if(that.team[b]==that.activepokemon){
                pok.innerHTML+="<p>Currently out</p>"
            }
            pok.style.width="80px"
            pok.style.height="70px"
            pok.style.float="left"
            pok.style.border="1px solid black"
            $(reszta).append(pok)
            pok.onclick=function(){
                var a=this.id.split("_")
                var a=a[1]
                if(that.team[a].isAlive=="yes" && that.team[a]!=that.activepokemon){
                    that.activepokemon=that.team[a]
                    var aaa = "change"
                    document.getElementById("oknogracza").innerHTML="waiting for oponent"
                    net.ruchpokemona(that.player,that.team[a],aaa)
                }
            }
        }

    }
    wróg(){
        var oknoprzeciwnika=document.getElementById("oknoprzeciwnika")
        oknoprzeciwnika.innerHTML="<p>"+this.enemy.name+"</p><p>"+Math.floor(this.enemy.HP/this.enemy.maxHP*100)+"%</p>"
    }
    ruch(data){
        console.log(data)
        main3d.animacja(data.animacja,data.pokemon)
        if(this.player=="pierwszy"){
            this.activepokemon=data.pokemon.firstplayer
            this.enemy=data.pokemon.secondplayer
            var id=parseInt(data.pokemon.firstplayer.id)
            this.team[id]=this.activepokemon
        }
        else{
            this.enemy=data.pokemon.firstplayer
            this.activepokemon=data.pokemon.secondplayer
            var id=parseInt(data.pokemon.secondplayer.id)
            this.team[id]=this.activepokemon
        }
        var aaaaa = document.getElementById("przebiegwalki")
        aaaaa.innerHTML=data.odezwa
        if(data.odezwa==undefined){
            aaaaa.innerHTML=""
        }
        ui.twojeui()
        ui.wróg()
        if(this.activepokemon.isAlive=="no"){
            if(this.team[0].isAlive=="no" && this.team[1].isAlive=="no" && this.team[2].isAlive=="no" && this.team[3].isAlive=="no" && this.team[4].isAlive=="no" && this.team[5].isAlive=="no"){
                console.log("rip")
                console.log(this.player)
                net.koniec(this.player)
            } 
            else
            {
            var oknogracza=document.getElementById("oknogracza")
            oknogracza.innerHTML=""
            var informacyjka = document.createElement("div")
            informacyjka.innerHTML="Select you other pokemon"
            $(oknogracza).append(informacyjka)
            informacyjka.style.position="absolute"
            informacyjka.style.left="0"
            informacyjka.style.top="0"
            var aktywnypokemon = document.createElement("div")
            aktywnypokemon.id="aktywnypokemon"
            $(oknogracza).append(aktywnypokemon)
            var that = this
            var sprite = document.createElement("img")
                sprite.src="res/sprites/"+that.activepokemon.name+".gif"
                if(that.activepokemon.name=="Dugtrio" || that.activepokemon.name=="Donphan"){
                    sprite.style.marginTop="50px"
                    sprite.style.marginLeft="50px"
                }
                else if(that.activepokemon.name=="Venusaur" || that.activepokemon.name=="Metagross" || that.activepokemon.name=="Nidoking" || that.activepokemon.name=="Glalie"  || that.activepokemon.name=="Arcanine"){
                    sprite.style.marginTop="30px"
                    sprite.style.marginLeft="30px"
                }
                else if(that.activepokemon.name=="Houndoom" || that.activepokemon.name=="Hitmonchan"){
                    sprite.style.marginTop="20px"
                    sprite.style.marginLeft="20px"
                }
                else if(that.activepokemon.name=="Pidgeot" ){
                    sprite.style.marginTop="0px"
                    sprite.style.marginLeft="0px"
                }
                else{
                    sprite.style.marginTop="10px"
                    sprite.style.marginLeft="10px"
                }
                $(aktywnypokemon).append(sprite) 
            var stats = document.createElement("div")
            stats.id="stats"
            stats.innerHTML+="<p>HP:"+Math.floor(that.activepokemon.HP)+"/"+Math.floor(that.activepokemon.maxHP)+"</p><p>Attack:"+that.activepokemon.attack+"</p><p>Defense:"+that.activepokemon.defense+"</p><p>SpAttack:"+that.activepokemon.spAttack+"</p><p>SpDefense:"+that.activepokemon.spDefense+"</p><p>Speed:"+that.activepokemon.speed+"</p><p>Ability:"+that.activepokemon.ability+"</p><p>Held Item:"+that.activepokemon.heldItem+"</p><p>Status:"+that.activepokemon.status+"</p>"
            $(aktywnypokemon).append(stats)

            var reszta = document.createElement("div")
            reszta.id="reszta"
            $(oknogracza).append(reszta)
            reszta.innerHTML="---- Your other pokemon ----"
            reszta.style.textAlign="center"
            for(var b=0;b<6;b++){
                var pok = document.createElement("div")
                pok.id="pok_"+b
                pok.innerHTML="<p>"+that.team[b].name+"</p><p>Is alive: "+that.team[b].isAlive+"</p>"
                if(that.team[b]==that.activepokemon){
                    pok.innerHTML+="<p>Currently out</p>"
                }
                pok.style.width="80px"
                pok.style.height="70px"
                pok.style.float="left"
                pok.style.border="1px solid black"
                $(reszta).append(pok)
                pok.onclick=function(){
                    var a=this.id.split("_")
                    var a=a[1]
                    if(that.team[a].isAlive=="yes" && that.team[a]!=that.activepokemon){
                        that.activepokemon=that.team[a]
                        var aaa = "change"
                        document.getElementById("oknogracza").innerHTML="waiting for oponent"
                        net.pokpadl(that.player,that.team[a],aaa)
                    }
                }
            }
        }
        }
        else if(this.enemy.isAlive=="no"){
            var oknogracza=document.getElementById("oknogracza")
            oknogracza.innerHTML="waiting for oponent"
        }
    }
    koniec(data){
        console.log(this.player)
        if(data.koniec==this.player){
            var oknogracza=document.getElementById("oknogracza")
            oknogracza.innerHTML="you lost"
        }
        else{
            var oknogracza=document.getElementById("oknogracza")
            oknogracza.innerHTML="you won"
        }
    }
}