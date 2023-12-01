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
