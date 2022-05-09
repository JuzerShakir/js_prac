function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}.`;
}

const finlandDesc = describeCountry("Finland", 8, "Denmark");
const omanDesc = describeCountry("Oman", 8, "Muscat");
const istanbulDesc = describeCountry("Istanbul", 8, "Turkey");

console.log(finlandDesc, omanDesc, istanbulDesc);
