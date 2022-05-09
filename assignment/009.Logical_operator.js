const country = "Oman";
const continent = "Asia";
const isIsland = false;
let population = 10;
const language = "English";

if (language == "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
