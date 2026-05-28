// JavaScript and TypeScript Primitives
//boolean, number, string, null, undefined, symbol, bigint

let isActive: boolean = true;
let age: number = 30;
let names: string = "John Doe";
let nullableValue: null = null;
let undefinedValue: undefined = undefined;
let uniqueId: symbol = Symbol("id");
let bigIntValue: bigint = 9007199254740991n;

console.log(isActive); // true
console.log(age);


//TypeScript Explicit Types and Inference
const  name1: string = "Alice";
console.log(name1); // Alice


const logedIn: boolean = false;
console.log(logedIn); // false

const scores: (number | string)[] = [85, 90, 78, "Hello"];
console.log(scores); // array

function greetMe(name: string) {
  console.log(`Good morning ${name}` )
};

greetMe('John');


//Type Inference
let userName = "John Gyamfi";


// Type Safety in Action
// One of TypeScript's main benefits is catching type-related errors during development.
// Let's look at how TypeScript helps prevent common mistakes

let userName1: string = "Alice";
console .log(userName1);


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
let page: any = "1";
page = 1;


// TypeScript Arrays
const list:string[] = [];
list.push("John");


// TypeScript Tuples
let fruit: readonly [string, number, number] = ["Apple", 5,2];
console.log(fruit); // ["Apple", 5]


//TypeScript Object Types
const car: {type: string, model:string, year: number} = {
     type: "Toyota",
    model: "Corolla",
  year: 2009
}

// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// Let's start with numeric.
enum CardinalDirections {
  North,
  East,
  South,
  West
};

console.log(CardinalDirections.North); // 0


// TypeScript Type Aliases and Interfaces
type useerAge = number;
type userName = string;
type userInfo = string | boolean;

type  cars = {
   Age : useerAge,
   Name: userName,
   Info:  userInfo
}

let car1: cars = {
  Age: 2026,
  Name: "Lexus",
  Info: "Good Car"
}

console.log(car1);






