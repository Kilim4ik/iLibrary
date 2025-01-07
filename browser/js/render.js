"use strict";
import { booksReg, container, setBooks } from "./constants.js";

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
  if (arr === undefined) {
    container.innerHTML = `<div style="position: absolute; top: calc(50% - 8px); left: calc(50% - 50px);">Book not found</div>`;
    return;
  }
  const newList = arr.reduce(
    (acc, book) =>
      (acc += `<div class='book-wrapper'> <img class="book" src="${book.bookPhoto}" alt="${book.bookName}"> </div>`),
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
      (acc += `<div class='book-wrapper'> <img class="book" src="${book.bookPhoto}" alt="${book.bookName}"> </div>`),
    ``
  );

  document.querySelector("main").insertAdjacentHTML("beforeend", newList);
}
setBooks(1).then(() => updateRenderBooks(booksReg));
