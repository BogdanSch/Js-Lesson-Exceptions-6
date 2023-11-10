"use strict";

const calculateButton = document.querySelector(".btn-calculate");
const output = document.querySelector(".output");

function printTable(from, to, step = 1, func) {
  if (func === undefined) {
    return;
  }
  let result = "";
  result += `<table class="striped centered">`;
  result += "<thead><tr><th>x</th><th>y</th></tr></thead><tbody>";
  for (var x = from; x <= to; x += step) {
    const y = func(x);
    result += "<tr>";
    result += "<td>" + x + "</td>";
    result += "<td>" + y + "</td>";
    result += "</tr>";
  }
  result += "</tbody></table>";
  output.innerHTML = result;
}

let func;

calculateButton.addEventListener("click", () => {
  let expression = prompt("Enter a mathematical expression (e.g., 5*x): ");

  try {
    eval(`func = (x) => {return ${expression};}`);
  } catch (error) {
    output.innerHTML = `<p class="error">${error.message}</p>`;
  }

  let beginRange, endRange, step;

  try {
    beginRange = +prompt("Enter beginning range for the function: ");
    endRange = +prompt("Enter end range for the function: ");
    step = +prompt("Enter step for the function: ");

    if (isNaN(beginRange) || isNaN(endRange) || isNaN(step)) {
      throw new Error("Invalid input. Please enter numeric values.");
    }
    printTable(beginRange, endRange, step, func);
  } catch (error) {
    output.innerHTML = `<p class="error">${error.message}</p>`;
  }
});
