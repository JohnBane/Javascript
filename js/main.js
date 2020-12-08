



// let a = prompt("Один из последних просмотренных фильмов?",""),
//      b = prompt("На сколько оцените его?",""),
//      c = prompt("Один из последних просмотренных фильмов?",""),
//      d = prompt("На сколько оцените его?","");
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

console.log(`Вы просмотрели ${numberOfFilms} фильмов`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
let lastFilms, ocenkaFilms;
for(let i = 0; i < 2; i++){
    lastFilms = prompt("Один из последних просмотренных фильмов?","");
    ocenkaFilms = prompt("На сколько оцените его","");
    personalMovieDB.movies[lastFilms] = ocenkaFilms;
    console.log(personalMovieDB);
}

