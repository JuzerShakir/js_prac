const billValue = 0;
const tipValues = [];
const total = [];

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    var tip = billValue * 0.15;
    tipValues.push(tip);
  } else {
    var tip = billValue * 0.2;
    tipValues.push(tip);
  }

  total.push(tip + billValue);
}
const bills = [125, 44, 555];
const output = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tipValues, total);
