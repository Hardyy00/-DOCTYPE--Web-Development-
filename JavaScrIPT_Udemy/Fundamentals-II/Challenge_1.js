'use strict';
const prompt = require('prompt-sync')({sigint:true});

const calcAverage = (score1  , score2 , score3) => (score1+score2+score3)/3;

function checkWinner(avgDolphins , avgKoalas){

    let ans =  `No team won.`;

    if(avgDolphins>=2*avgKoalas){
        ans =  `\nWinner : Dolphins\nScore : ${avgDolphins}.`;
        
    }else if(avgKoalas>=2*avgDolphins){
        ans =  `\nWinner : Koalas\nScore : ${avgKoalas}.`;
        
    }

    return ans;

}


console.log("Dolphin scores : ");
const dolphinScore1 = Number(prompt());
const dolphinScore2 = Number(prompt());
const dolphinScore3 = Number(prompt());

const avgDolphins = calcAverage(dolphinScore1 , dolphinScore2 , dolphinScore3);

console.log("Koalas Scores : ");
const koalasScore1 = Number(prompt());
const koalasScore2 = Number(prompt());
const koalasScore3 = Number(prompt());

const avgKoalas = calcAverage(koalasScore1 , koalasScore2 , koalasScore3);

console.log(checkWinner(avgDolphins , avgKoalas));
