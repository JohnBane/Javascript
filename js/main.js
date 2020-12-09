"use strict";

function getName(name){
    console.log(name);
}

getName("Adilet");

function Calc( a, b){
    return (a + b);
}
console.log(Calc(3,3));
console.log(Calc(4,4));
console.log(Calc(10,10));

function ret(num){
    num = 50;
    return num;
}
let anotherNum = ret();
console.log(anotherNum);

let num = function(a,b){
    return a + b;
};
console.log(num(2,3));

const qwe = (a,b) => a + b;

console.log(qwe(2,3));