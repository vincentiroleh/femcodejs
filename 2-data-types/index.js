// Data Types:

// String
// Numbers
// Boolean
// Undefined
// Null
// Array
// Object

/*
Boolean
*/
console.log("------------------------------ Boolean-------------------------------------- ")

let light = true;
let dark = false;

let name = "Vincent";
let another_name = "Nwachukwu";
console.log( name == another_name)

let num1 = "10";
let num2 = 10;
// Checking for equality both the data types and the content
console.log( num1 === num2)

console.log(typeof light)

/*
Undefined
*/

console.log("------------------------------ Undefined-------------------------------------- ")

let country;
let city = "";

console.log(typeof country);
console.log(typeof city);

/*
Null
*/
console.log("------------------------------ Null-------------------------------------- ")

let state = null;

console.log(typeof state)

/*
Array
*/
console.log("------------------------------ Array-------------------------------------- ")

let colors = [
    "Yellow", 
    "Red",
    "Green",
    "Brown",
    "White"
];


// console.log(Arrays);


/*
Object
*/
console.log("------------------------------ Object-------------------------------------- ")
let person = {
    name: "Vincent",
    age: 18,
    hobbies: ["Music", "Football", "Eating food"],
}

console.log(typeof person)    