import { createBook } from "./dataBooksComands.js";
import {
  booksReg,
  changeBookForm,
  createBookForm,
  setBooks,
} from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { renderBooks } from "./render.js";

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
  if (arr.some((elem) => elem == "")) return;
  // if (arr[2].files[0].size > 5) {
  // }

  const newBook = new Book({
    bookName: arr[0][0].value,
    description: arr[0][1].value,
    bookFile: arr[0][2].files,
  });
  console.log(newBook);
  createBook(newBook);
  setBooks();
  setTimeout(renderBooks(booksReg), 3000);
});
changeBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow();
});
