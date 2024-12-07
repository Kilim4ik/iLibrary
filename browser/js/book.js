import { createBook, filterBooksByName } from "./dataBooksComands.js";
import {
  booksReg,
  changeBookForm,
  createBookForm,
  setBooks,
} from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { renderBooks } from "./render.js";
import { showError } from "./notify.js";

class Book {
  constructor({ bookName, description, bookFile }) {
    this.bookName = bookName;
    this.description = description;
    this.bookFile = bookFile;
    this.bookAuthor = thisUser ? thisUser.login : "error";
  }
}
createBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let arr = Array(createBookForm.children);
  const newBook = new Book({
    bookName: arr[0][0].value,
    description: arr[0][1].value,
    bookFile: arr[0][2].files,
  });
  if (
    newBook.bookName.trim() === "" ||
    (await filterBooksByName(newBook.bookName.trim()))
  ) {
    showError("The book was not created, the title field is empty");
    return;
  }
  if (newBook.description.trim() === "") {
    showError("The book was not created, the description field is empty");
    return;
  }
  closeModalWindow(e);
  createBook(newBook);
  setBooks();
  async () => {
    setTimeout(renderBooks(booksReg), 3000);
  };
});
changeBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow();
});
