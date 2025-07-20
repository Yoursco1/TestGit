"use strict";

console.log("Hello, World!");
let weight;


let height = 15;
console.log(height);

//Write a program to find the length of a string stored in a variable str.
let str = "string";
console.log(str.length);

//Create a variable num and check if it is even or odd
let num = 9; 
if(num %2 === 0)
    {
    console.log("The number is Even!");
} 
else{
    console.log("The number is Odd!");
}

//Write a program to calculate the area of a rectangle given length and width.
weight = 12;
let a = height;
let b = weight;
console.log("The area of a rectangle is " , a * b ,"m");
  
/*
//the effect of "use strict"; to /catch mistakes early and write more predictable, secure code
name = olorunyomi;
console.log(name); //-> Uncaught ReferenceError: olorunyomi is not defined at main.js:31:1
*/

//Changing variable values: Variables in the JavaScript language are untyped. (type determined at runtime)
let greeting = "Hello! ";  //->global declaration of variable (vissible in life time of the script)
let counter = 100;
console.log(greeting); //-> Hello!
//greeting = 10;
//console.log(greeting); //-> 10
greeting = greeting + counter;
console.log(greeting);//

/*
//Constant is simultaneously declared and initialized and can not be modified.
const learning = "JAvascript";
learning = "CSS";
console.log(learning); //Uncaught TypeError: Assignment to constant variable.
*/

// PROGRAM BLOCK determines the scope of JS variables (global or local)
function calculateTriangleArea(a, b) {  // 'a' and 'b' are local variables (function parameters)
    // Calculate and log the area of a triangle inside the function's local scope
    console.log(`The area of a Triangle is ${a * b}m inside a local scope`);
}
 
calculateTriangleArea(8, 7);

console.log(`The area of triangle at the global scope is  ${a * b}m`);//

