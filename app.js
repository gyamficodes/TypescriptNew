"use strict";
// JavaScript and TypeScript Primitives
//boolean, number, string, null, undefined, symbol, bigint
let isActive = true;
let age = 30;
let names = "John Doe";
let nullableValue = null;
let undefinedValue = undefined;
let uniqueId = Symbol("id");
let bigIntValue = 9007199254740991n;
console.log(isActive); // true
console.log(age);
//TypeScript Explicit Types and Inference
const name1 = "Alice";
console.log(name1); // Alice
const logedIn = false;
console.log(logedIn); // false
const scores = [85, 90, 78, "Hello"];
console.log(scores); // array
function greetMe(name) {
    console.log(`Good morning ${name}`);
}
;
greetMe('John');
//Type Inference
let userName = "John Gyamfi";
// Type Safety in Action
// One of TypeScript's main benefits is catching type-related errors during development.
// Let's look at how TypeScript helps prevent common mistakes
let userName1 = "Alice";
console.log(userName1);
// JavaScript Behavior
// This is valid JavaScript but can lead to bugs
// function add(a, b) {
// return a + b;
// }
// console.log(add("5", 3)); // Returns "53" (string concatenation) 
// When TypeScript Can't Infer Types
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(data);
//any and unknown 
let page = "1";
page = 1;
// TypeScript Arrays
const list = [];
list.push("John");
// TypeScript Tuples
let fruit = ["Apple", 5, 2];
console.log(fruit); // ["Apple", 5]
//TypeScript Object Types
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// Let's start with numeric.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.North); // 0
let car1 = {
    Age: 2026,
    Name: "Lexus",
    Info: "Good Car"
};
console.log(car1);
let App1 = {
    Name: "Search",
    Year: 2026
};
console.log(App1);
const myRectangle = {
    height: 10,
    width: 20
};
const myColorRectangle = {
    height: 10,
    width: 20,
    color: "red"
};
console.log(myColorRectangle);
// TypeScript Union Types
// Union types are used when a value can be more than a single type.
const myProperty = (propertys) => {
    console.log(`my property is ${propertys}`);
};
myProperty("Phone");
myProperty(10);
// TypeScript Functions
function getTime() {
    return new Date().getTime();
}
getTime();
// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log("Hello");
}
printHello();
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(10, 2);
// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
const nagateFunction = (value) => value + 3;
nagateFunction(1);
// TypeScript Casting
// Casting is the process of overriding a type.
let x = 1;
console.log(x);
// Casting with <>
// Using <> works the same as casting with as. 
let num1 = 10;
console.log(num1);
