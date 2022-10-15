
const prompt = require("prompt-sync")({sigint : true});

const billValue = Number(prompt("Enter bill value : "));

const tip = billValue * ( billValue>=50 && billValue<=300 ? 0.15 : 0.2);

console.log(`The bill was ${billValue} , the tip was ${tip} and the total value is ${billValue + tip}.`);