'use strict';

const markWeight = Number(prompt("Enter Mark's weight : "));
const markHeight = Number(prompt("Enter Mark's height : "));
const johnWeight = Number(prompt("Enter John's weight : "));
const johnHeight = Number(prompt("Enter John's height : "));

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const mark = {
    fullName : "Mark Miller",
    mass : markWeight,
    height : markHeight,

    calcBMI : function(){
        this.BMI = markWeight/(markHeight**2);
        return this.BMI;
    },

    compareBMI : function(anotherBMI){

        let biggerBMI;
        let smallerBMI;

        if(this.calcBMI() > anotherBMI.calcBMI()){
            biggerBMI = mark;
            smallerBMI = john;
        }else{
            biggerBMI = john;
            smallerBMI = mark;
        }

        return `${biggerBMI.fullName}'s BMI (${biggerBMI.BMI.toFixed(1)}) is higher than ${smallerBMI.fullName}'s BMI (${smallerBMI.BMI.toFixed(1)}).`;

    } 
}

const john = {
    fullName : "John Smith",
    mass : johnWeight,
    height : johnHeight,

    calcBMI : function(){
        this.BMI = johnWeight/(johnHeight**2);
        return this.BMI;
    },

    compareBMI : function(anotherBMI){

        let biggerBMI;
        let smallerBMI;

        if(this.calcBMI() > anotherBMI.calcBMI()){
            biggerBMI = john;
            smallerBMI = mark;
        }else{
            biggerBMI = mark;
            smallerBMI = john;
        }

        return `${biggerBMI.fullName}'s BMI (${biggerBMI.BMI.toFixed(1)}) is higher than ${smallerBMI.fullName}'s BMI (${smallerBMI.BMI.toFixed(1)}).`;
        
    } 
}

console.log(mark,john);

console.log(john.compareBMI(mark));


