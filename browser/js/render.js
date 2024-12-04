"use strict";
import { booksReg } from "./constants.js";

function addPagination() {
  document.querySelector("main").insertAdjacentHTML(
    "beforeend",
    ` <div class="pagination">
  <img src="../src/svg/refresh-ccw-svgrepo-com.svg" alt="" />
  <p>load more</p>
</div>`
  );
}
export function renderBooks(arr, isRenderPagination) {
  const newList = arr.reduce(
    (acc, book) =>
      (acc += ` <img class="book" src="${book.photo}" alt="${book.bookName}">`),
    ``
  );

  document.querySelector("main").innerHTML = newList;
  if (isRenderPagination) {
    addPagination();
  }
}

export function updateRenderBooks(arr) {
  const newList = arr.reduce(
    (acc, book) =>
      (acc += ` <img class="book" src="${book.photo}" alt="${book.bookName}">`),
    ``
  );

  document.querySelector("main").insertAdjacentHTML("beforeend", newList);
}

updateRenderBooks(booksReg);
