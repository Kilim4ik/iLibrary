import { createBook } from "./dataBooksComands.js";
import { changeBookForm, createBookForm } from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";

class Book {
  constructor({ bookName, description, bookFile }) {
    this.bookName = bookName;
    this.description = description;
    this.bookFile = bookFile;
    this.bookAuthor = thisUser ? thisUser.login : "error";
  }
}
createBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow(e);

  let arr = Array(createBookForm.children);
  console.log(createBookForm.children[2].files[0]);
  if (arr.some((elem) => elem == "")) return;
  if (arr[2].files[0].size > 5) {
  }
  const newBook = new Book({
    bookName: arr[0],
    description: arr[1],
    bookFile: arr[2],
  });
  createBook(newBook);
});
changeBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow();
});
