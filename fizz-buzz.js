function fiizbuzz() {
var i = 0;
var output =[];
for(i=0 ; i<=100 ; i++){
    if(i%3 === 0 & i%5 === 0){
        output.push("fizzBuzz");
    }
    else if (i%5 === 0) {
        output.push("fizz");
    }
    else if (i%3=== 0){
        output.push("buzz");``
    }
    else {
        output.push(i);
    }
}
console.log(output);
}

fiizbuzz();