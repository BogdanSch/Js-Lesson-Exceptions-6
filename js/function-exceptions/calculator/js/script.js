"use strict";

let value1 = 0,
  value2 = 0,
  result = 0;
let action = "";

const output = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn-number");
const actionButtons = document.querySelectorAll(".btn-action");
const calculateButton = document.querySelector(".btn-calculate");
const clearButton = document.querySelector(".btn-clear");
const squareButton = document.querySelector(".btn-square");
const rootButton = document.querySelector(".btn-root");

squareButton.addEventListener("click", (e) => {
  let input = +output.value;
  result = Math.pow(input, 2);
  output.value = result;
});

rootButton.addEventListener("click", (e) => {
  try {
    let input = +output.value;
    if (input < 0)
      throw new Error("Square root of a negative number doesn't exist!");
    result = Math.sqrt(input);
    output.value = result;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

numberButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (output.value === "0") {
      if (element.textContent === ",") {
        output.value += element.textContent;
      } else {
        output.value = element.textContent;
      }
    } else if (element.textContent === "," && !output.value.includes(",")) {
      output.value += element.textContent;
    } else {
      if (!isNaN(+output.value)) {
        output.value += element.textContent;
      }
    }
  });
});

actionButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    let input = +output.value;
    if (element.textContent === "+/-") {
      output.value = -input;
    } else {
      value1 = input;
      action = element.textContent;
      output.value = 0;
    }
  });
});

clearButton.addEventListener("click", (e) => {
  output.value = 0;
  value1 = value2 = result = 0;
});

calculateButton.addEventListener("click", (e) => {
  value2 = +output.value;
  let expression = value1 + action + value2;

  try {
    result = eval(expression);
    output.value = result;
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
