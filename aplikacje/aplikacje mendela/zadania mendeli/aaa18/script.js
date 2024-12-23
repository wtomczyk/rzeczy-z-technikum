window.onload=function(){
    let aa = document.getElementsByClassName("klasa")[0]
    aa.addEventListener("click",function(){
        aa.innerHTML=""
        var a = aa.clientWidth
        var b = aa.clientHeight
        aa.innerHTML= a+"/"+b
    })
}