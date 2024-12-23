window.onload=function(){
    var aa = document.getElementsByTagName("div").length
    for(let a=0;a<aa;a++){
        document.getElementsByTagName("div")[a].addEventListener("click",function(){
            this.style.backgroundColor="blue"
            this.style.height=this.style.height.slice(0,-2)/2 +"px"
        })
    }
}