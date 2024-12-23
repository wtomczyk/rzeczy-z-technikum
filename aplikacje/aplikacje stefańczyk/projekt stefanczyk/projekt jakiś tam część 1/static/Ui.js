console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
    }

    renderowanieplikow(pliki, nazwaablumu){
        $("#prawy").html("")
        for (let i in pliki) {
            if(pliki[i]!="cover.png"){
            var obiekt = $("<div>")
            obiekt.html(pliki[i])
            obiekt.addClass("file")
            $("#prawy").append(obiekt)
            }
        }
    }

    renderowaniealbumów(obj){
        for (let i in obj.albums) {
            var obiekt = $("<div>")
            console.log(obj.albums[i])
            //("background-image", "url(static/images/"+obj.images[i]+')')
            //obiekt.val(obj.albums[i])
            obiekt.addClass(obj.albums[i])
            obiekt.append(`<img src='/static/mp3/`+obj.albums[i]+`/cover.png' alt='aaa'>`)
            $("#lewy").append(obiekt)
            obiekt.on("click", function () {
                console.log(this)
                net.pliczki($(this).attr('class'))
            })
        }
        this.renderowanieplikow(obj.files, obj.albums[0].name)
    }
}