console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
        
    }
    
    renderowanieplikow(pliki, info, rozmiary,pierwszyclick){
        
        $("#prawy").html("")
        for (let i in pliki) {
            if(pliki[i]!="zzzcover.png"){
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


            var dodaniedoplaylisty = $("<div>")
            $(dodaniedoplaylisty).attr("class","dodaniedoplaylisty")
            obiekt.append(dodaniedoplaylisty)
            $(dodaniedoplaylisty).css("right","50px")


            var klasaobiektu=""
            var zezwolenie2=false
            var granie = true
            obiekt.click (function(){
                console.log(Music.czycosdziała)
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
                $(".dodaniedoplaylisty").attr("id","")
                Music.odpalmuzyke($( this ).attr("class"), info, pierwszyclick)
                ui.przyciskinadol(pliki, $( this ).attr("class"),info)
                Music.playing = false
            }
            if(Music.playing){
                    granie=true
                }
                else{
                    granie=false
                }
            if(ui.przelaczenie==true){
                granie=false
                ui.przelaczenie=false
            }
                if(zezwolenie2){
                    if(ui.aaa==1){
                        if(Music.playing==false){
                            granie=false;
                        }
                        else{
                            granie=true;
                        }
                        
                        ui.aaa=0
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
                else{
                    if(Music.czycosdziała==true){
                        granie=true
                    }
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

            dodaniedoplaylisty.click(function(){
                console.log(info)
                console.log($(this).parent("div").attr("class"))
                console.log(rozmiary[i])
                net.dodanieinfo(info,$(this).parent("div").attr("class"),rozmiary[i])
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
    renderowanieplikow2(folder,plik,rozmiary,pierwszyclick){
        pierwszyclick=false
        $("#prawy").html("")
        console.log(folder)
        console.log(plik)
        console.log(rozmiary)

        for (let i in plik) {
            if(plik[i]!="zzzcover.png"){
            var obiekt = $("<div>")
            obiekt.addClass(plik[i])
            $("#prawy").append(obiekt)
            var tablica = $("<table>")
            $(obiekt).append(tablica)
            var tr=$("<tr>")
            $(tablica).append(tr)
            var td1=$("<td>")
            td1.html(folder[i])
            $(tr).append(td1)
            var td2=$("<td>")
            td2.html(plik[i])
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
                console.log(Music.czycosdziała)
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
                $(".dodaniedoplaylisty").attr("id","")
                Music.odpalmuzyke($( this ).attr("class"), folder[i], pierwszyclick)
                ui.przyciskinadol(plik, $( this ).attr("class"),folder[i],folder)



                Music.playing = false
            }
            if(Music.playing){
                    granie=true
                }
                else{
                    granie=false
                }
            if(ui.przelaczenie==true){
                granie=false
                ui.przelaczenie=false
            }
                if(zezwolenie2){
                    if(ui.aaa==1){
                        if(Music.playing==false){
                            granie=false;
                        }
                        else{
                            granie=true;
                        }
                        
                        ui.aaa=0
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
                else{
                    if(Music.czycosdziała==true){
                        granie=true
                    }
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
                    Music.odpalmuzyke($(klasaobiektu), folder[i], pierwszyclick)
                    ui.przyciskinadol(plik, $(klasaobiektu),folder[i],folder)
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
            obiekt.append(`<img src='/static/mp3/`+obj.albums[i]+`/zzzcover.png' alt='aaa'>`)
            $("#lewy").append(obiekt)
            obiekt.on("click", function () {
                console.log($(this).attr('class'))
                net.pliczki($(this).attr('class'), obj.albums[i])
            })
        }
        var przycikkolejny =  $("<div>")
        przycikkolejny.attr("id","przyciskkolejny")
        $("#lewy").append(przycikkolejny)
        przycikkolejny.css("width","20px")
        przycikkolejny.css("height","40px")
        przycikkolejny.css("position","absolute")
        przycikkolejny.css("top","0px")
        przycikkolejny.append(`<img src='/static/cyfry/nuta.jpg' alt='aaa' style="width: 20px; height: 40px">`)

        przycikkolejny.on("click",function(){
            console.log("aa")
            net.tworzplayliste()
        })
        this.renderowanieplikow(obj.files, obj.albums, obj.rozmiary, obj.pierwszyclick)
        this.przyciskinadol(obj.files)      
    }
    listatworzona(info){
        console.log(info)
        ui.renderowanieplikow2(info.customfolder,info.customplik,info.customrozmiar)
    }
    przyciskinadol(pliki, granyteraz,info,tabela){
        console.log(tabela)
        var dousuniecia =""
        $("#dół").html("")
        var pasekpojemnik = $("<div>")
        var pasekprogres = $("<div>")
        pasekpojemnik.attr("id","pasekpojemnik")
        pasekprogres.attr("id","pasekprogres")
        $("#dół").append(pasekpojemnik)
        $(pasekpojemnik).append(pasekprogres)

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
            ui.przelaczenie=true
            ui.aaa=1
            $(document.getElementById("nacisniete2")).css( "background-color","blue" )
            $("#nacisniete").children("div").css("display","none")
            $("#nacisniete").children("div").attr("id","")
            Music.wczesniej(pliki,granyteraz,info,tabela)
            $("#nacisniete").children("div").css("display","block")
            $("#nacisniete").children("div").attr("id","nacisniete2")
            $(document.getElementById("nacisniete2")).css( "background-color","green" )
        })


        var srodek = $("<img src='/static/kontrolki/play.png' id='play_button'>")
        srodek.on("click", () => {
            Music.odpalenie()
        })


        var prawyprzycisk = $("<img src='/static/kontrolki/next.png'>")
        prawyprzycisk.on("click", () => {
            ui.przelaczenie=true
            ui.aaa=1
            $(document.getElementById("nacisniete2")).css( "background-color","blue" )
            $("#nacisniete").children("div").css("display","none")
            $("#nacisniete").children("div").attr("id","")
            Music.dalej(pliki,granyteraz,info,tabela)
            $("#nacisniete").children("div").css("display","block")
            $("#nacisniete").children("div").attr("id","nacisniete2")
            $(document.getElementById("nacisniete2")).css( "background-color","green" )
        })


        var pojemniknaprzyciski = $("<div>")
        pojemniknaprzyciski.attr("id","pojemniknaprzyciski")
        //$().html(pojemniknaprzyciski)
        $("#dół").append(pojemniknaprzyciski)
        $(pojemniknaprzyciski).append(lewyprzycisk)
        $(pojemniknaprzyciski).append(srodek)
        $(pojemniknaprzyciski).append(prawyprzycisk)
    
        /*$("#audio").bind("loadeddata", function () {
            console.log("loaded")
            Music.gra()
        })*/
        var czytajczas = $("<div>")
        czytajczas.css("width","330px")
        czytajczas.attr("id","czytajczas")

        

        $("#dół").append(czytajczas)
        $("#audio").on("timeupdate", function () {
            

            var minietyczasobrazy=""
            var calyczasobrazy=""
            var minietyczas = $("#audio").prop("currentTime")
            var calyczas=$("#audio").prop("duration") 
            //console.log($("#audio"))
            var progres = minietyczas/calyczas
            progres=progres*300
            pasekprogres.css("width",progres+"px")
            //console.log(minietyczas)
            minietyczas= minietyczas.toString()
            minietyczas= minietyczas.split(".")
            
            calyczas= calyczas.toString()
            calyczas= calyczas.split(".")


            var f = parseFloat(calyczas)/60
            f=f.toString().split(".")
            if(f[0]<10){
                f[0]="0"+f[0]
            }
            var g = (parseFloat(calyczas)%60).toString()
            if(g<10){
                g="0"+g
            }
            //console.log(f[0])
            //console.log(g)
            var calyczas2=f[0]+"."+g
            calyczas2=calyczas2.split("")

            var z = parseFloat(minietyczas)/60
            z=z.toString().split(".")
            if(z[0]<10){
                z[0]="0"+z[0]
            }
            var y = (parseFloat(minietyczas)%60).toString()
            if(y<10){
                y="0"+y
            }
            //console.log(z[0])
            //console.log(y)
            var minietyczas2=z[0]+"."+y
            //console.log(minietyczas2)
            minietyczas2=minietyczas2.split("")

            
            for(var a=0;a<minietyczas2.length;a++){
                if(minietyczas2[a]=="0"){
                    minietyczasobrazy += '<img src="static/cyfry/0.jpg">'
                }
                else if(minietyczas2[a]=="1"){
                    minietyczasobrazy += '<img src="static/cyfry/1.jpg">'
                } 
                else if(minietyczas2[a]=="2"){
                    minietyczasobrazy += '<img src="static/cyfry/2.jpg">'
                }
                else if(minietyczas2[a]=="3"){
                    minietyczasobrazy += '<img src="static/cyfry/3.jpg">'
                }
                else if(minietyczas2[a]=="4"){
                    minietyczasobrazy += '<img src="static/cyfry/4.jpg">'
                }
                else if(minietyczas2[a]=="5"){
                    minietyczasobrazy += '<img src="static/cyfry/5.jpg">'
                }
                else if(minietyczas2[a]=="6"){
                    minietyczasobrazy += '<img src="static/cyfry/6.jpg">'
                }
                else if(minietyczas2[a]=="7"){
                    minietyczasobrazy += '<img src="static/cyfry/7.jpg">'
                }
                else if(minietyczas2[a]=="8"){
                    minietyczasobrazy += '<img src="static/cyfry/8.jpg">'
                }
                else if(minietyczas2[a]=="9"){
                    minietyczasobrazy += '<img src="static/cyfry/9.jpg">'
                }
                else if(minietyczas2[a]=="."){
                    minietyczasobrazy += '<img src="static/cyfry/kropka.jpg">'
                }
                else if(minietyczas2[a]==":"){
                    minietyczasobrazy += '<img src="static/cyfry/dwukropek.jpg">'
                }          
            }
            for(var a=0;a<calyczas2.length;a++){
                if(calyczas2[a]=="0"){
                    calyczasobrazy += '<img src="static/cyfry/0.jpg">'
                }
                else if(calyczas2[a]=="1"){
                    calyczasobrazy += '<img src="static/cyfry/1.jpg">'
                } 
                else if(calyczas2[a]=="2"){
                    calyczasobrazy += '<img src="static/cyfry/2.jpg">'
                }
                else if(calyczas2[a]=="3"){
                    calyczasobrazy += '<img src="static/cyfry/3.jpg">'
                }
                else if(calyczas2[a]=="4"){
                    calyczasobrazy += '<img src="static/cyfry/4.jpg">'
                }
                else if(calyczas2[a]=="5"){
                    calyczasobrazy += '<img src="static/cyfry/5.jpg">'
                }
                else if(calyczas2[a]=="6"){
                    calyczasobrazy += '<img src="static/cyfry/6.jpg">'
                }
                else if(calyczas2[a]=="7"){
                    calyczasobrazy += '<img src="static/cyfry/7.jpg">'
                }
                else if(calyczas2[a]=="8"){
                    calyczasobrazy += '<img src="static/cyfry/8.jpg">'
                }
                else if(calyczas2[a]=="9"){
                    calyczasobrazy += '<img src="static/cyfry/9.jpg">'
                }
                else if(calyczas2[a]=="."){
                    calyczasobrazy += '<img src="static/cyfry/kropka.jpg">'
                }
                else if(calyczas2[a]==":"){
                    calyczasobrazy += '<img src="static/cyfry/dwukropek.jpg">'
                }          
            }

            //console.log(parseFloat(minietyczas))
            //console.log(parseFloat(calyczas))
            if(calyczas=="NaN"){
                calyczasobrazy='<img src="static/cyfry/0.jpg"><img src="static/cyfry/0.jpg"><img src="static/cyfry/kropka.jpg"><img src="static/cyfry/0.jpg"><img src="static/cyfry/0.jpg">'
            }

            $(czytajczas).html(minietyczasobrazy + '<img src="static/cyfry/dwukropek.jpg">' + calyczasobrazy)
            
            //console.log(minietyczas[0] + " " + calyczas)
        });
    }
}
var przelaczenie = false
var aaa=0

