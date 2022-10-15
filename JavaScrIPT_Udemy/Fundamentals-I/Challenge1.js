const markWeight = 95 , markHeight = 1.88;
const johnWeight = 85 ,  johnHeight = 1.76;

const markBMI = markWeight / (markHeight**2);
const johnBMI = johnWeight / (johnHeight**2);

console.log(markBMI , johnBMI)

const markHigherJohn = markBMI > johnBMI;
console.log("is Mark's BMI higher than john ?\n" + markHigherJohn);