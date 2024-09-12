"use strict";
let thisUser;
thisUser = JSON.parse(localStorage.getItem("user"));
class User {
  // #email;
  // #password;
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.userBooks = [];
  }
  addUser() {
    users.push(this);
  }
  addBook(elem) {
    this.userBooks.push(elem);
  }
}
