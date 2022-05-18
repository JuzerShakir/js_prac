"use strict";

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markHigherBMI;
let markBMI;
let johnBMI;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);
