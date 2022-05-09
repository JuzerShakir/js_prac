const worldPopulation = 768;
const population = [100, 200, 300, 765];

const percentages = [];

function percentageOfWorld1(population) {
  percentages.push((population / worldPopulation) * 100);
}

for (let i = 0; i < population.length; i++) {
  percentageOfWorld1(population[i]);
}

console.log(percentages);
