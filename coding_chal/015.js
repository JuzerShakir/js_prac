"use strict";

const checkDogs = function (dogsJulia, dogsKate) {
  const onlyDogsJulia = dogsJulia.slice(1, -2);
  //   console.log(onlyDogsJulia);

  const dogsOfKateJulia = onlyDogsJulia.concat(dogsKate);
  //   const dogsOfKateJulia = [...onlyDogsJulia, ...dogsKate];
  //   console.log(dogsOfKateJulia);

  dogsOfKateJulia.forEach(function (v, i) {
    console.log(
      `Dog number ${i + 1} is ${
        v >= 3 ? "an adult" : "a puppy"
      } and is ${v} years old.`
    );
  });
};

const dogsJuliaTest1 = [3, 5, 2, 12, 7];
const dogsKateTest1 = [4, 1, 15, 8, 3];

const dogsJuliaTest2 = [9, 16, 6, 8, 3];
const dogsKateTest2 = [10, 5, 6, 1, 4];

checkDogs(dogsJuliaTest1, dogsKateTest1);
checkDogs(dogsJuliaTest2, dogsKateTest2);
