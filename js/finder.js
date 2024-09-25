"use strict";

const headerInput = document.querySelector(".header__search");
headerInput.addEventListener("input", () => {
  const newArr = allBooks.filter(({ name }) =>
    name.toLowerCase().includes(headerInput.value.toLowerCase())
  );
  renderBooks(newArr);
});
