const calcAverageHumanAge = (arr) => {
  const dogsHumanAge = arr.map((v) => (v <= 2 ? 2 * v : 16 + 4 * v));
  console.log(dogsHumanAge);

  const onlyAdultDogs = dogsHumanAge.filter((v) => v >= 18);
  console.log(onlyAdultDogs);

  const avgAgeAdultDogs =
    onlyAdultDogs.reduce(function (acc, v) {
      return acc + v;
    }, 0) / onlyAdultDogs.length;
  console.log(avgAgeAdultDogs);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
