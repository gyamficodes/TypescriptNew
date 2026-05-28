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
