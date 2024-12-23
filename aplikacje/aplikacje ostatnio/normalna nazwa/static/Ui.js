console.log("wczytano ui")
//klikalne shit, interfejs shit
class Ui {
    constructor() {
        this.width  = $(document).width()
        this.height = $(document).height()
        this.gracz = null
    }
    start(){
        //document.getElementById("mainwindow").style.backgroundImage="url('img/placeholder.png')"
        var loginwindow = document.createElement("div")
        loginwindow.id="loginwindow"
        $("#mainwindow").append(loginwindow)
        loginwindow.style.top="20px"
        loginwindow.style.right=this.width/2 - 200+"px"

        var login = document.createElement("input")
        $(loginwindow).append(login)
        var przycisk = document.createElement("button")
        przycisk.id="przycisk"
        $(loginwindow).append(przycisk)
        przycisk.innerHTML="login"

        $( przycisk ).click(function() {
            console.log(login.value)
            if(login.value!=""){
                net.info(login.value)
            }
        });
    }
    infozwrotne(obj){
        game.test()
		
		//npm i --save three-fbx-loader
        //tu jak sie ogarnie te require to powinno model wczytywać!!!!!!!!!!!!!!!!!!!!!

        //var THREE = require('three');
        //var FBXLoader = require('three-fbx-loader');

    }
}