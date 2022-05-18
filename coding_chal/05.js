"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas}.)`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins}.)`;
  } else {
    return "No team win!";
  }
};

// test data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// test data 2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

console.log(checkWinner(avgDolphins, avgKoalas));
