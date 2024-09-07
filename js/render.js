"use strict";
function renderBooks(arr) {
  const newList = arr.reduce(
    (acc, book) => (acc += `<img src="${book.file}" alt="picture">`),
    ``
  );
  document.querySelector("main").innerHTML = newList;
}
renderBooks(allBooks);
