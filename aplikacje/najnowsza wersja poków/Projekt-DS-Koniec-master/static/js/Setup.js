console.log("konstruktor klasy Setup")

class Setup{

    constructor() {
        this.gracz=null
        this.pokemontab=[]
    }
    start(info,gracz,ataki){
        console.log(ataki)
        this.gracz=gracz
        console.log(gracz)
        console.log(info)
        var window = document.createElement("div")
        window.className="window"
        $("#test").append(window)
        var smollerwindow = document.createElement("div")
        smollerwindow.className = "smollerwindow"
        $(window).append(smollerwindow)
        var that = this

        var oknoinformacyjne = document.createElement("div")
        oknoinformacyjne.className = "oknoinformacyjne"
        $(window).append(oknoinformacyjne)

        for(var a=0;a<6;a++){
            var okienko = document.createElement("div")
            okienko.className="okienko"
            okienko.id="okienko_"+a
            $(smollerwindow).append(okienko)
            var lista = document.createElement("select")
            lista.id="lista_"+a
            lista.style.position="absolute"
            lista.style.width="100px"
            lista.style.left="75px"
            lista.style.top="125px"
            $(okienko).append(lista)
            for(var b = 0;b<info.length;b++){
                lista.innerHTML+="<option value='"+b+"'>"+info[b].name+"</option>"
            }
            var index
            document.getElementById("lista_"+a).oninput = function(){
                var numer = this.id
                numer = numer.split("_")
                numer = numer[1]
                console.log(this.value)
                index = this.value
                var umiejki = info[index].avaibleAbilities.split(",")
                that.pokemontab[numer]={
                    id:numer,
                    name:info[index].name,
                    usableMoves:info[index].usableMoves.split(","),
                    moves:["","","",""],
                    firstType:info[index].firstType,
                    secondType:info[index].secondType,
                    HP:parseInt(info[index].minHP),
                    attack:parseInt(info[index].minAttack),
                    defense:parseInt(info[index].minDefense),
                    spAttack:parseInt(info[index].minSpAttack),
                    spDefense:parseInt(info[index].minSpDefense),
                    speed:parseInt(info[index].minSpeed),
                    availablePoints:200,
                    weakness:info[index].weakness.split(","),
                    doubleWeakness:info[index].doubleWeakness.split(","),
                    immunity:info[index].immunity.split(","),
                    resistance:info[index].resistance.split(","),
                    doubleResistance:info[index].doubleResistance.split(","),
                    availableAbilities:info[index].avaibleAbilities,
                    ability:umiejki[0],
                    heldItem:"None",
                    minHP:parseInt(info[index].minHP),
                    maxHP:parseInt(info[index].maxHP),
                    minAttack:parseInt(info[index].minAttack),
                    maxAttack:parseInt(info[index].maxAttack),
                    minDefense:parseInt(info[index].minDefense),
                    maxDefense:parseInt(info[index].maxDefense),
                    minSpAttack:parseInt(info[index].minSpAttack),
                    maxSpAttack:parseInt(info[index].maxSpAttack),
                    minSpDefense:parseInt(info[index].minSpDefense),
                    maxSpDefense:parseInt(info[index].maxSpDefense),
                    minSpeed:parseInt(info[index].minSpeed),
                    maxSpeed:parseInt(info[index].maxSpeed)
                }
                console.log(that.pokemontab)
                if(document.getElementById("okienko_"+numer).children.length==1){
                    var sprite = document.createElement("img")
                    sprite.src="res/sprites/"+info[index].name+".gif"
                    if(info[index].name=="Dugtrio" || info[index].name=="Donphan"){
                        sprite.style.marginTop="50px"
                    }
                    else if(info[index].name=="Venusaur" || info[index].name=="Metagross" || info[index].name=="Nidoking" || info[index].name=="Glalie"  || info[index].name=="Arcanine"){
                        sprite.style.marginTop="30px"
                    }
                    else if(info[index].name=="Houndoom" || info[index].name=="Hitmonchan"){
                        sprite.style.marginTop="20px"
                    }
                    else if(info[index].name=="Pidgeot" ){
                        sprite.style.marginTop="0px"
                    }
                    else{
                        sprite.style.marginTop="10px"
                    }
                    $(document.getElementById("okienko_"+numer)).append(sprite) 
                    var stats = document.createElement("div")
                    stats.className = "stats"
                    $(document.getElementById("okienko_"+numer)).append(stats)
                    if(that.pokemontab[numer].secondType==""){
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"</p>"
                    }
                    else{
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"/"+that.pokemontab[numer].secondType+"</p>"
                    }
                    stats.innerHTML+="<p>HP:"+that.pokemontab[numer].HP+"</p><p>Attack:"+that.pokemontab[numer].attack+"</p><p>Defense:"+that.pokemontab[numer].defense+"</p><p>SpAttack:"+that.pokemontab[numer].spAttack+"</p><p>SpDefense:"+that.pokemontab[numer].spDefense+"</p><p>Speed:"+that.pokemontab[numer].speed+"</p><p>Ability:"+that.pokemontab[numer].ability+"</p><p>Held Item:"+that.pokemontab[numer].heldItem+"</p>"
                    document.getElementById("okienko_"+numer).addEventListener("click",function(){
                        setup.oknostatystyk(numer,ataki)
                    })
                    setup.oknostatystyk(numer,ataki)
                }
                else
                {
                    var sprite = document.getElementById("okienko_"+numer).children[1]
                    sprite.src="res/sprites/"+info[index].name+".gif"
                    if(info[index].name=="Dugtrio" || info[index].name=="Donphan"){
                        sprite.style.marginTop="50px"
                    }
                    else if(info[index].name=="Venusaur" || info[index].name=="Metagross" || info[index].name=="Nidoking" || info[index].name=="Glalie"  || info[index].name=="Arcanine"){
                        sprite.style.marginTop="30px"
                    }
                    else if(info[index].name=="Houndoom" || info[index].name=="Hitmonchan"){
                        sprite.style.marginTop="20px"
                    }
                    else if(info[index].name=="Pidgeot" ){
                        sprite.style.marginTop="0px"
                    }
                    else{
                        sprite.style.marginTop="10px"
                    }
                    var stats = document.getElementById("okienko_"+numer).children[2]
                    if(that.pokemontab[numer].secondType==""){
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"</p>"
                    }
                    else{
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"/"+that.pokemontab[numer].secondType+"</p>"
                    }
                    stats.innerHTML+="<p>HP:"+that.pokemontab[numer].HP+"</p><p>Attack:"+that.pokemontab[numer].attack+"</p><p>Defense:"+that.pokemontab[numer].defense+"</p><p>SpAttack:"+that.pokemontab[numer].spAttack+"</p><p>SpDefense:"+that.pokemontab[numer].spDefense+"</p><p>Speed:"+that.pokemontab[numer].speed+"</p><p>Ability:"+that.pokemontab[numer].ability+"</p><p>Held Item:"+that.pokemontab[numer].heldItem+"</p>"
                    setup.oknostatystyk(numer,ataki)
                }
            }
        }
        var pomoc = document.createElement("div")
        pomoc.id="pomoc"
        pomoc.innerHTML="Help"
        $(window).append(pomoc)
        var pomocopis = document.createElement("div")
        pomocopis.style.width="400px"
        pomocopis.style.height="400px"
        pomocopis.style.position="absolute"
        pomocopis.style.top="20px"
        pomocopis.style.left="400px"
        pomocopis.style.display="none"
        pomocopis.style.zIndex="5"
        pomocopis.style.textAlign="center"
        pomocopis.style.backgroundColor="white"
        pomocopis.style.border="1px solid black"
        pomocopis.id="a"
        pomocopis.innerHTML="Aby rozpocząć grę należy wybrać 6 pokemonów, każdy na określony slot. Następnie należy wybrać im 4 ataki, którymi będą się posługiwać w walce. Są określone 3 typy ataków: fizyczne, specjalne i efekty statusu. Pierwsze opierają się na statystykach Attack i Defense, drugie na spAttack i spDefense, zaś trzecie na żadnych z nich. Sześć z suwaków odpowiadają za statystyki, które można wzmocnić. Gracz ma do rozdysponowania 200 punktów, 100 starcza na maksymalne wzmocnienie jednej ze statystyk. Są także przedmioty jednorazowego użytku, które leczą określony im status pokemona, na przykład paraliż, czy podpalenie. Umiejętności nic nie robią, bo nie zdążyłem. Aby zmienić ponownie ataki, czy statystyki pokemona należy kliknąć na jego slot i w oknie edycji (to na prawo) można dokonać zmian. Także po wybraniu ruchu, czy przedmiotu pojawi się jego opis określający właściwości, celność, moc itd (PP też nic nie robi, miał liczyć ile ruchów zostało)<br/> <br/>Kliknij to okno, by je wyłączyć"
        $(window).append(pomocopis)
        pomocopis.onclick=function(){
            this.style.display="none"
        }
        pomoc.onclick=function(){
            //bla bla 
            document.getElementById("a").style.display="block"
        }
        var potwierdzenie = document.createElement("div")
        potwierdzenie.id="potwierdzenie"
        potwierdzenie.innerHTML="Play"
        $(window).append(potwierdzenie)
        potwierdzenie.onclick=function(){
            var zezwolenie = true
            for(var a=0;a<6;a++){
                if(that.pokemontab[a]){
                    for(var b=0;b<4;b++){
                        if(!that.pokemontab[a].moves[b]){
                            zezwolenie=false
                        }
                    }
                }
                else{
                    zezwolenie=false
                }
            }
            if(zezwolenie){
                var druzyna = []
                for(var a=0;a<6;a++){
                    druzyna[a]={
                        id:that.pokemontab[a].id,
                        name:that.pokemontab[a].name,
                        moves:that.pokemontab[a].moves,
                        firstType:that.pokemontab[a].firstType,
                        secondType:that.pokemontab[a].secondType,
                        heldItem:that.pokemontab[a].heldItem,
                        ability:that.pokemontab[a].ability,
                        weakness:that.pokemontab[a].weakness,
                        doubleWeakness:that.pokemontab[a].doubleWeakness,
                        immunity:that.pokemontab[a].immunity,
                        resistance:that.pokemontab[a].resistance,
                        doubleResistance:that.pokemontab[a].doubleResistance,
                        HP:that.pokemontab[a].HP,
                        maxHP:that.pokemontab[a].HP,
                        attack:that.pokemontab[a].attack,
                        defense:that.pokemontab[a].defense,
                        spAttack:that.pokemontab[a].spAttack,
                        spDefense:that.pokemontab[a].spDefense,
                        speed:that.pokemontab[a].speed,
                        attackMultiplier:0,
                        defenseMultiplier:0,
                        spAttackMultiplier:0,
                        spDefenseMultiplier:0,
                        speedMultiplier:0,
                        isAlive:"yes",
                        status:"None",
                        sleepCounter:0,
                        paralyseSpeed:1
                    }
                }
                document.getElementById("a").style.display="none"
                net.wyslaniedruzyn(druzyna,that.gracz)
                console.log(druzyna)
            }
        }
    }
    oknostatystyk(numer,ataki){
            document.getElementsByClassName("oknoinformacyjne")[0].innerHTML=""
            document.getElementsByClassName("oknoinformacyjne").id="aaa_"+numer
            console.log(this.pokemontab[numer])
            console.log(numer)
            var that=this
            var itemy = document.createElement("select")

            var informacjeruchow = document.createElement("div")
            informacjeruchow.id="informacjeruchow"
            $(document.getElementsByClassName("oknoinformacyjne")).append(informacjeruchow)

            itemy.id="itemy"
            itemy.innerHTML="<option value='Cheri Berry'>Cheri Berry</option><option value='Chesto Berry'>Chesto Berry</option><option value='Pecha Berry'>Pecha Berry</option><option value='Rawst Berry'>Rawst Berry</option><option value='Aspear Berry'>Aspear Berry</option>"
            $(document.getElementsByClassName("oknoinformacyjne")).append(itemy)
            itemy.oninput = function(){
                switch(this.value){
                    case "Cheri Berry":
                    document.getElementById("informacjeruchow").innerHTML=this.value+": Cures paralysis. "
                    break;
                    case "Chesto Berry":
                    document.getElementById("informacjeruchow").innerHTML=this.value+": Cures sleep. "
                    break;
                    case "Pecha Berry":
                    document.getElementById("informacjeruchow").innerHTML=this.value+": Cures poison. "
                    break;
                    case "Rawst Berry":
                    document.getElementById("informacjeruchow").innerHTML=this.value+": Cures burn"
                    break;
                    case "Aspear Berry":
                    document.getElementById("informacjeruchow").innerHTML=this.value+": Cures freeze. "
                    break;
                }
                that.pokemontab[numer].heldItem=this.value
                var stats = document.getElementById("okienko_"+numer).children[2]
                if(that.pokemontab[numer].secondType==""){
                    stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"</p>"
                }
                else{
                    stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"/"+that.pokemontab[numer].secondType+"</p>"
                }
                stats.innerHTML+="<p>HP:"+that.pokemontab[numer].HP+"</p><p>Attack:"+that.pokemontab[numer].attack+"</p><p>Defense:"+that.pokemontab[numer].defense+"</p><p>SpAttack:"+that.pokemontab[numer].spAttack+"</p><p>SpDefense:"+that.pokemontab[numer].spDefense+"</p><p>Speed:"+that.pokemontab[numer].speed+"</p><p>Ability:"+that.pokemontab[numer].ability+"</p><p>Held Item:"+that.pokemontab[numer].heldItem+"</p>"
            }
            var itemyinfo = document.createElement("p")
            itemyinfo.innerHTML="Held Item:"
            itemyinfo.id="itemyinfo"
            $(document.getElementsByClassName("oknoinformacyjne")).append(itemyinfo)

            var abilities = document.createElement("p")
            abilities.id="abilities"
            abilities.innerHTML="Ability: "+this.pokemontab[numer].availableAbilities
            $(document.getElementsByClassName("oknoinformacyjne")).append(abilities)
            abilities.onclick=function(){
                switch(that.pokemontab[numer].availableAbilities){
                    case "Rock Head":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Protects the Pokémon from recoil damage. "
                    break;
                    case "Static":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": The Pokémon is charged with static electricity, so contact with it may cause paralysis."
                    break;
                    case "Intimidate":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": The Pokémon intimidates opposing Pokémon upon entering battle, lowering their Attack stat. "
                    break;
                    case "Sturdy":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either. "
                    break;
                    case "Poison Touch":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": May poison a target when the Pokémon makes contact."
                    break;
                    case "Inner Focus":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": The Pokémon's intensely focused, and that protects the Pokémon from flinching. "
                    break;
                    case "Arena Trap":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Prevents opposing Pokémon from fleeing. "
                    break;
                    case "Swift Swim":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Boosts the Pokémon's Speed stat in rain."
                    break;
                    case "Ice Body":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": The Pokémon gradually regains HP in a hailstorm. "
                    break;
                    case "Keen Eye":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Keen eyes prevent other Pokémon from lowering this Pokémon's accuracy. "
                    break;
                    case "Early Bird":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": The Pokémon awakens twice as fast as other Pokémon from sleep"
                    break;
                    case "Clear Body":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats. "
                    break;
                    case "Poison Point":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Contact with the Pokémon may poison the attacker."
                    break;
                    case "Natural Cure":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": All status conditions heal when the Pokémon switches out."
                    break;
                    case "Overgrow":
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].availableAbilities+": Powers up Grass-type moves when the Pokémon's HP is low. "
                    break;
                }
            }
            var tabela = []
            
