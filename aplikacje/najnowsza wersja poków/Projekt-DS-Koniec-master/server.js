var express = require("express")
var app = express();
var Datastore = require('nedb')
var http = require('http').createServer(app);
var io = require('socket.io')(http);
require(`colors`)

app.use(express.static('static'))

var players = {
    pierwyjplayer:null,
    wtarojplayer:null
}
var a
var coll1 = new Datastore({
    filename: 'pokemon.db',
    autoload: true
});
coll1.find({ }, function (err, docs) {
    a=docs
});
var b
var coll2 = new Datastore({
    filename: 'moves.db',
    autoload: true
});
coll2.find({ }, function (err, docs) {
    b=docs
});
app.post("/", function (req, res) {
    var allData = "";

    // w poniższej funkcji nic nie modyfikujemy
    req.on("data", function (data) {
        allData += data;
    })

    //odsyłane
    req.on("end", function (data) {
        var x = qs.parse(allData);
        map = x;
        

        res.writeHead(200, {
            "content-type": "text/plain:charset=utf-8"
        })
        res.end(JSON.stringify(map, null, 4))
    })
})
var druzyny = {
    firstplayer:null,
    secondplayer:null
}
var activepokemons ={
    firstplayer:null,
    secondplayer:null
}
var move={
    firstplayer:null,
    secondplayer:null
}
var odezwa=""
var pierwszypok = "pierwszy"
var drugipok = "drugi"
var wyliczenia = function(rzucajacy,wrog,ruch,caster){
    if(rzucajacy.isAlive=="yes" && wrog.isAlive=="yes"){
        if(ruch.category=="Physical"){
            odezwa+=rzucajacy.name + " used " +ruch.name+"<br/>"
            var modifier = 1
            var trafienie = Math.floor(Math.random() * 100)+1
            if(trafienie<=ruch.accuracy){
                if(rzucajacy.status=="Burned"){
                    modifier=modifier/2
                }
                if(ruch.type==rzucajacy.firstType || ruch.type==rzucajacy.secondType){
                    modifier=modifier*1.5
                }
                var critchance = Math.floor(Math.random() * 24)+1
                if(critchance==7){
                    modifier=modifier*1.5
                    odezwa+="critical strike <br/>"
                }
                for(var a=0;a<wrog.doubleWeakness.length;a++){
                    if(ruch.type==wrog.doubleWeakness[a]){
                        modifier=modifier*4
                        odezwa+="its really effective <br/>"
                    }
                }
                for(var a=0;a<wrog.weakness.length;a++){
                    if(ruch.type==wrog.weakness[a]){
                        modifier=modifier*2
                        odezwa+="its very effective <br/>"
                    }
                }
                for(var a=0;a<wrog.immunity.length;a++){
                    if(ruch.type==wrog.immunity[a]){
                        modifier=0
                        odezwa+="it doesnt affect "+wrog.name+ "<br/>"
                    }
                }
                for(var a=0;a<wrog.resistance.length;a++){
                    if(ruch.type==wrog.resistance[a]){
                        modifier=modifier/2
                        odezwa+="its not effective <br/>"
                    }
                }
                for(var a=0;a<wrog.doubleResistance.length;a++){
                    if(ruch.type==wrog.doubleResistance[a]){
                        modifier=modifier/4
                        odezwa+="its not effective <br/>"
                    }
                }
                var damage = (22*parseInt(ruch.power)*parseInt(rzucajacy.attack)/parseInt(wrog.defense)/50+2)*modifier*funckja(rzucajacy.attackMultiplier)/funckja(wrog.defenseMultiplier)
                odezwa+=rzucajacy.name+" dealt "+Math.floor(damage)+ " dmg<br/>"
                wrog.HP=wrog.HP-damage
                if(wrog.HP<0){
                    wrog.HP=0
                }
                else if(wrog.status=="Burned" || wrog.status=="Poisoned"){
                    wrog.HP=wrog.HP-wrog.maxHP/16
                    if(wrog.status=="Burned"){
                        odezwa+=wrog.name+" is burning <br/>"
                    }
                    else{
                        odezwa+=wrog.name+" is hurt by poison<br/>"
                    }
                }
                if(wrog.HP<0){
                    wrog.HP=0
                }
                if(wrog.HP==0){
                    wrog.isAlive="no"
                    odezwa+=wrog.name+" fainted<br/>"
                    if(caster=="pierwszy"){
                        animacja+="drugi_dead;"
                    }
                    else{
                        animacja+="pierwszy_dead;"
                    }
                }
            }
            else{
                odezwa+="it missed <br/>"
            }
        }
        else if(ruch.category=="Special"){
            odezwa+=rzucajacy.name + " used " +ruch.name+"<br/>"
            var modifier = 1
            var trafienie = Math.floor(Math.random() * 100)+1
            if(trafienie<=ruch.accuracy){
                if(ruch.type==rzucajacy.firstType || ruch.type==rzucajacy.secondType){
                    modifier=modifier*1.5
                }
                var critchance = Math.floor(Math.random() * 24)+1
                if(critchance==7){
                    modifier=modifier*1.5
                    odezwa+="critical strike <br/>"
                }
                for(var a=0;a<wrog.doubleWeakness.length;a++){
                    if(ruch.type==wrog.doubleWeakness[a]){
                        modifier=modifier*4
                        odezwa+="its really effective <br/>"
                    }
                }
                for(var a=0;a<wrog.weakness.length;a++){
                    if(ruch.type==wrog.weakness[a]){
                        modifier=modifier*2
                        odezwa+="its very effective <br/>"
                    }
                }
                for(var a=0;a<wrog.immunity.length;a++){
                    if(ruch.type==wrog.immunity[a]){
                        modifier=0
                        odezwa+="it doesnt affect "+wrog.name+ "<br/>"
                    }
                }
                for(var a=0;a<wrog.resistance.length;a++){
                    if(ruch.type==wrog.resistance[a]){
                        modifier=modifier/2
                        odezwa+="its not effective <br/>"
                    }
                }
                for(var a=0;a<wrog.doubleResistance.length;a++){
                    if(ruch.type==wrog.doubleResistance[a]){
                        modifier=modifier/4
                        odezwa+="its not effective <br/>"
                    }
                }
                var damage = (22*parseInt(ruch.power)*parseInt(rzucajacy.spAttack)/parseInt(wrog.spDefense)/50+2)*modifier*funckja(rzucajacy.spAttackMultiplier)/funckja(wrog.spDefenseMultiplier)
                console.log(damage)
                odezwa+=rzucajacy.name+" dealt "+Math.floor(damage)+ " dmg<br/>"
                wrog.HP=wrog.HP-damage
                if(wrog.HP<0){
                    wrog.HP=0
                }
                else if(wrog.status=="Burned" || wrog.status=="Poisoned"){
                    wrog.HP=wrog.HP-wrog.maxHP/16
                    if(wrog.status=="Burned"){
                        odezwa+=wrog.name+" is burning <br/>"
                    }
                    else{
                        odezwa+=wrog.name+" is hurt by poison<br/>"
                    }
                }
                if(wrog.HP<0){
                    wrog.HP=0
                }
                if(wrog.HP==0){
                    wrog.isAlive="no"
                    odezwa+=wrog.name+" fainted<br/>"
                    if(caster=="pierwszy"){
                        animacja+="drugi_dead;"
                    }
                    else{
                        animacja+="pierwszy_dead;"
                    }
                }
            }
            else{
                odezwa+="it missed <br/>"
            }
        }
        else if(ruch.category=="Status"){
            odezwa+=rzucajacy.name+" used "+ruch.name+ " <br/>"
            var stat = ruch.specialEffect.split("_")
            console.log(stat)
            if(stat[0]=="Status"){
                var trafienie = Math.floor(Math.random() * 100)+1
                if(trafienie<=ruch.accuracy){
                    if(wrog.status=="None"){
                        wrog.status=stat[1]
                        if(stat[1]=="Paralysis"){
                            wrog.paralyseSpeed=0.25
                        }
                        if(wrog.heldItem=="Cheri Berry" && wrog.status=="Paralysis"){
                            wrog.heldItem="None"
                            wrog.status="None"
                            odezwa+=wrog.nazwa + " cured Paralysis with Cheri Berry<br/>"
                            wrog.paralyseSpeed=1
                        }
                        if(wrog.heldItem=="Chesto Berry" && wrog.status=="Asleep"){
                            wrog.heldItem="None"
                            wrog.status="None"
                            odezwa+=wrog.nazwa + " cured Sleep with Chesto Berry<br/>"
                        }
                        if(wrog.heldItem=="Pecha Berry" && wrog.status=="Poisoned"){
                            wrog.heldItem="None"
                            wrog.status="None"
                            odezwa+=wrog.nazwa + " cured Poison with Pecha Berry<br/>"
                        }
                        if(wrog.heldItem=="Rawst Berry" && wrog.status=="Burned"){
                            wrog.heldItem="None"
                            wrog.status="None"
                            odezwa+=wrog.nazwa + " cured Burn with Rawst Berry<br/>"
                        }
                        if(wrog.heldItem=="Aspear Berry" && wrog.status=="Frozen"){
                            wrog.heldItem="None"
                            wrog.status="None"
                            odezwa+=wrog.nazwa + " cured Freeze with Aspear Berry<br/>"
                        }
                    }
                    else{
                        odezwa+="but it failed<br/>"
                    }
                }
                else{
                    odezwa+="but it missed<br/>"
                }
            }
            else{
                if(ruch.target=="Foe"){
                    if(stat[0]=="Attack"){
                        odezwa+=wrog.name + " attack dercreases<br/>"
                        wrog.attackMultiplier-=parseInt(stat[2])
                        if(wrog.attackMultiplier<-6){
                            odezwa+="but it wont go lower<br/>"
                            wrog.attackMultiplier=-6
                        }
                    }
                    else if(stat[0]=="Defense"){
                        odezwa+=wrog.name + " defense dercreases<br/>"
                        wrog.defenseMultiplier-=parseInt(stat[2])
                        if(wrog.defenseMultiplier<-6){
                            odezwa+="but it wont go lower<br/>"
                            wrog.defenseMultiplier=-6
                        }
                    }
                    else if(stat[0]=="spAttack"){
                        odezwa+=wrog.name + " spattack dercreases<br/>"
                        wrog.spAttackMultiplier-=parseInt(stat[2])
                        if(wrog.spAttackMultiplier<-6){
                            odezwa+="but it wont go lower<br/>"
                            wrog.spAttackMultiplier=-6
                        }
                    }
                    else if(stat[0]=="spDefense"){
                        odezwa+=wrog.name + " spdefense dercreases<br/>"
                        wrog.spDefenseMultiplier-=parseInt(stat[2])
                        if(wrog.spDefenseMultiplier<-6){
                            odezwa+="but it wont go lower<br/>"
                            wrog.spDefenseMultiplier=-6
                        }
                    }
                    else if(stat[0]=="Speed"){
                        odezwa+=wrog.name + " speed dercreases<br/>"
                        wrog.speedMultiplier-=parseInt(stat[2])
                        if(wrog.speedMultiplier<-6){
                            odezwa+="but it wont go lower<br/>"
                            wrog.speedMultiplier=-6
                        }
                    }
                }
                else{
                    if(stat[0]=="Attack"){
                        odezwa+=rzucajacy.name+" attack increases<br/>"
                        rzucajacy.attackMultiplier+=parseInt(stat[2])
                        if(rzucajacy.attackMultiplier>6){
                            odezwa+="but it wont go higher<br/>"
                            rzucajacy.attackMultiplier=6
                        }
                    }
                    else if(stat[0]=="Defense"){
                        odezwa+=rzucajacy.name+" defense increases<br/>"
                        rzucajacy.defenseMultiplier+=parseInt(stat[2])
                        if(rzucajacy.defenseMultiplier>6){
                            odezwa+="but it wont go higher<br/>"
                            rzucajacy.defenseMultiplier=6
                        }
                    }
                    else if(stat[0]=="spAttack"){
                        odezwa+=rzucajacy.name+" spattack increases<br/>"
                        rzucajacy.spAttackMultiplier+=parseInt(stat[2])
                        if(rzucajacy.spAttackMultiplier>6){
                            odezwa+="but it wont go higher<br/>"
                            rzucajacy.spAttackMultiplier=6
                        }
                    }
                    else if(stat[0]=="spDefense"){
                        odezwa+=rzucajacy.name+" spdefense increases<br/>"
                        rzucajacy.spDefenseMultiplier+=parseInt(stat[2])
                        if(rzucajacy.spDefenseMultiplier>6){
                            odezwa+="but it wont go higher<br/>"
                            rzucajacy.spDefenseMultiplier=6
                        }
                    }
                    else if(stat[0]=="Speed"){
                        odezwa+=rzucajacy.name+" speed increases<br/>"
                        rzucajacy.speedMultiplier+=parseInt(stat[2])
                        if(rzucajacy.speedMultiplier>6){
                            odezwa+="but it wont go higher<br/>"
                            rzucajacy.speedMultiplier=6
                        }
                    }
                }
            }
            if(wrog.status=="Burned" || wrog.status=="Poisoned"){
                wrog.HP=wrog.HP-wrog.maxHP/16
                if(wrog.status=="Burned"){
                    odezwa+=wrog.name+" is burning <br/>"
                }
                else{
                    odezwa+=wrog.name+" is hurt by poison<br/>"
                }
            }
            if(wrog.HP<0){
                wrog.HP=0
            }
            if(wrog.HP==0){
                wrog.isAlive="no"
                odezwa+=wrog.name+" fainted<br/>"
                if(caster=="pierwszy"){
                    animacja+="drugi_dead;"
                }
                else{
                    animacja+="pierwszy_dead;"
                }
            }
        }
    }
}
var animacja=""
var funckja = function(val){
    var speed1=1    
    if(val==1){
        speed1=1.5
    }
    else if(val==2){
        speed1=2
    }
    else if(val==3){
        speed1=2.5
    }
    else if(val==4){
        speed1=3
    }
    else if(val==5){
        speed1=3.5
    }
    else if(val==6){
        speed1=4
    }
    else if(val==-1){
        speed1=2/3
    }
    else if(val==-2){
        speed1=0.5
    }
    else if(val==-3){
        speed1=0.4
    }
    else if(val==-4){
        speed1=1/3
    }
    else if(val==-5){
        speed1=0.28
    }
    else if(val==-6){
        speed1=0.25
    }
    return speed1
}

