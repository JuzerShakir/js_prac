const tipValues = [];
const total = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = 0;

const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

for (let i = 0; i < bills.length; i++) {
  tip = calcTip(bills[i]);
  tipValues.push(tip);
  total.push(bills[i] + tip);
}

console.log(total, tipValues);

function calcAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAvg(total));
console.log(calcAvg(tipValues));