            var tabelastatystyk =  []
            tabelastatystyk[0]=that.pokemontab[numer].HP
            tabelastatystyk[1]=that.pokemontab[numer].attack
            tabelastatystyk[2]=that.pokemontab[numer].defense
            tabelastatystyk[3]=that.pokemontab[numer].spAttack
            tabelastatystyk[4]=that.pokemontab[numer].spDefense
            tabelastatystyk[5]=that.pokemontab[numer].speed
            
            var tabelastatystykmin =  []
            tabelastatystykmin[0]=that.pokemontab[numer].minHP
            tabelastatystykmin[1]=that.pokemontab[numer].minAttack
            tabelastatystykmin[2]=that.pokemontab[numer].minDefense
            tabelastatystykmin[3]=that.pokemontab[numer].minSpAttack
            tabelastatystykmin[4]=that.pokemontab[numer].minSpDefense
            tabelastatystykmin[5]=that.pokemontab[numer].minSpeed

            var tabelastatystykmax =  []
            tabelastatystykmax[0]=that.pokemontab[numer].maxHP
            tabelastatystykmax[1]=that.pokemontab[numer].maxAttack
            tabelastatystykmax[2]=that.pokemontab[numer].maxDefense
            tabelastatystykmax[3]=that.pokemontab[numer].maxSpAttack
            tabelastatystykmax[4]=that.pokemontab[numer].maxSpDefense
            tabelastatystykmax[5]=that.pokemontab[numer].maxSpeed
            var sumka = 0

