"use strict";

/* Задание на урок(часть 1):
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок (часть 2):
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки(""),
отменить ответ((null)) или ввести название фильма длинее, чем 50 символов(a.length<50). Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' ); 

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],  // жанры
  privat: false
};

// Используем цикл, чтобы автоматизировать процесс получения данных от пользователя:

for(let i = 0; i < 2; i++) {
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
      b = prompt( 'На сколько оцените его?', '');

  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
};  

// определяем категорию пользователя по числу просм-х фильмов:

if(personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
  console.log('Вы - классический зритель');
} else if( personalMovieDB.count >= 30 ) {
  console.log('Вы - киноман');
} else {
  console.log('произошла ошибка!');
}

// Переписать цикл еще двумя способами:

// while
/*
let i = 0;
while(i < 2) {
  i += 1;
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
  b = prompt( 'На сколько оцените его?', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
};    */

 // do while
/*
 let i = 0;
 do {
   i += 1;
  const a = prompt( 'Какой фильм вы уже посмотрели?', '' ),
        b = prompt( 'На сколько оцените его?', '');
  if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done!'); 
  } else {
    console.log('error!');
    i--; //если условие не выполнено, то возвращаемся на шаг назад ( к prompt-ам)
  }
 }
 while(i < 2 );  */
console.log(personalMovieDB);