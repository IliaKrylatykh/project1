// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// // function calc(a, b) {
// //   return a + b;
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// // function ret() {
// //   let num = 50;
// //   return num;
// // }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//   console.log("Hello");
// };
// logger();

// const calc = (a, b) => a + b;

// //

// // const usdCurr = 28;
// // const eurCurr = 32;

// // function convert(amount, curr) {
// //   console.log(curr * amount);
// // }

// // convert(500, usdCurr);
// // convert(500, eurCurr);

// //

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const usdRes = convert(500, usdCurr);
// promotion(usdRes);
// const eurRes = convert(500, eurCurr);
// promotion(eurRes);

// //

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }

// test();

// //

// const str = "teSt";
// const arr = [1, 2, 4];

// // console.log(str[2]);
// // console.log(arr.length);

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World";

// console.log(logg.slice(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

//

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// learnJS("JavaScript", function () {
//   console.log("Я прошел этот урок!");
// });

//

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

//

// const details = {
//   name: "detail",
//   price: 500,
//   colors: {
//     var1: "black",
//     var2: "white",
//     var3: "blue",
//   },
//   sizes: {
//     size1: 1,
//     size2: 2,
//   },
//   d1: "det1",
//   d2: "det2",
// };
// console.log(Object.keys(details).length);

//

// const arr = [1, 42, 13, 326, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

//

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// Копирование объектов------------------------------------------

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// //

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));  // Добавили значений в объект --------

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice(); // Копирование массива-------------------

// newArray[1] = "adadadsfsfsfsf";
// console.log(newArray);
// console.log(oldArray);

//

// const video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook']; // Троеточие - оператор разворота!------------

// console.log(internet);

//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

//
// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

// ------------------------------------
let str = "some";
let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);
