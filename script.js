const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMuvieDB = {
  count: numberOfFilms,
  muvies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const a = prompt("Один из просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMuvieDB.muvies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }

  if (i === numberOfFilms) {
    break;
  }
}

if (personalMuvieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMuvieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMuvieDB);

console.log(personalMuvieDB.count);
