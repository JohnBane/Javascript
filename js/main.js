



// let a = prompt("Один из последних просмотренных фильмов?",""),
//      b = prompt("На сколько оцените его?",""),
//      c = prompt("Один из последних просмотренных фильмов?",""),
//      d = prompt("На сколько оцените его?","");
// 

// console.log(personalMovieDB);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(`Вы просмотрели ${numberOfFilms} фильмов`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


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



