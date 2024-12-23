window.onload=function(){
    var aa = this.document.getElementsByTagName('input')[0]
    var interval
    aa.addEventListener('keydown',function(e){
        if(e.which == 13){
            if(!isNaN(this.value)){
                clearInterval(interval)
                interval = setInterval(function() {
                    if (parseInt(aa.value) > 0) {
                        aa.value = parseInt(aa.value) - 1
                    } else {
                        clearInterval(interval)
                    }
                }, 500)
            }
            else{
            window.alert("aaa")
            aa.value = ""
            }
        }
        
    })
}