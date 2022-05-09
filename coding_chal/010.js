"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...names) {
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
    console.log(names.length);
  },
};

// * Challenge 1
// for (const [i, name] of game.scored.entries())
//   console.log(`Goal ${i}: ${name}`);

// * Challenge 2

const avgOdds = (values_arr) => {
  let sum = 0;
  for (const value of values_arr) sum += value;
  console.log(sum / values_arr.length);
};
// avgOdds(Object.values(game.odds));

// * Challenge 3
for (const [k, v] of Object.entries(game.odds)) {
  //   console.log(
  // (game[k] && `Odd of victory ${game[k]}: ${v}`) || `Odd of draw: ${v}`
  //   );
}

// * Challenge BONUS
const scorers = {};

for (const goalers of game.scored) {
  scorers[goalers] ? scorers[goalers]++ : (scorers[goalers] = 1);
}
// console.log(scorers);
