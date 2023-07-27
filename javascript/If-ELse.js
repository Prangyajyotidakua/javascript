var a = [1., 2 , 3 ,"name",true];
var val = prompt("enter a value to check that value is present or not");
if(a.includes(val)){
    alert(val+"value is persent in the array");
}
else {
    alert(val+"value is not present in the array");
}