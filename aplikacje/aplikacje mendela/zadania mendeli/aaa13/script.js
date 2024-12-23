window.onload=function(){
    var aa = document.getElementsByTagName("img")
    document.getElementsByTagName("img")[0].addEventListener("click",function(){
        console.log(aa[0])
        window.alert(aa[0].src)
    })
}