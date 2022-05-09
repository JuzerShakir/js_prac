const worldPopulation = 7900;

// Arrow function
const percentageOfWorld3 = (population) => {
  const popPercent = (population / worldPopulation) * 100;

  return `${popPercent}% of the world population.`;
};

console.log(percentageOfWorld3(100));
console.log(percentageOfWorld3(1200));
console.log(percentageOfWorld3(2100));
