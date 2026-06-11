// JavaScript and TypeScript Primitives
//boolean, number, string, null, undefined, symbol, bigint
strictNullChecks: true;

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
const name1: string = "Alice";
console.log(name1); // Alice

const logedIn: boolean = false;
console.log(logedIn); // false

const scores: (number | string)[] = [85, 90, 78, "Hello"];
console.log(scores); // array

function greetMe(name: string) {
  console.log(`Good morning ${name}`);
}

greetMe("John");

//Type Inference
let userName = "John Gyamfi";

// Type Safety in Action
// One of TypeScript's main benefits is catching type-related errors during development.
// Let's look at how TypeScript helps prevent common mistakes

let userName1: string = "Alice";
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
let page: any = "1";
page = 1;

// TypeScript Arrays
const list: string[] = [];
list.push("John");

// TypeScript Tuples
let fruit: readonly [string, number, number] = ["Apple", 5, 2];
console.log(fruit); // ["Apple", 5]

//TypeScript Object Types
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// Let's start with numeric.
enum CardinalDirections {
  North,
  East,
  South,
  West,
}

console.log(CardinalDirections.North); // 0

// TypeScript Type Aliases and Interfaces
type useerAge = number;
type userName = string;
type userInfo = string | boolean;

type cars = {
  Age: useerAge;
  Name: userName;
  Info: userInfo;
};

let car1: cars = {
  Age: 2026,
  Name: "Lexus",
  Info: "Good Car",
};

console.log(car1);

type myApp = {
  Name: string;
  Year: number;
};

let App1: myApp = {
  Name: "Search",
  Year: 2026,
};

console.log(App1);

// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
  height: number;
  width: number;
}

const myRectangle: Rectangle = {
  height: 10,
  width: 20,
};

// Extending Interfaces
// Interfaces can extend each other's definition.
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface ColoredRectangle extends Rectangle {
  color: string;
}

const myColorRectangle: ColoredRectangle = {
  height: 10,
  width: 20,
  color: "red",
};

console.log(myColorRectangle);

// TypeScript Union Types
// Union types are used when a value can be more than a single type.

const myProperty = (propertys: string | number) => {
  console.log(`my property is ${propertys}`);
};

myProperty("Phone");
myProperty(10);

// TypeScript Functions
function getTime(): number {
  return new Date().getTime();
}

getTime();

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log("Hello");
}
printHello();

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

const multiply = (a: number, b: number) => {
  console.log(a * b);
};

multiply(10, 2);

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

// Type Alias
// Function types can be specified separately from functions with type aliases.
// These types are written similarly to arrow functions, read more about arrow functions here.
type Nagate = (value: number) => number;
const nagateFunction: Nagate = (value) => value + 3;
nagateFunction(1);

// TypeScript Casting
// Casting is the process of overriding a type.
let x: unknown = 1;
console.log(x as number);

// Casting with <>
// Using <> works the same as casting with as.
let num1: unknown = 10;
console.log(<string>num1);

// TypeScript Classes
class Pesrson {
  private name;
  private age;
  constructor(name: string, age: number) {
    ((this.name = name), (this.age = age));
  }
}

let person1 = new Pesrson("Kwame", 25);
console.log(person1);

// Readonly
class Animals {
  constructor(private readonly name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const animal = new Animals("Goat");
console.log("Animal Name", animal.getName());

// Inheritance: Implements
interface Shape {
  getCircum: () => number;
}

class Triangles implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number,
  ) {}

  public getCircum(): number {
    return this.width * this.height;
  }
}

let Tri = new Triangles(20, 10);
console.log(Tri.getCircum());

class Circumfrence extends Triangles {
  public constructor(width: number, height: number) {
    super(width, height);
  }

  public getData() {
    return this.width + this.height;
  }
}

// Abstract Classes
abstract class Vehicle {
  public abstract makeSound(): string;

  public getGeb(): string {
    return "Hello World";
  }
}

class Cars extends Vehicle {
  public constructor(protected readonly sounds: string) {
    super();
  }

