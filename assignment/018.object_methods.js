const myCountry = {
  country: "Australia",
  capital: "Sydney",
  language: "English",
  population: 84,
  neighbors: ["New Zealand", "Japan"],

  checkIsland: function () {
    this.isIsland = `${this.neighbors.length == 0 ? true : false}`;

    return this.isIsland;
  },

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
  },
};

// console.log(myCountry.describe());
console.log(myCountry.checkIsland());
