const neighbors = ["Dubai", "Yemen", "Saudi Arabia"];

neighbors.push("Utopia");
neighbors.pop();
// console.log(neighbors);

if (neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const indexDubai = neighbors.indexOf("Dubai");
const indexSaudiArabia = neighbors.indexOf("Saudi Arabia");
const indexYemen = neighbors.indexOf("Yemen");

neighbors[indexDubai] = "UAE";
neighbors[indexYemen] = "Republic of Yemen";
neighbors[indexSaudiArabia] = "Saudi";

console.log(neighbors);
