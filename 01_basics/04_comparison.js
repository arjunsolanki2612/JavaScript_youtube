// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true // Reason is that equality operator and comparison operator works differently 
// In case of comparison operator like > < >= <= it convert the null to a number than compare therefore (null (0)>=0) is true;


console.log(undefined == 0); // false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === 

console.log("2" === 2);