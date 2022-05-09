const worldPopulation = 768;
const population = [100, 200, 300, 765];
console.log(population.length == 4);

const percentages = [];

function percentageOfWorld1(population) {
  const popPercent = (population / worldPopulation) * 100;

  percentages.push(popPercent);
}

percentageOfWorld1(population[0]);
percentageOfWorld1(population[1]);
percentageOfWorld1(population[2]);
percentageOfWorld1(population[3]);

console.log(percentages);
