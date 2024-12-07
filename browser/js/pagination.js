"use strict";

import { booksReg, container, setBooks } from "./constants.js";
import { getBook } from "./dataBooksComands.js";
import { updateRenderBooks } from "./render.js";

container.addEventListener("click", async (e) => {
  const button = e.target.closest(".pagination");
  if (button) {
    page++;
    const currentScroll = window.scrollY;
    const arr = await getBook(page);
    updateRenderBooks(arr);
    window.scrollTo(0, currentScroll);
    setBooks(page);
  }
});
