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
greetMe("John");
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
    year: 2009,
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
console.log(CardinalDirections.North); // 0
let car1 = {
    Age: 2026,
    Name: "Lexus",
    Info: "Good Car",
};
console.log(car1);
let App1 = {
    Name: "Search",
    Year: 2026,
};
console.log(App1);
const myRectangle = {
    height: 10,
    width: 20,
};
const myColorRectangle = {
    height: 10,
    width: 20,
    color: "red",
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
// TypeScript Classes
class Pesrson {
    constructor(name, age) {
        ((this.name = name), (this.age = age));
    }
}
let person1 = new Pesrson("Kwame", 25);
console.log(person1);
// Readonly
class Animals {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const animal = new Animals("Goat");
console.log("Animal Name", animal.getName());
class Triangles {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getCircum() {
        return this.width * this.height;
    }
}
let Tri = new Triangles(20, 10);
console.log(Tri.getCircum());
class Circumfrence extends Triangles {
    constructor(width, height) {
        super(width, height);
    }
    getData() {
        return this.width + this.height;
    }
}
// Abstract Classes
class Vehicle {
    getGeb() {
        return "Hello World";
    }
}
class Cars extends Vehicle {
    constructor(sounds) {
        super();
        this.sounds = sounds;
    }
    makeSound() {
        return this.sounds;
    }
}
let lexux = new Cars("Puupuu");
console.log(lexux.makeSound());
console.log(lexux.getGeb());
class Kids {
    KidName(name) {
        return `Kid Name is:${name}`;
    }
}
class Kid1 extends Kids {
    constructor(cry) {
        super();
        this.cry = cry;
    }
    KidsCry() {
        return this.cry;
    }
}
let kid1 = new Kid1("Waa Waa");
console.log(kid1.KidsCry());
console.log(kid1.KidName("Kwame"));
class PhoneMusic {
    phoneName(name) {
        return `The phone name is ${name}`;
    }
}
class Iphone extends PhoneMusic {
    constructor(song) {
        super();
        this.song = song;
    }
    phoneSound() {
        return this.song;
    }
}
let iphone = new Iphone("ringing ringing");
console.log(iphone.phoneName("Ihpone 17"));
console.log(iphone.phoneSound());
// TypeScript Basic Generics
// Generics with functions help create more general functions that accurately represent the input and return types.
function createPage(p1, p2) {
    return [p1, p2];
}
console.log(createPage(30, 20));
class displayName {
    constructor(Name) {
        this.Name = Name;
    }
}
let displayName1 = new displayName("John");
console.log(displayName1);
const Phone = {
    Name: "Iphone",
    Country: "Germany",
    version: 14,
};
console.log(Phone);
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
class webSite {
    constructor(value) {
        this.value = value;
    }
    getName() {
        return this.value;
    }
}
let wdb = new webSite("Hello worlds");
console.log(wdb.getName());
let cocacol = {
    name: "Fanta",
    expire: 2026,
};
console.log(cocacol);
let myCar = {
    Make: "Lexu",
    Model: "Germany",
    Year: 2026,
};
console.log(myCar);
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const remote = {
    "Tv": true,
    "Bob": false
};
console.log(remote);
let Peraon2 = {
    name: "John Gyamfi",
    age: 30
};
console.log(Peraon2);
const bob = {
    name: "Kwame"
};
// TypeScript Keyof
