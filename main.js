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




