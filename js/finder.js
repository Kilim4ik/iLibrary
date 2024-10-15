"use strict";

import { headerInput, booksReg } from "./constants.js";
import { renderBooks } from "./render.js";

headerInput.addEventListener("input", () => {
  const newArr = booksReg.filter(({ bookName }) =>
    bookName.toLowerCase().includes(headerInput.value.toLowerCase())
  );

  renderBooks(newArr);
});
