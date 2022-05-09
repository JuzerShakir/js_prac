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

  // * Challenge 6
  printGoals: function (...names) {
    console.log(names, names.length);
  },
};

// * Challenge 1
const [BMPlayers, BDPlayers] = [...game.players];
// console.log(BMPlayers, BDPlayers);

// * Challenge 2
const [gkBM, ...fieldPlayersBM] = [...BMPlayers];
// console.log(gkBM, fieldPlayersBM);

const [gkBD, ...fieldPlayersBD] = [...BDPlayers];
// console.log(gkBD, fieldPlayersBD);

// * Challenge 3
const allPlayers = [...BMPlayers, ...BDPlayers];
// console.log(allPlayers);

// * Challenge 4
const playersFinal = [...BMPlayers, "thiago", "coutinho", "Perisic"];
// console.log(playersFinal);

// * Challenge 5
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// * Challenge 6
// game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// game.printGoals(...game.scored);

// * Challenge 7
// console.log((team1 < team2 && "team1") || "team2");
