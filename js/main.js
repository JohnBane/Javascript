"use strict";

function learn(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}
function done(){
    console.log(`Я прошел этот урок`);
}
learn(`LearnJavascript`, done);

function myName(name,surname,age,callback){
    console.log(`Меня зовут ${name}, фамилия: ${surname} и мне ${age} года`);
}
function myPersonalD(){
    console.log("Это мои данные");
}
myName(`Адилет`, `Урманбетов`, `23`, myPersonalD );

