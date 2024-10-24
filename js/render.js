"use strict";
import { booksReg } from "./constants.js";

export function renderBooks(arr) {
  const newList = arr.reduce(
    (acc, book) =>
      (acc += ` <img class="book" src="${book.photo}" alt="${book.bookName}">`),
    ``
  );

  document.querySelector("main").innerHTML = newList;
}
renderBooks(booksReg);
