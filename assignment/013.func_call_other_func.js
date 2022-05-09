const worldPopulation = 7900;

const percentageOfWorld4 = (population) => (population / worldPopulation) * 100;

const describePopulation = (country, population) => {
  const percent = percentageOfWorld4(population);

  return `${country} has ${population} which is about ${percent}% of the world.`;
};

console.log(describePopulation("China", 1200));
console.log(describePopulation("Oman", 2100));
console.log(describePopulation("USA", 100));
