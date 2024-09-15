"use strict";
function renderBooks(arr) {
  const newList = arr.reduce(
    (acc, book) => (acc += `<img src="${book.file}" alt="${book.name}">`),
    ``
  );
  document.querySelector("main").innerHTML = newList;
}
renderBooks(allBooks);
