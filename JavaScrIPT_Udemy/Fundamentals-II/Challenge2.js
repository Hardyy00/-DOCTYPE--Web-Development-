'use strict';
const prompt = require("prompt-sync")({sigint:true});

let tipArray = [] , totalBillArray = [];

const calcTip = function (bill){
    
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

const bills = [125 , 555 , 44]
tipArray.push(calcTip(bills[0]));
totalBillArray.push(bills[0]+tipArray[0]);

tipArray.push(calcTip(bills[1]));
totalBillArray.push(bills[1]+tipArray[1]);

tipArray.push(calcTip(bills[2]));
totalBillArray.push(bills[2] + tipArray[2]);

console.log("Tip array : " , tipArray);
console.log("Total Bill Array : "  , totalBillArray);




