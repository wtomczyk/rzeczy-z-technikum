window.onload=function(){
    var aa = document.getElementsByTagName('p').length
    for(let a=0;a<aa;a++){
        document.getElementsByTagName('p')[a].addEventListener('mouseenter',function(){
            document.getElementsByTagName('p')[a].style.fontWeight = 900
        })
    }
}