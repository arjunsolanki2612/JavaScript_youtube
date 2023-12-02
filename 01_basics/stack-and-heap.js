// Stack(Primitive), Heap(Non-Primitive) it means the primitive data types are copied in stack whereas the non-primitive datatypes are passed as reference in the heap memory so when we change anything in the non-primitive data type the changes are reflected in the original variable also

//eg of stack


console.log(26);
let youtube = "codewithme"
let second = youtube

console.log(second)
second = "hallelua" // change in second doesnot affect the variable youtube it means its copied was passed to second therfore any change in second will not affect the actual variable
console.log(youtube);

//eg of heap

let userOne ={
    email:"teramera@gmail.com",
    age:25
}

let userTwo = userOne;

userOne.email = "chotabheem@gmail.com"
console.log(userOne); // change in the real object as well 
console.log(userTwo);