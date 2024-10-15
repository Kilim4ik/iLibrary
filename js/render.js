"use strict";
import { getBook } from "./dataBooksComands.js";

export function renderBooks(arr) {
  const newList = arr.reduce(
    (acc, book) => (acc += `<img src="${book.photo}" alt="${book.bookName}">`),
    ``
  );
  document.querySelector("main").innerHTML = newList;
}
renderBooks(await getBook());
