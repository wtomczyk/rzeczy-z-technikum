console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
        
    }
    
    renderowanieplikow(pliki, info, rozmiary,pierwszyclick ){
        
        $("#prawy").html("")
        for (let i in pliki) {
            if(pliki[i]!="cover.png"){
            var obiekt = $("<div>")
            if(pierwszyclick){
                info = String(info)
                info = info.split(",")
                info=info[0]
                pierwszyclick=false
            }
            obiekt.addClass(pliki[i])
            $("#prawy").append(obiekt)
            var tablica = $("<table>")
            $(obiekt).append(tablica)
            var tr=$("<tr>")
            $(tablica).append(tr)
            var td1=$("<td>")
            td1.html(info)
            $(tr).append(td1)
            var td2=$("<td>")
            td2.html(pliki[i])
            $(tr).append(td2)
            var td3=$("<td>")
            var rozmiar = rozmiary[i]/1024
            rozmiar = rozmiar.toString()
            console.log(rozmiar)
            rozmiar = rozmiar.split(".")
            td3.html(rozmiar[0] + " KB")
            //td3.html(rozmiary[i])
            $(tr).append(td3)
            var przyciskboczny = $("<div>")
            obiekt.append(przyciskboczny)
            var klasaobiektu=""
            var zezwolenie2=false
            var granie = true
            obiekt.click (function(){
            if(this.id!="nacisniete"){
                if(document.getElementById("nacisniete")!=null){
                    if(document.getElementById("nacisniete")!=this){
                            $("#nacisniete").children("div").css("display","none")
                            var usuntlo=document.getElementById("nacisniete")
                            console.log(usuntlo)
                            $(usuntlo).css( "background-color","gray" )
                            $(usuntlo).attr("id","")     
                    }
                }
                $(document.getElementById("nacisniete2")).css( "background-color","blue" )
                $(document.getElementById("nacisniete2")).attr("id","")
                $( this ).attr("id","nacisniete")
                klasaobiektu=$( this ).attr("class")
                $( this ).children("div").attr("id","nacisniete2")
                console.log(klasaobiektu)
                Music.odpalmuzyke($( this ).attr("class"), info, pierwszyclick)
                ui.przyciskinadol(pliki, $( this ).attr("class"),info)
                Music.playing = false
            }
                if(zezwolenie2){
                    if(aaalicznik==1){
                        aaalicznik=0
                        if(aaa){
                            granie=false
                            aaa=false
                        }
                        else{
                            granie=true
                            aaa=true
                        }
                    }
                    if(granie){
                        console.log("aaa")
                        $("#audio").trigger("pause");
                        Music.playing = false
                        $("#play_button").attr("src", "/static/kontrolki/play.png")
                        $(document.getElementById("nacisniete2")).css( "background-color","blue" )
                    }
                    else{
                        console.log("bbb")
                        $("#audio").trigger("play");
                        Music.playing = true
                        $("#play_button").attr("src", "/static/kontrolki/stop.png")
                        $(document.getElementById("nacisniete2")).css( "background-color","green" )
                    }
                    zezwolenie2=false
                }
            
            })
            przyciskboczny.click(function(){
                zezwolenie2=true
                if(this.id!="nacisniete2"){
                    if(document.getElementById("nacisniete2")!=null){
                        $(document.getElementById("nacisniete2")).css( "background-color","blue" )
                        $(document.getElementById("nacisniete2")).attr("id","")
                    }
                    granie=true
                    Music.odpalmuzyke($(klasaobiektu), info, pierwszyclick)
                    ui.przyciskinadol(pliki, $(klasaobiektu),info)
                }
                if(granie){
                        granie=false
                    }
                    else{
                        granie=true
                    }
            })
            obiekt.on("mouseover", function(){
                $( this ).css( "background-color","red" )
                if($( this ).attr("id")!="nacisniete"){
                    $( this ).children("div").css("display","block")
                }
            })
            obiekt.on("mouseout", function(){
                if($( this ).attr("id")!="nacisniete"){
                $( this ).css( "background-color","gray" )
                $( this ).children("div").css("display","none")
                }
            })

            }
        }
    }
    renderowaniealbumów(obj){
        for (let i in obj.albums) {
            var obiekt = $("<div>")
            obiekt.addClass(obj.albums[i])
            obiekt.append(`<img src='/static/mp3/`+obj.albums[i]+`/cover.png' alt='aaa'>`)
            $("#lewy").append(obiekt)
            obiekt.on("click", function () {
                console.log(this)
                net.pliczki($(this).attr('class'), obj.albums[i])
            })
        }
        this.renderowanieplikow(obj.files, obj.albums, obj.rozmiary,obj.pierwszyclick)
        this.przyciskinadol(obj.files)
    }
    przyciskinadol(pliki, granyteraz,info){
        
        var dousuniecia =""
        var zezwolenie = false
        for(var a=0;a<pliki.length;a++){
            if(pliki[a]=="cover.png"){
                dousuniecia=a
                zezwolenie=true
            }
        }
        if(zezwolenie){
        pliki.splice(dousuniecia,1)
        }
        var lewyprzycisk = $("<img src='/static/kontrolki/back.png'>")


        lewyprzycisk.on("click", () => {
            aaa=false
            aaalicznik=1
            $(document.getElementById("nacisniete2")).css( "background-color","blue" )
            $("#nacisniete").children("div").css("display","none")
            $("#nacisniete").children("div").attr("id","")
            Music.wczesniej(pliki,granyteraz,info)
            $("#nacisniete").children("div").css("display","block")
            $("#nacisniete").children("div").attr("id","nacisniete2")
            $(document.getElementById("nacisniete2")).css( "background-color","green" )
        })


        var srodek = $("<img src='/static/kontrolki/play.png' id='play_button'>")
        srodek.on("click", () => {
            if(aaa){
                aaa=false
                aaalicznik=1
            }
            else{
                aaa=true
                aaalicznik=1
            }
            console.log(aaa)
            Music.odpalenie()
        })


        var prawyprzycisk = $("<img src='/static/kontrolki/next.png'>")
        prawyprzycisk.on("click", () => {
            aaa=false
            aaalicznik=1
            $(document.getElementById("nacisniete2")).css( "background-color","blue" )
            $("#nacisniete").children("div").css("display","none")
            $("#nacisniete").children("div").attr("id","")
            Music.dalej(pliki,granyteraz,info)
            $("#nacisniete").children("div").css("display","block")
            $("#nacisniete").children("div").attr("id","nacisniete2")
            $(document.getElementById("nacisniete2")).css( "background-color","green" )
        })


        var pojemniknaprzyciski = $("<div>")
        $("#dół").html(pojemniknaprzyciski)
        $(pojemniknaprzyciski).append(lewyprzycisk)
        $(pojemniknaprzyciski).append(srodek)
        $(pojemniknaprzyciski).append(prawyprzycisk)
    
        /*$("#audio").bind("loadeddata", function () {
            console.log("loaded")
            Music.gra()
        })*/
    }
}
var aaa=false
var aaalicznik=1