  public makeSound(): string {
    return this.sounds;
  }
}

let lexux = new Cars("Puupuu");
console.log(lexux.makeSound());
console.log(lexux.getGeb());

abstract class Kids {
  abstract KidsCry(): string;

  public KidName(name: string): string {
    return `Kid Name is:${name}`;
  }
}

class Kid1 extends Kids {
  public constructor(protected readonly cry: string) {
    super();
  }

  public KidsCry(): string {
    return this.cry;
  }
}

let kid1 = new Kid1("Waa Waa");
console.log(kid1.KidsCry());
console.log(kid1.KidName("Kwame"));

abstract class PhoneMusic {
  abstract phoneSound(): string;

  public phoneName(name: string): string {
    return `The phone name is ${name}`;
  }
}

class Iphone extends PhoneMusic {
  public constructor(protected song: string) {
    super();
  }

  public phoneSound() {
    return this.song;
  }
}
let iphone = new Iphone("ringing ringing");

console.log(iphone.phoneName("Ihpone 17"));
console.log(iphone.phoneSound());

// TypeScript Basic Generics
// Generics with functions help create more general functions that accurately represent the input and return types.
function createPage<page1, page2>(p1: page1, p2: page2): [page1, page2] {
  return [p1, p2];
}

console.log(createPage<number, number>(30, 20));

class displayName<T> {
  public Name: T | undefined;

  constructor(Name: T | undefined) {
    this.Name = Name;
  }
}

let displayName1 = new displayName("John");
console.log(displayName1);

// Type Aliases
// Generics in type aliases allow creating types that are more reusable.
type Machies<T, c, v> = {
  Name: T;
  Country: c;
  version: v;
};

const Phone: Machies<string, string, number> = {
  Name: "Iphone",
  Country: "Germany",
  version: 14,
};
console.log(Phone);

// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
class webSite<T = string> {
  public value: T | undefined;

  constructor(value: T) {
    this.value = value;
  }

  public getName(): T | undefined {
    return this.value;
  }
}

let wdb = new webSite("Hello worlds");
console.log(wdb.getName());

// TypeScript Utility Types
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
// This chapter covers the most popular utility types.

// Partial
interface Data {
  name: string;
  expire: number;
}

let cocacol: Partial<Data> = {
  name: "Fanta",
  expire: 2026,
};

console.log(cocacol);

// Required
// Required changes all the properties in an object to be required.
// parakeet.ai
interface Devices {
  Make: string;
  Model: string;
  Year?: number;
}

let myCar: Required<Devices> = {
  Make: "Lexu",
  Model: "Germany",
  Year: 2026,
};

console.log(myCar);

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const remote: Record<string, boolean> = {
  Tv: true,
  Bob: false,
};

console.log(remote);

// Omit
// Omit removes keys from an object type.

interface Persons {
  name: string;
  age: number;
  location?: string;
}

let Peraon2: Omit<Persons, "location"> = {
  name: "John Gyamfi",
  age: 30,
};
console.log(Peraon2);

const bob: Pick<Persons, "name"> = {
  name: "Kwame",
};

// TypeScript Null & Undefined

type color = "red" | "blue" | "green";
type Hexcolor<T extends color> = `#${string}`;

let myColor: Hexcolor<"blue"> = "#0000FF";

// TypeScript Type Guards
// Use typeof checks to narrow primitive unions inside conditional branches.

const formatValue = (value: string | number) => {
  if (typeof value == "string") {
    return value.trim().toUpperCase();
  } else {
    return value.toFixed(2);
  }
};
const result1 = formatValue("Thank God");
const result2 = formatValue(100.1);
console.log(result1, result2);

// instanceof Type Guards
// The instanceof operator checks if an object is an instance of a specific class or constructor function.
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Fish {
  swim() {
    console.log("Swimming...");
  }
}

const animalMove = () => {
  if (animal instanceof Bird) {
    animal.fly();
  }
  if (animal instanceof Fish) {
    animal.swim();
  }
};
