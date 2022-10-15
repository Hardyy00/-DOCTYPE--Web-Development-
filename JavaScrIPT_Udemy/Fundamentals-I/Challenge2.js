const markWeight = 95 , markHeight = 1.88;
const johnWeight = 85 ,  johnHeight = 1.76;

const markBMI = markWeight / (markHeight**2);
const johnBMI = johnWeight / (johnHeight**2);

console.log(markBMI , johnBMI)

let ans;

if(markBMI > johnBMI){
    ans = `Mark's BMI (${markBMI.toFixed(1)}) is higher than John's BMI (${johnBMI.toFixed(1)})`;
}else if(markBMI < johnBMI){

    ans = `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's BMI (${markBMI.toFixed(1)})`;
}else{

    ans = `Mark's BMI (${markBMI.toFixed(1)}) is equal to John's BMI (${johnBMI.toFixed(1)})`;
}

console.log(ans);