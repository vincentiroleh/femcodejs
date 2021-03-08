const Person = {
  first_name: undefined,
  last_name: undefined,
  age: undefined,
  eye_color: undefined,
  hobbies: [],
  fullName: function() {
      return `${this.first_name} ${this.last_name}` // template literals 
  }
};


// Dynamically change the value of an obj
function getPersonDetails(firstName, lastName, age, eyeColor) {
    Person.first_name = firstName;
    Person.last_name = lastName;
    Person.age = age;
    Person.eye_color = eyeColor;
}
getPersonDetails("Precious", "Ezema", 20, "Brown");
console.log(Person);


// Accessing properties of an obj

let result = Person.first_name;
// result = Person["hobbies"];

// console.log(result);

// Functions
function greetingMachine() {
    return "Welcome to royal supermarket"
}


console.log(greetingMachine())

function addNums(num1, num2) {
  return num1 + num2;
}

function sumNums(num1, num2) {
  return num1 - num2;
}

function multNums(num1, num2) {
  return num1 * num2;
}

// console.log(addNums(10, 10));
// console.log(addNums(40, 54));