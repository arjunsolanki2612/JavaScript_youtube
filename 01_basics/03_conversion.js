let score = null;
let manforce = undefined;
let durex = NaN;


console.table([typeof score, typeof manforce, typeof durex]); // null => object, undefined => undefined, NaN => number

let convertScore = Number(score);
let convertManforce = Number(manforce);
let convertDurex = Number(durex);

console.table([typeof convertScore, typeof convertManforce, typeof convertDurex]); // all converted into type "number"
// but when we print the values of these 
console.table([ convertScore,  convertManforce,  convertDurex]);

//convertScore(null) -> 0
//convertManforce(undefined) -> NaN (not a number)
//convertDurex(NaN) -> NaN
//"33abc" -> NaN

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); -> 12
// console.log(1 + "2"); -> 12
// console.log("1" + 2 + 2); -> 122
// console.log(1 + 2 + "2"); -> 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); -> 1
// console.log(+""); -> 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
