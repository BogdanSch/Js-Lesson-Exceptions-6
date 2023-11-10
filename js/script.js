"use strict";

function raiser(my_var = 0) {
  let x = my_var; // помилка
  throw new Error("Test error!");
  console.log("my_var = " + my_var); // цей оператор не виконається
}

try {
  raiser();
  console.log("after error");
} catch (ex) {
  console.log("ERROR " + ex.toString());
} finally {
  console.log("Бувай!");
}
