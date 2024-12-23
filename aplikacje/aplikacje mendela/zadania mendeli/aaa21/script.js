window.onload=function(){
    let aa = document.getElementsByTagName("input")[0]
    aa.value="wyszukaj w google"
    aa.addEventListener("click",function(){
        location.href = 'http://google.com'
    })
}