"use strict";

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// * Adds new HTML element to the document
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");

// * After user has clicked on submit button
button.addEventListener("click", function () {
  const input = document.querySelector("textarea").value;
  //   console.log(text);
  const inputElements = input.split("\n");
  //   console.log(inputElements);

  // which will hold the strings we want to output
  let outputElements = [];

  // loops through user input
  for (const inputElement of inputElements) {
    // deletes empty chars, lowercase all chars and divide the str into an array
    let arr = inputElement.trim().toLowerCase().split("_");

    // since we want the second element in the array to have an uppercase
    let secondEle = arr[1];
    arr[1] = secondEle.replace(secondEle[0], secondEle[0].toUpperCase());

    // convert the arr to string and append spaces as desired
    outputElements.push(arr.join("").padEnd(20, " "));

    // console.log(outputElements);
  }

  // * OUTPUT
  for (const [index, element] of outputElements.entries()) {
    console.log(`${element + "✅".repeat(index + 1)}`);
  }
});
