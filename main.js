// Single line comment
/*
    multi-line comments
    var is a keyword used to declare or initialize a variable in memory
    Variable is a container that stores data values
*/
//Primitive data types
//1. String
var firstname = "John";
console.log("Firstname: ", firstname);

//2. Number
var age = 25;
console.log("Age: ", age);

//3. Boolean
var isAdult = true;
console.log("Adult: ", isAdult);

//Empty Data Types
//1. Null - declares a variable but assigned it an empty value.
var emptyVariable = null;
console.log("Null State: ", emptyVariable);

//2. Undefined - declared a variable but have not assigned a value.
var undefinedVariable = undefined;
console.log("Undefined State: ", undefinedVariable);

//   Object Data Types - collection of different data types
// Object using {}
var person = {
  firstname: "Jane",
  lastname: "Doe",
  age: 30,
  isAdult: true,
};
console.log(person);
console.log(person.age);

//Array Object - zero indexed list of items
var languages = ["Javascript", "Python", "Java"];
//index         [0,             1,        2,   ]
console.log(languages);

//   Function Data Type - block of code that performs a specific task
var date = Date();
console.log("Date: ", date);

// Arithmetic Operators: +, -, *, /, %, ++, --
var x = 10,
  y = 15,
  a = 7,
  b = 3;
console.log("Addition: ", x + y);
console.log("Subtraction: ", x - y);
console.log("Multiplication: ", a * b);
console.log("Division: ", y / x);
// Modulus Operator (%): return the remainder of a division operation
console.log("Modulus: ", a % b);

// Increment Operator (++): increase the value of a variable by 1
console.log("Increment x: ", x++);
console.log("Increment x again, but with ++ before variable name: ", ++x);

// Decrement Operator (--): decrease the value of a variable by 1
console.log("Decrement y: ", y--);
console.log("Decrement y again, but with -- before variable name: ", --y);

// Compound Assignment Operators: +=, -=, *=, /=, %===
var t = 9;
var p = 11;
var r = 3;
var g = 5;

console.log("+=: ", (t += p));
console.log("-=: ", (p -= t));
console.log("*=: ", (r *= g));
console.log("/=: ", (r /= g));
console.log("%=: ", (t %= r));

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// !: not operator
// !=: not equal operator
// ==: equals in value but not in data type
// ===: equal value and data type

var num1 = 10;
var num2 = "10";
var num3 = 20;
console.log("Equal to: ", num1 == num2); // true, value is equal
console.log("Strict Equal to: ", num1 === num2); // false, value and type are not equal
console.log("Not Equal to: ", num1 != num2); // false, value is equal
console.log("Strict Not Equal to: ", num1 !== num2); // true, data type are not equal
console.log("Greater than: ", num1 > num2); // false
console.log("Less than: ", num1 < num2); // false
console.log("Greater than or equal to: ", num1 >= num2); // true
console.log("Less than or equal to: ", num1 <= num2); // true

// Logical Operators: &&, ||, !
// &&: AND operator
// ||: OR operator
// !: Negation operator

console.log("&&: ", num1 == num2 && num1 === num2); // false, one of the conditions return false

// When using the || operator, if first condition is true, second condition is not checked
console.log("||: ", num3 > num1 || num3 < num2); // true, one of the conditions returns true

// Left hand comparison is true, right hand is false but flips true due to negation operator.
console.log("&&: ", num1 == num2 && !(num1 === num2)); // true

// String Manipulation
var firstname = "John",
  lastname = "Doe";

// String concatenation - joining of two or more strings
var fullname = firstname + " " + lastname;
console.log("Full Name: " + fullname);

// Using backticks (template literals)
var fullname2 = `${firstname} ${lastname}`;
console.log("Full Name 2: " + fullname2);

// Using .concat method
var fullname3 = firstname.concat(" ", lastname);
console.log("Full Name 3: " + fullname3);

// String Methods (function) & properties (variables)
// 1. length: returns the character count/length of the string
//  strings are zero indexed like arrays
console.log("Firstname length: ", firstname.length);

// 2. toUpperCase - converts a string to uppercase
console.log("Uppercase: ", firstname.toUpperCase());

// 3. indexOf - returns the index of a character in a string
console.log("IndexOf N: ", firstname.indexOf("n")); // 3, since strings are array indexed

// 4. charAt - return the character at a specific index
console.log("charAt 3: ", firstname.charAt(3));

// Arrays: zero indexed list of items

// Creating Arrays
var cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);

