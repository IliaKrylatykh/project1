const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMuvieDB = {
  count: numberOfFilms,
  muvies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?"),
  c = prompt("Один из просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?");

personalMuvieDB.muvies[a] = b;
personalMuvieDB.muvies[c] = d;

console.log(personalMuvieDB);
