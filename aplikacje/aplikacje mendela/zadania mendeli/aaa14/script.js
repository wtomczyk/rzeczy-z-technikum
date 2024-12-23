window.onload=function(){
    let aa= document.getElementsByTagName("input").length
    for(let a=0;a<aa;a++){
        document.getElementsByTagName("input")[a].addEventListener("focus",function(){
            document.getElementsByTagName("input")[a].style.backgroundColor="blue"
        })
        document.getElementsByTagName("input")[a].addEventListener("blur",function(){
            document.getElementsByTagName("input")[a].style.backgroundColor="white"
        })
    }
}