// Array function
var numbers = Array(1, 3, 6, 9);
console.log(numbers);

// Accessing Array Elements
console.log("First Element: ", cars[0]);

// Assigning a new value to an element
cars[0] = "Toyota";
console.log("Updated Cars: ", cars);

// Arrays Methods (functions) & properties (variables)
// 1. length: returns length of array
console.log("Length of Cars Array: ", cars.length);

// 2. push: adds an element to the end of an array
cars.push("Tesla");
console.log("Push Tesla to Cars: ", cars);

// 3. unshift: adds an element to the beginning of an array
cars.unshift("Honda");
console.log("Unshift Honda to Cars: ", cars);

// 4. pop: removes the last element from an array
cars.pop();

//5. shift: removes the first element from an array
cars.shift();
console.log("pop & shift cars: ", cars);

// 6. sort: sorts elements in alphabetical or numeric order
cars.sort();
console.log("Sort Cars: ", cars);

// 7. reverse: reverses the order of the elements
console.log("Reversed Cars: ", cars.reverse());

// 8. slice: returns a copied portion of an array
var newCars = cars.slice(1, 2); // index 1 to 2, non-inclusive of 2
console.log("New Cars: ", newCars);

// 9a. splice: add elements from an array
//splice(startIndex, deleteCount, item1, item2)
cars.splice(1, 0, "Ford", "Chevy");
console.log("Splice Add: ", cars);

// 9b. splice: remove elements from an array
cars.splice(1, 2);
console.log("Splice Remove: ", cars);

var numers = [4, 9, 16, 25];
//10. map: creates a new array with results from calling a function for every item within the current array
var squaredNumbers = numbers.map(Math.sqrt);
console.log("Squared Numbers Array: ", squaredNumbers);

// 2D Arrays: arrays within arrays
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Matrix (2D array): ", matrix);

// Accessing elements in 2D arrays
console.log("Element: ", matrix[0][2]);

// Functions: blocks of code that perform a specific task
//Syntax: function functionName(params) { code to be executed };
// Parameters: a placeholder inside a function definition. It acts as a variable name for the value that is passed to the function when it is called.
//return keyword can be used to return a value from the function

//Defining a function requires the function keyword and parameters
function sum(a, b) {
  var result = a + b;
  return result;
}

// We can store the returned value from a function in a variable
// How can we use a function? Call it by name and invoke it with parenthesis with arguments
// Arguments: The actual value or variable that contains a value being passed into the function. The value replaces the parameter usage within the function.
var total1 = sum(5, 10);
console.log("Total: ", total1);

var total2 = sum(27, 67);
console.log("Total: ", total2);

var finalValue = sum(total1, total2);
console.log("Final Value: ", finalValue);

// Conditional Statements: used to perform different actions based on different conditions
// 1. if, else if, else
var age = 19;
if (age >= 21) {
  console.log("You can vote in the US");
} else if (age >= 18) {
  console.log("You can drive in the US");
} else {
  console.log("You are too young to vote or drive in the US");
}

// 2. switch
var day = "Saturday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  // missing break statement will cause the next case block to run.
  // saturday does not have a break, so the code for sunday will run despite day not matching "Sunday"
  case "Saturday":
  case "Sunday":
    console.log("Weekend.");
    break;
  default:
    console.log("Midweek day.");
}

// Loops: used to repeat a block of code multiple times
// 1. for loop: used to repeat a block of code a specific number of times
// Syntax: for (initialization; condition; increment/decrement) { code to be executed }
for (var i = 0; i < 3; i++) {
  console.log("i is: ", i);
}

// 2. while loop: used to repeat a block of code as long as a condition is true
// Syntax: while (condition) { code to be executed }
var j = 0;
while (j < 3) {
  console.log("j is: ", j);
  j++;
}

// 3. do while loop: similar to while loop, but the code block is executed at least once before checking the condition
// Syntax: do { code to be executed } while (condition);
var k = 0;
do {
  console.log("k is: ", k);
  k++;
} while (k < 3);

// 4. for... in loop: used to iterate over the properties of an object
// Syntax: for (variable in object) { code to be executed }
var person = {
  firstname: "Jane",
  lastname: "Doe",
  age: 30,
  isAdult: true,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 5. for...of loop: used to iterate over iterable objects like arrays, strings, etc.
// Syntax: for (variable of iterable) { code to be executed }
var languages = ["JavaScript", "Python", "Java"];
for (var language of languages) {
  console.log("Language: ", language);
}
