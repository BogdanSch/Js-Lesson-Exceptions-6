"use strict";

let responseContainer = document.querySelector(".response");

try {
  let a = +prompt("Enter a value: ");
  let b = +prompt("Enter b value: ");
  let c = +prompt("Enter c value: ");

  if (a !== 0) {
    let d = b ** 2 - 4 * a * c;

    if (isNaN(d)) {
      throw new Error("Please enter valid values!");
    } else {
      if (d < 0) {
        throw new Error("D < 0, there're no solutions!");
      } else if (d === 0) {
        let x = -b / (2 * a);
        responseContainer.innerHTML = x;
      } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        responseContainer.innerHTML = `D = ${d} <br/> x1 = ${x1}, x2 = ${x2}`;
      }
    }
  } else {
    if (c !== 0) {
      let x = -b / c;
      if (isNaN(x)) {
        throw new Error("Please enter valid values!");
      } else {
        responseContainer.innerHTML = x;
      }
    } else {
      throw new Error("c value can't be equals to 0!");
    }
  }
} catch (error) {
  responseContainer.innerHTML = error.toString();
}
