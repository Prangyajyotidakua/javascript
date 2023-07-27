function buy() {

var a = ["lisa" , "prangya" ,"jyoti" , "dakua"] ;
var n = Math.floor(Math.random()*a.length)
return a[n];
}

var m = buy();
alert(m+" will buy todays lunch");