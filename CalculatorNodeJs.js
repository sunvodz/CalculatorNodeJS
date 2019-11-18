var scanf = require('scanf');

//addition
add = function (a, b) {
    return a+b;
}; 
 
//difference
subtract = function (a, b) {
    return a-b;
}; 
 
// multiply
multiply = function (a, b) {
    return a*b;
}; 

// divide
divide = function (a, b) {
    return a/b;
}; 

 
console.log('Pleas number A :');
var a = scanf('%d');
 
console.log('Pleas number B :');
var b = scanf('%d');

console.log("Addition : "+add(a,b));
console.log("Subtraction : "+subtract(a,b));
console.log("Multiplication : "+multiply(a,b));
console.log("Divide : "+divide(a,b));
