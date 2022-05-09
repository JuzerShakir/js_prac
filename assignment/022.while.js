const worldPopulation = 768;
const population = [100, 200, 300, 765];

const percentages = [];

function percentageOfWorld1(population) {
  percentages.push((population / worldPopulation) * 100);
}

let i = 0;
while (i < population.length) {
  percentageOfWorld1(population[i]);
  i++;
}

console.log(percentages);
