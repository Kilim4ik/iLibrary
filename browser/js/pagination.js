"use strict";

import { booksReg, pagination } from "./constants";
import { getBook } from "./dataBooksComands";
import { renderBooks } from "./render";

let page = 1;
pagination.addEventListener("click", () => {
  page++;
  getBook(page);
  renderBooks(booksReg);
  console.log("pagination!");
});
