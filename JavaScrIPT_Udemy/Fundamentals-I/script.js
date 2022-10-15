// let js ="amazing";

// console.log(1+2+1); 
// console.log("Jonas");

// let firstName = "Jonas";

// let personName = "Lana";

// console.log(personName);

// true

// let javascriptIsFun = true;

// console.log(javascriptIsFun);

// console.log(typeof true );

// javascriptIsFun = "Yes";

// console.log(typeof javascriptIsFun)


// console.log(typeof 2);

// let c;
// console.log(c);
// console.log(typeof c);

// c = 199;
// console.log(c);
// console.log(typeof c);

// console.log(typeof null);    // object

// const birthYear = 1991;
// console.log(birthYear);

// // birthYear = 1222; not allowed

// var job = "programmer"; // old way of declaring a variable in js

// lastName = "Gaur";
// console.log(lastName);

// const ageJonas = 2037 - 1991;
// const ageSarah =  2037 - 2018;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah =  now - 2018;

// console.log(ageJonas , ageSarah);

// // Arithmetic/Mathematic operators
// console.log(ageJonas * 2  , ageJonas / 10 , 2**3);

// // '+' operator also concatenates  strings
// const firstName = "Hardik";
// const lastName = "Gaur";

// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10+5;
// console.log(x);

// x+=15;      // x = x + 15;
// console.log(x);

// x *= 2;
// console.log(x);

// x/=2;
// console.log(x);

// // Comparison or Relational Operators
// console.log(ageJonas > ageSarah) // < , > , >= , <= 
// console.log(ageSarah>=18);

// const isFullAge = ageSarah>=10;

// console.log(now - 1991 > now - 2018);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah =  now - 2018;

// Template Literals


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const currentYear = 2027;

// const jonas = 'I\'m ' + firstName + ', a ' + (currentYear - birthYear) + " years old " + job + "!";  // Very bothersome  way

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;   // Template Literal

// console.log(jonasNew);

// console.log(`Just a regular string..`); // Backticks just work fine with strings

// console.log("\nString with\n\
// multiple \n\
// lines\n");      // normal strings

// console.log(`String with        
// multiple
// lines`);        // Using template literals 


// Decision Making

// const age = 16;
// const isOldEnough = age>=18;

// if(isOldEnough){
//     console.log("Driver is old Enough to drive 🚗");
// } else{
//     const yearsEarly = 18 -age;
//     console.log(`Driver is ${yearsEarly} year${yearsEarly==1 ?``: `s`} early to really drive ;-)`);
// }

// const birthYear = 2001;
// let century;
// if(birthYear <= 2000){
//     century = 20;           // Block scope variable
// }else{
//     century = 21;
// }

// console.log(century);

// // Type Casting and 

// const inputYear = '1991';
// console.log(inputYear + 19);
// console.log(Number(inputYear)  + 19);  // Type Conversion

// console.log(Number('Hardik'));      // Will Print NaN
// console.log(typeof NaN);            // Prints number

// console.log(String(23) ,23 );

// //Type Coercion
// console.log('I am ' + 23 + ' years old.');  // Type coercion happening , 23 converted from number to string type
// console.log('I am 23 years old.')

// console.log('23' - '10' - 3); // Strings are converted into number because of type coercion triggered by the - operator  

// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;            // n='11'
// n = n-1;                    // n = 11 - 1;
// console.log(n);

// console.log(2+3+4+'5'); 

// console.log('10' - '4' - '3' - 2 + '5');

// Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// const  money =100;

// if(money){

//     if(money){
//         console.log('Don;t spend it all)
//     }else{
//         console.log('You should get a job')l
//     }
// }


// Equality Operators


// const age = 18;
// if(age === '18')        // No type Coercion with === operator
//     console.log("Person just turned 18");
// else
//     console.log("He is either younger or older than a 18 year old");

// if(age == '18')     // Type coercion occurs with == operator
//     console.log("Person just turned 18");
// else
//     console.log("He is either younger or older than a 18 year old");

// // const prompt = require("prompt-sync")({ sigint: true});
// const favorite = prompt(`What's your favorite number?`);

// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23)      // '23' === 23 ->  doesn't works . '23' is not converted to number
//     console.log(`Cool 23 is your favorite number`);


// const newFavorite = Number(prompt(`What's your favorite number?`));

// console.log(newFavorite);
// console.log(typeof newFavorite);

// if(newFavorite === 23)      // '23' == 23 -> works fine. '23' is converted to number
//     console.log(`Cool 23 is your favorite number`);

// const number = Number(prompt("Enter a number : "));
// if(number!==23)
//     console.log("Why not 23?");


// Logical Operators

// let hasDriverLicense = true;
// let hasGoodVision =true; 

// console.log(hasDriverLicense && hasGoodVision);

// hasGoodVision = false;
// console.log(hasDriverLicense && hasGoodVision);

// console.log(hasDriverLicense || hasGoodVision);

// console.log(!hasDriverLicense);

// hasGoodVision = true;

// const shouldDrive =  hasDriverLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive");
// }else{
//     console.log("Someone else should drive");
// }

// const isTired = false;

// if(shouldDrive && !isTired){
//     console.log("Sarah is able to drive");
// }else{
//     console.log("Someone else should drive");
// }

// Conditional / Ternary Operator 
const age = 18;
age <18 ? console.log("18") : console.log("Not 18") ;

const drink = age>=18 ? `Wine` : `Water`; 
console.log(drink);












 