io.on('connection', function (client) {
    console.log("klient się podłączył" + client.id)
    if(players.pierwyjplayer==null){
        players.pierwyjplayer=client.id
        console.log("dołączył " + players.pierwyjplayer)
        client.emit("onconnect", {
            clientName:client.id,
            zezwolenie:true,
            gracz:"pierwszy",
            info:a,
            ataki:b
    
        })
    }
    else if(players.wtarojplayer==null){
        players.wtarojplayer=client.id
        console.log("dołączył " + players.wtarojplayer)
        client.emit("onconnect", {
            clientName:client.id,
            zezwolenie:true,
            gracz:"drugi",
            info:a,
            ataki:b
        })
    }
    else{
        client.emit("onconnect", {
            clientName:client.id,
            zezwolenie:false
        })
    }

    
    client.on("join", function (data) {
        console.log(data)
        if(data.gracz=="pierwszy"){
            druzyny.firstplayer=data.team
            activepokemons.firstplayer=druzyny.firstplayer[0]
        }
        else{
            druzyny.secondplayer=data.team
            activepokemons.secondplayer=druzyny.secondplayer[0]
        }
        if(druzyny.firstplayer!=null && druzyny.secondplayer!=null){
            io.emit("join", {
                firstplayer:druzyny.firstplayer,
                secondplayer:druzyny.secondplayer
            })
        }
    })
    
    client.on("death", function (data) {
        animacja=""
        console.log(data)
        if(data.gracz=="pierwszy"){
            activepokemons.firstplayer=data.pokemon
            animacja="pierwszy_add"
        }
        else{
            activepokemons.secondplayer=data.pokemon
            animacja="drugi_add"
        }
        if(druzyny.firstplayer!=null && druzyny.secondplayer!=null){
            io.emit("death", {
                pokemon:activepokemons,
                animacja:animacja
            })
        }
    })
    client.on("koniec", function (data) {    
        io.emit("koniec", {
            koniec:data.koniec
        })
        
	})
    
    client.on("move", function (data) {
        animacja=""
        console.log(data)
        if(data.gracz=="pierwszy"){
            activepokemons.firstplayer=data.pokemon
            move.firstplayer=data.ruch
        }
        else{
            activepokemons.secondplayer=data.pokemon
            move.secondplayer=data.ruch
        }
        if(move.firstplayer!=null && move.secondplayer!=null){
            //wyliczanie
            if(move.firstplayer=="change" && move.secondplayer=="change"){
                odezwa = activepokemons.firstplayer.name + " is send out<br/>"+activepokemons.secondplayer.name + " is send out"
                animacja="pierwszy_change;drugi_change"
            }
            else if(move.firstplayer=="change" && move.secondplayer!="change"){
                odezwa = activepokemons.firstplayer.name + " is send out<br/>"
                animacja="pierwszy_change;drugi_animate;"
                wyliczenia(activepokemons.secondplayer,activepokemons.firstplayer,move.secondplayer,drugipok)
            }
            else if(move.firstplayer!="change" && move.secondplayer=="change"){
                odezwa = activepokemons.secondplayer.name + " is send out<br/>"
                animacja="drugi_change;pierwszy_animate;"
                wyliczenia(activepokemons.firstplayer,activepokemons.secondplayer,move.firstplayer,pierwszypok)
            }
            else if(move.firstplayer.priority>move.secondplayer.priority){
                animacja+="pierwszy_animate;"
                wyliczenia(activepokemons.firstplayer,activepokemons.secondplayer,move.firstplayer,pierwszypok)
                animacja+="drugi_animate;"
                wyliczenia(activepokemons.secondplayer,activepokemons.firstplayer,move.secondplayer,drugipok)
            }
            else if(move.firstplayer.priority<move.secondplayer.priority){
                animacja+="drugi_animate;"
                wyliczenia(activepokemons.secondplayer,activepokemons.firstplayer,move.secondplayer,drugipok)
                animacja+="pierwszy_animate;"
                wyliczenia(activepokemons.firstplayer,activepokemons.secondplayer,move.firstplayer,pierwszypok)
            }
            else if(activepokemons.firstplayer.speed*activepokemons.firstplayer.paralyseSpeed*funckja(activepokemons.firstplayer.speedMultiplier)>activepokemons.secondplayer.speed*activepokemons.secondplayer.paralyseSpeed*funckja(activepokemons.secondplayer.speedMultiplier)){
                animacja+="pierwszy_animate;"
                wyliczenia(activepokemons.firstplayer,activepokemons.secondplayer,move.firstplayer,pierwszypok)
                animacja+="drugi_animate;"
                wyliczenia(activepokemons.secondplayer,activepokemons.firstplayer,move.secondplayer,drugipok)
            }
            else{
                animacja+="drugi_animate;"
                wyliczenia(activepokemons.secondplayer,activepokemons.firstplayer,move.secondplayer,drugipok)
                animacja+="pierwszy_animate;"
                wyliczenia(activepokemons.firstplayer,activepokemons.secondplayer,move.firstplayer,pierwszypok)
            }
            io.emit("move", {
                pokemon:activepokemons,
                moves:move,
                odezwa:odezwa,
                animacja:animacja
            })
            console.log("aaaaaa")
            move.firstplayer=null
            move.secondplayer=null
            odezwa=""
        }
	})

    client.on("disconnect", function () {
        console.log(client.id)
        if(players.pierwyjplayer==client.id){
            console.log("poszedł se "+players.pierwyjplayer)
            players.pierwyjplayer=null
            druzyny.firstplayer=null
        }
        else if(players.wtarojplayer==client.id){
            console.log("poszedł se "+players.wtarojplayer)
            players.wtarojplayer=null
            druzyny.secondplayer=null
        }
        else{
        }
        console.log("klient się rozłącza")
    })

    
});



app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('UwU'.bgRed.black)
})

http.listen(3000, function () {
    console.log('listening on 3000'.bgWhite.black);
});