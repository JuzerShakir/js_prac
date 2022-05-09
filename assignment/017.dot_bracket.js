const myCountry = {
  country: "Australia",
  capital: "Sydney",
  language: "English",
  population: 84,
  neighbors: ["New Zealand", "Japan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

console.log((myCountry.population += 2));
console.log((myCountry["population"] -= 2));