            var infohp = document.createElement("p")
            infohp.innerHTML="HP"
            infohp.style.left="100px"

            var infoatack = document.createElement("p")
            infoatack.innerHTML="Attack"
            infoatack.style.left="280px"

            var infodefense = document.createElement("p")
            infodefense.innerHTML="Defense"
            infodefense.style.left="82px"
            infodefense.style.top="50px"

            var infospatack = document.createElement("p")
            infospatack.innerHTML="SpAttack"
            infospatack.style.top="50px"
            infospatack.style.left="274px"

            var infospdefense = document.createElement("p")
            infospdefense.innerHTML="SpDefense"
            infospdefense.style.left="77px"
            infospdefense.style.top="100px"

            var infospeed = document.createElement("p")
            infospeed.innerHTML="Speed"
            infospeed.style.top="100px"
            infospeed.style.left="280px"

            $(document.getElementsByClassName("oknoinformacyjne")).append(infohp)
            $(document.getElementsByClassName("oknoinformacyjne")).append(infoatack)
            $(document.getElementsByClassName("oknoinformacyjne")).append(infodefense)
            $(document.getElementsByClassName("oknoinformacyjne")).append(infospatack)
            $(document.getElementsByClassName("oknoinformacyjne")).append(infospdefense)
            $(document.getElementsByClassName("oknoinformacyjne")).append(infospeed)

