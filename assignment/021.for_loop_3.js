listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (v = 0; v < listOfNeighbours[i].length; v++) {
    console.log(`Neighbour: ${listOfNeighbours[i][v]}`);
  }
}
