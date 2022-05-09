const country = "Oman";
let population = 10;

const finlandPopulation = 6;
const avgPopulation = 33;

if (population > avgPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average.`
  );
}