            for (var a=0;a<6;a++){
                var range = document.createElement("input")
                range.type="range"
                range.id="range_"+a
                range.min=0
                range.max=100
                range.step=25
                range.value=0
                var val = document.createElement("p")
                val.id="val_"+a
                $(document.getElementsByClassName("oknoinformacyjne")).append(val)
                var maks = document.createElement("p")
                maks.id="maks_"+a
                $(document.getElementsByClassName("oknoinformacyjne")).append(maks)
                maks.innerHTML="100"
                $(document.getElementsByClassName("oknoinformacyjne")).append(range)
                tabela.push(range)
                range.oninput = function(){
                    console.log(this.value)
                    var id = this.id.split("_")
                    id=id[1]
                    console.log(id)
                    var wartosc = (tabelastatystykmax[id] - tabelastatystykmin[id]) * (this.value/100)
                    console.log(wartosc)
                    tabelastatystyk[id]=tabelastatystykmin[id]+wartosc
                    var tenlicznik =  (tabelastatystyk[id]- tabelastatystykmin[id])/(tabelastatystykmax[id] - tabelastatystykmin[id]) *100
                    console.log(tenlicznik)
                    document.getElementById("val_"+id).innerHTML=tenlicznik
                    that.pokemontab[numer].HP=tabelastatystyk[0]
                    that.pokemontab[numer].attack=tabelastatystyk[1]
                    that.pokemontab[numer].defense=tabelastatystyk[2]
                    that.pokemontab[numer].spAttack=tabelastatystyk[3]
                    that.pokemontab[numer].spDefense=tabelastatystyk[4]
                    that.pokemontab[numer].speed=tabelastatystyk[5]

                    sumka=0
                    for(var d=0; d<6;d++){
                        sumka = sumka+(tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100
                    }
                    if(sumka<125){
                        for(var d=0; d<6;d++){  
                            document.getElementById("range_"+d).max=100           
                            document.getElementById("maks_"+d).innerHTML=100 
                        }
                    }
                    else if(sumka==125){
                        for(var d=0; d<6;d++){
                            if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                                document.getElementById("range_"+d).max=75
                                document.getElementById("maks_"+d).innerHTML=75
                            }
                            else{
                                document.getElementById("maks_"+d).innerHTML=100 
                            }
                        }
                    }
                    else if(sumka==150){
                        for(var d=0; d<6;d++){
                            if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                                document.getElementById("range_"+d).max=50
                                document.getElementById("maks_"+d).innerHTML=50
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                                document.getElementById("range_"+d).max=75
                                document.getElementById("maks_"+d).innerHTML=75
                            }
                            else{
                                document.getElementById("maks_"+d).innerHTML=100 
                            }
                        }
                    }
                    else if(sumka==175){
                        for(var d=0; d<6;d++){
                            if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                                document.getElementById("range_"+d).max=25
                                document.getElementById("maks_"+d).innerHTML=25
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                                document.getElementById("range_"+d).max=50
                                document.getElementById("maks_"+d).innerHTML=50
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 50){
                                document.getElementById("range_"+d).max=75
                                document.getElementById("maks_"+d).innerHTML=75
                            }
                            else{
                                document.getElementById("maks_"+d).innerHTML=100 
                            }
                        }
                    }
                    else if(sumka==200){
                        for(var d=0; d<6;d++){
                            if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                                document.getElementById("range_"+d).max=0
                                document.getElementById("maks_"+d).innerHTML=0
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                                document.getElementById("range_"+d).max=25
                                document.getElementById("maks_"+d).innerHTML=25
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 50){
                                document.getElementById("range_"+d).max=50
                                document.getElementById("maks_"+d).innerHTML=50
                            }
                            else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 75){
                                document.getElementById("range_"+d).max=75
                                document.getElementById("maks_"+d).innerHTML=75
                            }
                            else{
                                document.getElementById("maks_"+d).innerHTML=100 
                            }
                        }
                    }
                    var stats = document.getElementById("okienko_"+numer).children[2]
                    if(that.pokemontab[numer].secondType==""){
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"</p>"
                    }
                    else{
                        stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"/"+that.pokemontab[numer].secondType+"</p>"
                    }
                    stats.innerHTML+="<p>HP:"+that.pokemontab[numer].HP+"</p><p>Attack:"+that.pokemontab[numer].attack+"</p><p>Defense:"+that.pokemontab[numer].defense+"</p><p>SpAttack:"+that.pokemontab[numer].spAttack+"</p><p>SpDefense:"+that.pokemontab[numer].spDefense+"</p><p>Speed:"+that.pokemontab[numer].speed+"</p><p>Ability:"+that.pokemontab[numer].ability+"</p><p>Held Item:"+that.pokemontab[numer].heldItem+"</p>"
                    
                }
                
            
                range.value=(tabelastatystyk[a]- tabelastatystykmin[a])/(tabelastatystykmax[a] - tabelastatystykmin[a]) *100
                val.innerHTML=range.value
            }
            for(var d=0; d<6;d++){
                sumka = sumka+(tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100
            }
            if(sumka<125){
                for(var d=0; d<6;d++){  
                    document.getElementById("range_"+d).max=100   
                    document.getElementById("maks_"+d).innerHTML=100 
                }
            }
            else if(sumka==125){
                for(var d=0; d<6;d++){
                    if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                        document.getElementById("range_"+d).max=75
                        document.getElementById("maks_"+d).innerHTML=75
                    }
                    else{
                        document.getElementById("maks_"+d).innerHTML=100 
                    }
                }
            }
            else if(sumka==150){
                for(var d=0; d<6;d++){
                    if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                        document.getElementById("range_"+d).max=50
                        document.getElementById("maks_"+d).innerHTML=50
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                        document.getElementById("range_"+d).max=75
                        document.getElementById("maks_"+d).innerHTML=75
                    }
                    else{
                        document.getElementById("maks_"+d).innerHTML=100 
                    }
                }
            }
            else if(sumka==175){
                for(var d=0; d<6;d++){
                    if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                        document.getElementById("range_"+d).max=25
                        document.getElementById("maks_"+d).innerHTML=25
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                        document.getElementById("range_"+d).max=50
                        document.getElementById("maks_"+d).innerHTML=50
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 50){
                        document.getElementById("range_"+d).max=75
                        document.getElementById("maks_"+d).innerHTML=75
                    }
                    else{
                        document.getElementById("maks_"+d).innerHTML=100 
                    }
                }
            }
            else if(sumka==200){
                for(var d=0; d<6;d++){
                    if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 0){
                        document.getElementById("range_"+d).max=0
                        document.getElementById("maks_"+d).innerHTML=0
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 25){
                        document.getElementById("range_"+d).max=25
                        document.getElementById("maks_"+d).innerHTML=25
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 50){
                        document.getElementById("range_"+d).max=50
                        document.getElementById("maks_"+d).innerHTML=50
                    }
                    else if((tabelastatystyk[d]- tabelastatystykmin[d])/(tabelastatystykmax[d] - tabelastatystykmin[d]) *100 == 75){
                        document.getElementById("range_"+d).max=75
                        document.getElementById("maks_"+d).innerHTML=75
                    }
                    else{
                        document.getElementById("maks_"+d).innerHTML=100 
                    }
                }
            }
            
            console.log(tabela)
            console.log(tabelastatystyk)
            console.log(tabelastatystykmin)
            console.log(tabelastatystykmax)     
            var movestitle = document.createElement("p")
            movestitle.innerHTML="Current moves"
            movestitle.id="movestitle"
            $(document.getElementsByClassName("oknoinformacyjne")).append(movestitle)
            for(var e=0;e<this.pokemontab[numer].moves.length;e++){
                var move = document.createElement("p")
                move.id="move_"+e
                move.innerHTML=(e+1)+": " +this.pokemontab[numer].moves[e].name
                if(this.pokemontab[numer].moves[e].name==undefined){
                    move.innerHTML=(e+1)+": "
                }
                $(document.getElementsByClassName("oknoinformacyjne")).append(move)
                move.onclick=function(){
                    var id=this.id.split("_")
                    id=id[1]
                    if(that.pokemontab[numer].moves[id].description){
                        document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].moves[id].name+": "+ that.pokemontab[numer].moves[id].description +"<br/>Power: "+that.pokemontab[numer].moves[id].power+"<br/>Accuracy: "+that.pokemontab[numer].moves[id].accuracy+"<br/>PP :"+that.pokemontab[numer].moves[id].maxPP+"<br/>Type: "+that.pokemontab[numer].moves[id].type+"<br/>Target: "+that.pokemontab[numer].moves[id].target
                    }     
                }
            }
            for(var f=0;f<4;f++){
                var wybieratak=document.createElement('select')
                wybieratak.id="wybieratak_"+f
                for(var a=0;a<that.pokemontab[numer].usableMoves.length;a++){
                    var option="<option value='"+(parseInt(that.pokemontab[numer].usableMoves[a])-1)+"'>"+ataki[(parseInt(that.pokemontab[numer].usableMoves[a])-1)].name+"</option>"
                    wybieratak.innerHTML+=option
                }
                $(document.getElementsByClassName("oknoinformacyjne")).append(wybieratak)
                wybieratak.oninput=function(){
                    var numerek = this.id.split("_")
                    numerek=numerek[1]
                    var id=numerek
                    console.log(numerek)
                    console.log(that.pokemontab[numer])
                    console.log(ataki[this.value])
                    that.pokemontab[numer].moves[numerek]=ataki[this.value]
                    document.getElementById("move_"+numerek).innerHTML=(parseInt(numerek)+1)+": " +that.pokemontab[numer].moves[numerek].name
                    document.getElementById("informacjeruchow").innerHTML=that.pokemontab[numer].moves[id].name+": "+ that.pokemontab[numer].moves[id].description +"<br/>Power: "+that.pokemontab[numer].moves[id].power+"<br/>Accuracy: "+that.pokemontab[numer].moves[id].accuracy+"<br/>PP :"+that.pokemontab[numer].moves[id].maxPP+"<br/>Type: "+that.pokemontab[numer].moves[id].type+"<br/>Target: "+that.pokemontab[numer].moves[id].target
                }
            }
            /*
            var stats = document.getElementById("okienko_"+numer).children[2]
            if(that.pokemontab[numer].secondType==""){
                stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"</p>"
            }
            else{
                stats.innerHTML="<p>Type:"+that.pokemontab[numer].firstType+"/"+that.pokemontab[numer].secondType+"</p>"
            }
            stats.innerHTML+="<p>HP:"+that.pokemontab[numer].HP+"</p><p>Attack:"+that.pokemontab[numer].attack+"</p><p>Defense:"+that.pokemontab[numer].defense+"</p><p>SpAttack:"+that.pokemontab[numer].spAttack+"</p><p>SpDefense:"+that.pokemontab[numer].spDefense+"</p><p>Speed:"+that.pokemontab[numer].speed+"</p><p>Ability:"+that.pokemontab[numer].ability+"</p><p>Held Item:"+that.pokemontab[numer].heldItem+"</p>"
            */
        console.log(ataki)
        console.log(this.pokemontab[numer].moves)
        console.log(this.pokemontab[numer].usableMoves)
    }
    jakitogracz(data){
        document.getElementById("test").innerHTML=""
        main3d.rozpoczecie(data,this.gracz)
    }
}