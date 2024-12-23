var a = 0
export default {
    a:a,
    get aaa(){
        var aa = document.getElementById("test").className
        aa = aa.split("_")[1]
        a=parseInt(a)+parseInt(aa)
        return a
    }
}