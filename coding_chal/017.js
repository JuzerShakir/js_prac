"use strict";

const calcAverageHumanAge = (arr) => {
  console.log(
    arr
      .map((v) => (v <= 2 ? 2 * v : 16 + 4 * v))
      .filter((v) => v >= 18)
      .reduce((acc, v, _, arr) => acc + v / arr.length, 0)
  );
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
