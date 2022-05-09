const worldPopulation = 7900;

// function declaration
function percentageOfWorld1(population) {
  const popPercent = (population / worldPopulation) * 100;

  return `${popPercent}% of the world population.`;
}

console.log(percentageOfWorld1(100));
// console.log(percentageOfWorld1(1200));
// console.log(percentageOfWorld1(2100));

// function expression
const percentageOfWorld2 = function (population) {
  const popPercent = (population / worldPopulation) * 100;

  return `${popPercent}% of the world population.`;
};

console.log(percentageOfWorld2(100));
// console.log(percentageOfWorld2(1200));
// console.log(percentageOfWorld2(2100));
