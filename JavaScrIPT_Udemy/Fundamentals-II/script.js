'use strict';       // Strict mode


// let hasDriverLicense = false;
// const passTest = true;

// if(passTest){
//     hasDiverLicense = true;     // no error in browser without strict mode
// }

// if(hasDriverLicense) console.log("I can drive");

// // const interface = 'Audio';
// // const private = 534;     cannot use due to strict mode
// 

// function logger(){   // function declaration

//     console.log("Hiii Hardik");
// }

// logger();       // Calling / running / invoking the function

// logger();
// logger();

// function fruitProcessor(apples , oranges){

//     console.log(apples , oranges);
//     const juice =  `Juice with ${apples} apples and ${oranges} oranges`;

//     return juice;
// }

// const appleJuice = fruitProcessor(5 , 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2 , 4);
// console.log(appleOrangeJuice);




// // console.log(calcAge(1991)); // Calling Function declaration before defining it

// function calcAge1(birthYear){        // Function declaration

//     return 2037 - birthYear;
// }

// console.log(calcAge1(1991));

// // console.log(calAge2(1991)); // Cannot call function expression before defining it . This is because of a process called hoisting

// const calAge2 = function (birthYear){       // Function expression// Anonymous function . this function acts like a expression
//     return 2037 - birthYear;
// }           

// const age2 =  calAge2(1991);
// console.log(age2);

/*          Arrow Function          */

// const calcAge3 = birthYear => 2037 - birthYear;
// const age = calcAge3(1991);
// console.log(age);

            // To find years until retirement
            
// // const yearsUntilRetirement = birthYear => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     return retirement;
// // }

// // console.log(yearsUntilRetirement(1991));

         // Passing multiple arguments to an arrow function


// const yearsUntilRetirement = (birthYear , firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991 , `John`));
// console.log(yearsUntilRetirement(1980 , `Bob`));


/*   Functions calling other functions  */

// function cutFruitPieces(fruit){
//     return fruit  * 4;
// }

// const cutFruitPieces = fruit => fruit*4;

// function fruitProcessor(apples , oranges){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice =  `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;

//     return juice;
// }

// console.log(fruitProcessor(2,3));

/*          Review Functions        */

// const calcAge = function (birthYear) {
//     return 2037 - birthYear 
// };

// const yearsUntilRetirement = function (birthYear , firstName) {
    
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement>=0){
//         return `${firstName} retires in ${retirement} years`;
//     }

//     return -1;
// }

// console.log(yearsUntilRetirement(1991 , `Hardik`));



    /*              Arrays          */

// const friend1 =  `Michael`;
// const friend2 =  `Steven`;
// const friend3 =  `Peter`;

// const friends = [`Micheal` , `Steven` , `Peter`];   // Arrays 'literal syntax'
// console.log(friends);


// const yea = new Array(1991,1984,2008,2020);  // Another way to declare an array

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length)     // give the length of the array

// console.log(friends[friends.length-1]); // gives the last element of the array

// friends[2] = `Jay`;
// console.log(friends);

// // const jonas = ['Jonas' , 'Hardik' , 2037-1991];

// const firstName= 'hardik';
// const jonas = [firstName , 'Hardik' , 2037-1991 , friends];

// console.log(jonas);

// // Exercise
// const calcAge = function(birthYear){
//     return 2037-birthYear;
// }

// const years = [1990,1967,2002,2010,2018];
// console.log(calcAge(years))
// console.log(years+10);

// const ages=[calcAge(years[0]),calcAge(years[1]) ,calcAge(years[2]) ];

// console.log(ages);




    /*              Array Methods       */


// // Add elements
// const friends= ['Michael' , 'Steven' , 'Peter'];

// console.log(friends.push('Jay'));   // Returns the new length of the array
// console.log(friends);


// console.log(friends.unshift('John'));   // Returns the new length of the array
// console.log(friends);


// // remove elements

// friends.pop();
// console.log(friends.pop()); // returns the removed/popped element
// console.log(friends);


// friends.shift();        // removes the first element of the array
// console.log(friends);



// console.log(friends.indexOf('Steven')); // Returns the index of an element in the array
// console.log(friends.indexOf('Bob'));    // return -1 because Bob is not in the array


// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// friends.push(23);
// console.log(friends.includes('23'));          // no type coersion  is happening


////////////////////////////////////////////////////////

            /*      Objects         */

// const hardikGaur = [
//     'Hardik',
//     'Gaur',
//     2037-1991,
//     'Student',
//     [`Ron` , `Michael` , `Bassi`]
// ];                      // Array

// object literal syntax
//  hardik = {                // an object (collection oconstf key-value pairs)
//     firstName : 'hardik',       // each key-value pair is called a property
//     lastName : 'Gaur',          // hardik object has 5 properties
//     age : '2022-2003',
//     job :  `Student`,
//     friends : [`Ron` , `Michael` , `Bassi`]
// };    

// console.log(hardik);

        /*      Dot vs Bracket notation      */

// Two ways in which we can get the property from an object

// 1. Dot notation

// console.log(hardik.firstName);

// 2. Bracket Notation

// console.log(hardik['lastName']);


// const nameKey = `Name`;
// console.log(hardik[`first` + nameKey]);
// console.log(hardik[`last` + nameKey]);

// const prompt = require("prompt-sync")({sigint:true});    // It works only on node.js or outside browser environment

