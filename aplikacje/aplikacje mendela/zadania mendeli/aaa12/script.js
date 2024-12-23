window.onload=function(){
    var aa = document.getElementsByTagName("div").length
    for(let a = 0;a<aa;a++){
        document.getElementsByTagName("div")[a].addEventListener("click",function(e){
            let klik = e.clientX - window.getComputedStyle(document.getElementsByTagName("div")[a]).marginLeft.slice(0,-2)-8
            let szerokosc = window.getComputedStyle(document.getElementsByTagName("div")[a]).width.slice(0,-2)
            console.log(klik)
            console.log(szerokosc)
            document.getElementsByTagName("div")[a].style.backgroundColor = 'rgb(' +  (255 - 255 * klik/szerokosc) + ', ' + (255 - 255 * klik/szerokosc) + ', ' + (255 - 255 * klik/szerokosc) + ')'
        })
    }
}