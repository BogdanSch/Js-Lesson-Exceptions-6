"use strict";

try {
  let age = +prompt("Ваш рік:", "");
  if (isNaN(age)) {
    throw new Error("Дані некоректні");
  }
  if (age < 0) {
    throw new Error("Вік < 0");
  }
  alert(age);
} catch (ex) {
  alert("Вибачте, виникла помилка: " + ex.message);
}
