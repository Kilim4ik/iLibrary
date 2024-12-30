"use strict";

import { headerInput, container, pagination } from "./constants.js";
import { filterBooksByName, getBook } from "./dataBooksComands.js";
import { renderBooks, updateRenderBooks } from "./render.js";

headerInput.addEventListener("input", async (e) => {
  if (e.target.value == undefined) {
    container.innerHTML = `<div style="position: absolute; top: calc(50% - 8px); left: calc(50% - 50px);">Book not found</div>`;
  } else if (e.target.value === "") {
    page = 1;
    renderBooks(await getBook(1), true);
    pagination.addEventListener("click", async () => {
      page++;
      const currentScroll = window.scrollY;
      const arr = await getBook(page);
      updateRenderBooks(arr);
      window.scrollTo(0, currentScroll);
    });
  } else {
    const newArr = await filterBooksByName(e.target.value);

    newArr !== undefined
      ? renderBooks(newArr)
      : (container.innerHTML = `<div style="position: absolute; top: calc(50% - 8px); left: calc(50% - 50px);">Book not found</div>`);
  }
});
