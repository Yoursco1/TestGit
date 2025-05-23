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
console.log(greeting);

/*
//Constant is simultaneously declared and initialized and can not be modified.
const learning = "JAvascript";
learning = "CSS";
console.log(learning); //Uncaught TypeError: Assignment to constant variable.
*/

            // PROGRAM BLOCK  determines the scope of JS variables (global or local)
function testfunction(a, b){  //->local declaration of variables a and b (vissible within the function block)/ Vaariable shadowing /not recormended.
    console.log((" The area of a Triangle is " , a * b , "m " , "inside a local scope"));
}//as we have value belong to the variables so we have instruction belong to functions. function can be assumed to a variable too.
testfunction(8, 7);


console.log("The area of triangle at the global scope is ", a*b + "m");

var  globalGreeting  =  "Good  ";
   
function  newFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
newFunction(); //a function can only be executed by calling it by it's name.
   
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
roseNumber =  roseNumber - 20; //modification of a variable need declaration but just initialisation
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
 * Display in the console information about the first and last contact in the form: name/phone/email.
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

console.log("Name:", contactName1, " Phone:", contactPhone1, " Email:", contactEmail1);
console.log("Name:", contactName2, "Phone:", contactPhone2, " Email:", contactEmail2);
console.log("Name:", contactName3, "Phone:", contactPhone3, " Email:", contactEmail3);