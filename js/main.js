"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};




function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const nameFilms = prompt("Один из просмотренных фильмов?",""),
            raitingFilms = prompt("Оценка фильма?","");
       
       
    
        if(nameFilms != null && raitingFilms != null && nameFilms != `` && raitingFilms != `` && nameFilms.length < 50){
            personalMovieDB.movies[nameFilms] = raitingFilms;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
        console.log(personalMovieDB);
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Error");
    }

}
// detectPersonalLevel();

// function shoMyDB(){
//     if(personalMovieDB.privat == false){
//         console.log(`Главный объект программы:${personalMovieDB.count}`);        
//     } else {
//         console.log("Фильм является приватным");
//     }
// }
function showMyDB(hidden) {
    if(!hidden){
        console.log("Главный объект программмы");
    } 
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
    }
    console.log(personalMovieDB);
}
writeYourGenres();