var  globalGreeting  =  "Good  ";
function  newFunction()  {
         var  localGreeting  =  "Morning  ";
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
-newFunction(); //a function can only be executed by calling it by it's name.
   
console.log("main  program:");
console.log(globalGreeting);
//console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined due to wrong scope declaration.

                    //principle of Variable hoisting
//ALWAYS declare variables before using them. JS hoist variable declaration to beggining  of script scope without it's initiasation 
//Using variables, in other words, declaring, initializing, changing, or reading their values
//Try to use the keywords let and const, not the word var.

                    //florist items into variables
        //Price
const rosePrice = 8;
const liliPrice = 10;
const tulipPrice = 2;

        //Quatity
let roseNumber = 70;
let liliNumber = 50;
let tulipNumber = 120;

        //Items Value
let roseValue = rosePrice * roseNumber;
let liliValue = liliPrice * liliNumber;
let tulipValue = tulipPrice * tulipNumber;

        //Total Florist Value
let total = roseValue + liliValue + tulipValue;

        //Printing Florist Values to the console.
console.log("Rose-unit price:", rosePrice, " Quantity:",  roseNumber, " Value:", roseValue );
console.log("Lili-unit price:", liliPrice, " Quantity:", liliNumber,  " Value:", liliValue);
console.log("Tuli-unit price:", tulipPrice, " Quantiyt:", tulipNumber, " Value:", tulipValue);
console.log("Total value ", total);

//modify the above code by decrease the number of roses by 20 and lilies by 30.
//Quatity modified
roseNumber =  roseNumber - 20; //modification of a variable need no declaration but just initialisation
liliNumber = liliNumber - 30;

//Items Value
roseValue = rosePrice * roseNumber;
liliValue = liliPrice * liliNumber;
tulipValue = tulipPrice * tulipNumber;

        //Total Florist Value
total = roseValue + liliValue + tulipValue;

        //Printing Florist Values to the console.
console.log("Rose-unit price:", rosePrice, " Quantity:",  roseNumber, " Value:", roseValue );
console.log("Lili-unit price:", liliPrice, " Quantity:", liliNumber,  " Value:", liliValue);
console.log("Tuli-unit price:", tulipPrice, " Quantiyt:", tulipNumber, " Value:", tulipValue);
console.log("Total value ", total);

/**
 * Declare and initialize the variables where you will store all the information (nine variables in total). 
 * Declare and initialize the variables where you will store all the information (nine variables in total). 
 */
                //first contact
let contactName1 = "Abosede Fasasi";
let contactPhone1 = "(+234)7080565933";
let contactEmail1 = "bosefasasi@gmail.com";

                //Second contact
let contactName2 = "Imisi Aina";
let contactPhone2 = "(+234)8102395414";
let contactEmail2 = "favourimisi@gmail.com";

                //Third contact
let contactName3 = "John Halogen";
let contactPhone3 = "(+234)9038133845";
let contactEmail3 = "johnhalogen@gmail.com";

console.log(`Name: ${contactName1}  Phone: ${contactPhone1} Email: ${contactEmail1}`);// Using template literals for better readability
console.log("Name:", contactName2, "Phone:", contactPhone2, " Email:", contactEmail2);// Using comma to separate values in console.log
console.log("Name:", contactName3, "Phone:", contactPhone3, " Email:", contactEmail3);

//Splitting a string into an array using the split() method
let myName = "Alexander Olorunyomi";
let counters = "192.168.1.1";
console.log(myName.split('.'));

console.log(counters.split('.'));


console.log(30 < 20);// boolean flag names are prefixed with "is",

/* setTimeout(() => {alert("Are you going to stare at this boring page forever?");}, 5000);
// This will run after 5 seconds and show an alert box */

num = Number();//

console.log(num);

let test = "100" - "10";
console.log(test); // test is now 90, because the strings are converted to numbers before subtraction
console.log(`test is a type of ${typeof test}`); // test is now a number

let test2 = "100" + 10;// test2 is now "10010", because the strings are concatenated4

num = "42";
const conversion1 = Number(num);// conversion1 is now 42, a number converted from the string "42"
const strFromBool = String(true);
console.log(`num is a srting converted to ${typeof conversion1}`); // "42"

/* Write a code that will create variables and initialize them with 
values of Boolean, Number, BigInt, String, and undefined types using 
(when possible) literals and constructor functions. */

// Boolean
let boolLiteral = true;
console.log("Boolean (literal):", boolLiteral);//
let boolConstructor = Boolean(false);

let numberliteral = 42; 
console.log("Nunber (literal):", numberliteral);//
let numberConstructor = Number("2343532");//
let numConstructor = Number(456);// BigInt

//literal and constructor
//This is a foundational technique for organizing and reusing code
function Person(name, age){
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. [I am defined using a constructor function]`);
  }
}
  let stringConstructor = new Person("Olorunyomi" , 30);
stringConstructor.sayHello();

/*  Print all values and all types of those values using console.log. Try to use string interpolation to display the value and 
type at the same time with a single console.log call, e.g. in the following form: 1000 [number]. */
num = 1000;
let num1 = 3.13
str = "Hello, Js-World!";
Boolean = true;
let emptyValue = null;
let myUndefined; 
let numArray = [1, 2, 3, 4, 5];
let func = function() {return "I am a function";};
let symb = Symbol("unique");
console.log(`${num} is a data typeOf[${typeof num}]`);
console.log(`${num1} is a data typeOf[${typeof num1}]`);
console.log(`${str} is a data typeOf[${typeof str}]`);
console.log(`${Boolean} is a data typeOf[${typeof Boolean}]`);
console.log(`${emptyValue} is a data typeOf[${typeof emptyValue}]  //null is an object in JavaScript`);
console.log(`${undefined} is a data typeOf[${typeof undefined}]`);
console.log(`Name: ${stringConstructor.name}  Age:${stringConstructor.age} is a data typeOf[${typeof stringConstructor}]`);//constructor function
console.log(`${numArray} is a data typeOf[${typeof numArray}]`); //object
console.log(`${func} is a data typeOf[${typeof func}]`); //function
console.log(`${symb.toString} is a data typeOf[${typeof symb}]`); //symbolnodeeeee


function calculateSum(a, b){
        let sum = a + b;
        return sum;
}
let result = calculateSum(a,b);
console.log(result);