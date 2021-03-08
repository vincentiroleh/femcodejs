let fruits = ['Apple', 'Orange', 'Banana', 'Pawpaw'];

// length of an array
console.log(fruits.length);

// Index of an array
console.log(fruits[0]);

// Last index of an array
console.log(fruits[fruits.length -1]);

// Change content of an array
fruits[0] = "Pear"
console.log(fruits);

// Add to an array using push()
fruits.push("Grape");
console.log(fruits);

// Remove the last element of an array using pop()
fruits.pop();
console.log(fruits);

// Removes the first element of an array using shift()
fruits.shift();
console.log(fruits);

// Adds new element from the first index of an array
fruits.unshift("Another Fruit");
console.log(fruits);

// Finds the index of an element in an array
console.log(fruits.indexOf('Orange'));

// Empty Array
let students = [];
students.push("Vincent Iroleh");
students.push(["Anita", "Precious", ["Okocha", "Ogechi", "Nwachukwu"], "Glory"]);

// students[1][1] = "Victor";

console.log(students[1][2][1]);

// Research on this array methods:
// - Split, splice




