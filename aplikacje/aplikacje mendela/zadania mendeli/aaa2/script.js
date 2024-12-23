window.onload=function(){
    var aa = confirm("aaa")
 

if(aa){
        document.getElementsByTagName("input")[0].value=Math.random()*6+3
    }
    else{
        this.alert("k")
    }
}