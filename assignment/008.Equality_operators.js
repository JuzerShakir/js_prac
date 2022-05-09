const numNeighbors = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbors == 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 borders.");
} else {
  console.log("No borders");
}
