console.log("konstruktor klasy Music")

var Music = {
    czycosdziała:false,
    odpalmuzyke: function(a, info){
        $("#audio").trigger("pause");
        $("#audio").html('<source src="static/mp3/'+info+'/'+a+'" id="audio_src" type="audio/mp3" />')
        $("#audio").trigger('load');
        Music.czycosdziała=true
    },


    gra: function(){
        $("#audio").trigger("play");
        Music.playing = true
        $("#play_button").attr("src", "/static/kontrolki/stop.png")
        Music.czycosdziała=true
    },
    
    
    playing: false,
    odpalenie: () =>{
        if(Music.czycosdziała){
        if (!Music.playing) {
            $("#audio").trigger("play");
            Music.playing = true
            $("#play_button").attr("src", "/static/kontrolki/stop.png")
            $(document.getElementById("nacisniete2")).css( "background-color","green" )
        }
        else{
            $("#audio").trigger("pause");
            Music.playing = false
            $("#play_button").attr("src", "/static/kontrolki/play.png")
            $(document.getElementById("nacisniete2")).css( "background-color","blue" )
            
        }
    }
    },
    wczesniej: (pliki,granyteraz,info) =>{
        if(granyteraz!=null){
        console.log(pliki)
        console.log(granyteraz)
        console.log(info)
        wyznacznikmiejsca = 0
        var a=0
        for(a=0;a<pliki.length;a++){
            if(pliki[a]==granyteraz){
                wyznacznikmiejsca=a
            }
        }
        wyznacznikmiejsca--
        console.log(a)
        console.log(pliki[wyznacznikmiejsca])
        if(wyznacznikmiejsca>-1){
            granyteraz=pliki[wyznacznikmiejsca]
            ui.przyciskinadol(pliki, granyteraz,info)
            $("#audio").trigger("pause");
            $("#audio").html('<source src="static/mp3/'+info+'/'+pliki[wyznacznikmiejsca]+'" id="audio_src" type="audio/mp3" />')
            $("#audio").trigger('load');
            $("#audio").trigger("play");
            Music.playing = true
            $("#play_button").attr("src", "/static/kontrolki/stop.png")
            Music.czycosdziała=true
            var usuntlo=document.getElementById("nacisniete")
            console.log(usuntlo)
            $(usuntlo).css( "background-color","gray" )
            $(usuntlo).attr("id","")
            var dajtlo=document.getElementsByClassName(pliki[wyznacznikmiejsca])
            $(dajtlo).css( "background-color","red" )
            $(dajtlo).attr("id","nacisniete")
        }
    }
    },
    dalej: (pliki,granyteraz,info) =>{
        if(granyteraz!=null){
        console.log(pliki)
        console.log(granyteraz)
        console.log(info)
        wyznacznikmiejsca = 0
        var a=0
        for(a=0;a<pliki.length;a++){
            if(pliki[a]==granyteraz){
                wyznacznikmiejsca=a
            }
        }
        wyznacznikmiejsca++
        console.log(a)
        console.log(pliki[wyznacznikmiejsca])
        
        if(wyznacznikmiejsca<pliki.length){
            granyteraz=pliki[wyznacznikmiejsca]
            ui.przyciskinadol(pliki, granyteraz,info)
            $("#audio").trigger("pause");
            $("#audio").html('<source src="static/mp3/'+info+'/'+pliki[wyznacznikmiejsca]+'" id="audio_src" type="audio/mp3" />')
            $("#audio").trigger('load');
            $("#audio").trigger("play");
            Music.playing = true
            $("#play_button").attr("src", "/static/kontrolki/stop.png")
            Music.czycosdziała=true
            var usuntlo=document.getElementById("nacisniete")
            console.log(usuntlo)
            $(usuntlo).css( "background-color","gray" )
            $(usuntlo).attr("id","")
            var dajtlo=document.getElementsByClassName(pliki[wyznacznikmiejsca])
            $(dajtlo).css( "background-color","red" )
            $(dajtlo).attr("id","nacisniete")
        }
    }
    }
}