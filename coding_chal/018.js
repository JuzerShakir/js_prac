const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// * Challenge 1
dogs.map((e) => (e.recFood = Math.trunc(e.weight ** 0.75 * 28)));
console.log(dogs);

// * Challenge 2
const sarahDog = dogs.find((e) => e.owners.includes("Sarah"));
// console.log(sarahDog);
console.log(
  `Sarahs' dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? "much." : "little."
  }`
);

// * Challenge 3
const ownersEatTooMuch = dogs
  .filter((e) => e.curFood > e.recFood)
  .flatMap((e) => e.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((e) => e.curFood < e.recFood)
  .flatMap((e) => e.owners);
console.log(ownersEatTooLittle);

//* Challenge 4
const eatTooMuchString = `${ownersEatTooMuch.join(
  " and "
)}'s dogs eat too much!`;
console.log(eatTooMuchString);
const eatTooLittleString = `${ownersEatTooLittle.join(
  " and "
)}'s dogs eat too little!`;
console.log(eatTooLittleString);

//* Challenge 5
console.log(dogs.some((e) => e.curFood === e.recFood));

const calcRecFood = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// * Challenge 6
console.log(dogs.some((e) => calcRecFood(e)));

// * Challenge 7
console.log(dogs.filter((e) => calcRecFood(e)));

// * Challenge 8
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));
