"use strict";
// упражжнение с вопросами и вывод информации 
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

const numberOfFilms_2 = prompt('Один из последних просмотренных фильмов?', ''),
      numberOfFilms_3 = prompt('На сколько оцените его?', ''),
      numberOfFilms_4 = prompt('Один из последних просмотренных фильмов?', ''),
      numberOfFilms_5 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[numberOfFilms_2] = numberOfFilms_3;
personalMovieDB.movies[numberOfFilms_4] = numberOfFilms_5;

console.log(personalMovieDB);