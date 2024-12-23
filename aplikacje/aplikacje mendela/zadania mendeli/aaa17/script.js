window.onload=function(){
    let aa = document.getElementsByTagName("input")[0]
    let bb = document.getElementsByName("znak")[0]

    bb.addEventListener("click",function(){
        aa.value=String.fromCharCode(Math.random() * (91 - 65) + 65)
    })
}