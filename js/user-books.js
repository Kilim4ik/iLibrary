"use strict";
class User {
  #email;
  #password;
  constructor({ name, email, password }) {
    this.name = name;
    this.#email = email;
    this.#password = password;
    this.userBooks = [];
  }
  createNewBook() {}
}
const buttonUserBooks = document.querySelector("#user-books");
buttonUserBooks.addEventListener("click", () => {});