// const interestedIn = prompt("What do u want to know bout hardik? Choose b/w firstName , lastName , age , job , friends");

// console.log(hardik[interestedIn]);  // A way to use bracket notation

// if(hardik[interestedIn]){
//     console.log("Bro u got what u asked for");
// }else{
//     alert("You illiterate mf u entered something wrong");
// }

// Methods to add new properties in an object
// hardik.location =  `India`;     // using dot notation
// hardik['email'] =  'hardikgaur8901@gmail.com';  // using bracket notation

// console.log(hardik.firstName.charAt(0).toUpperCase()+hardik.firstName.slice(1) + " has " 
//             + hardik.friends.length + " friends, and his best friend is called " + hardik.friends[0]);

// console.log(`${hardik.firstName.charAt(0).toUpperCase()}${hardik.firstName.slice(1)} has ${hardik.friends.length} friends, and his best friend is ${hardik.friends[0]}.`);



///////////////////////////////////////////////////////////
    /*           Objects Methods           */


// const hardik = {                
//     firstName : 'hardik',       // firstName is a property with a String value
//     lastName : 'Gaur',          
//     birthYear : 1991,
//     job :  `Student`,
//     friends : [`Ron` , `Michael` , `Bassi`],
//     hasDriverLicense : true,    // hasDriverLicense is a property with a boolean value

//     //version1 
//     // calcAge : function(birthYear){      // calcAge is a property with a function value

//     //     return 2037 - birthYear;
//     // }

//     // version 2
//     // calcAge : function(){
//     //     return 2037 - this.birthYear;
//     // }


//     // version 3            // after calculating the value from the function storing the value in the object itself by creating an additional property in the object .  
//     calcAge : function(){
//         this.age = 2037-this.birthYear;
//         return this.age;
//     }

// }; 

// // console.log(hardik.calcAge(2003))       // using dot notation

// // console.log(hardik['calcAge'](2003));     // using bracket notation

// // console.log(hardik.calcAge(hardik.birthYear));

// console.log(hardik.calcAge());
// console.log(hardik.age);



// challenge

// const hardikGaur = {
//     firstName : `hardik`,
//     lastName : `gaur`,
//     birthYear : 2003,
//     job : 'student',
//     hasDriverLicense : true,

//     calcAge : function(){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     toString : function(){

//         this.objectDetails = `${this.firstName.charAt(0).toUpperCase()}${this.firstName.slice(1)} is a 
// ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} 
// driver license.`.replace(/[\r\n]/gm , "");                  // replace(/[\r\n]/gm , "") will remove all the new line character from 
//                                                             //  the string
//         return this.objectDetails;
//     }
// }

// console.log(hardikGaur.toString());


///////////////////////////////////////////////////////////
            /*             FOR LOOP             */


// for(let i=1; i<=10 ;i++){
//     console.log(`Loop ${i}`);
// }


///////////////////////////////////////////////////////////
        /*       Looping Arrays , Breaking and Continuing      */

// const hardikGaur = [
//     'Hardik',
//     'Gaur',
//     2037-1991,
//     'Student',
//     [`Ron` , `Michael` , `Bassi`]
// ];

// for(let i = 0; i<hardikGaur.length;i++ ){

//     // reading from jonas array
//     console.log(hardikGaur[i]);
// }

// creating an array of types based of hardikGaur array

// const types = [];
// for(let i=0; i<hardikGaur.length ;i++){

    // Filling types array
    // types[i] = typeof hardikGaur[i];

    // another way to fill an array
    // types.push(typeof hardikGaur[i]);   // cleaner way to fill an array
// }

// console.log(types);

// const year = [1991 , 2007 , 1969 , 2020 ];
// const ages = [];

// for(let i=0 ; i< year.length ; i++){
//     ages.push(2037 - year[i]);  
// }

// console.log(ages);

// continue   statement
// console.log(`\n-------Only Strings------\n`);
// for(let i=0; i<hardikGaur.length;i++){
//     if(typeof hardikGaur[i]!=`string`) continue;

//     console.log(hardikGaur[i] , typeof hardikGaur[i]);
// }

// break statement
// console.log(`\n----Break With Number-----\n`);
// for(let i=0; i<hardikGaur[i].length;i++){
//     if(typeof hardikGaur[i] == `number`) break;

//     console.log(hardikGaur[i] , typeof hardikGaur[i]);
// }


///////////////////////////////////////////////////////////
        /*      Looping backwards and loops in loops        */


// const hardikGaur = [
//     'Hardik',
//     'Gaur',
//     2037-1991,
//     'Student',
//     [`Ron` , `Michael` , `Bassi`]
// ];

// for(let i=hardikGaur.length-1;i>=0;i--){
//     console.log(hardikGaur[i]);
// }

// nested loops

// for(let exercise = 1; exercise < 4; exercise++){

//     console.log(`--------Starting exercise ${exercise}`);

//     for(let rep=1;rep<6;rep++){
//         console.log(`Lifting weight repetition ${rep} 🏋️`)
//     }
// }



///////////////////////////////////////////////////////////
        /*      While Loop */


let rep = 1;
while(rep<=10){
    console.log(`Rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6) + 1;


if(dice!==6){

    while(dice !==6){
        console.log(`You rolled ${dice}`);
        dice = Math.trunc(Math.random()*6) + 1;
    }
}

console.log(`You rolled 6`);