const prompt = require("prompt-sync")({sigint : true});
console.log("Dolphins scores : ");
const dolphinScore1 = Number(prompt());
const dolphinScore2 = Number(prompt());
const dolphinScore3 = Number(prompt());

const dolphinsAverageScore = (dolphinScore1+dolphinScore2+dolphinScore3)/3;

console.log("Koalas Scores : ");
const koalasScore1 = Number(prompt());
const koalasScore2 = Number(prompt());
const koalasScore3 = Number(prompt());

const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3)/3;

console.log(`Dolphins Average : ${dolphinsAverageScore.toFixed(1)} Koalas Average : ${koalasAverageScore.toFixed(1)}`);

let answer;

if(koalasAverageScore>dolphinsAverageScore && koalasAverageScore>=100){
    ans = `Koalas are the winner`;
} else if(dolphinsAverageScore>koalasAverageScore &&      dolphinsAverageScore>=100){
    ans = `Dolphins are the winner`;
} else if(dolphinsAverageScore===koalasAverageScore && dolphinsAverageScore>=100 && koalasAverageScore>=100){
    ans = `The Match ended as a Draw`;
} else{
    ans = `No team won today`;
}


console.log(ans);



