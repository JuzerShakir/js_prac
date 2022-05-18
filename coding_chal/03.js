"use strict";

const dolphins = 97 + 112 + 101;
const koalas = 109 + 95 + 123;
const avgDolphins = dolphins / 3;
const avgKoalas = koalas / 3;

if (avgDolphins > avgKoalas && dolphins >= 100) {
  console.log("Dolphins have won the trophy!");
} else if (avgDolphins < avgKoalas && koalas >= 100) {
  console.log("Koalas have won the trophy!");
} else if (dolphins >= 100 && koalas >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No teams win the trophy!");
}
