import { closeModalWindow, validationCloseModal } from "./close-modals.js";
import {
  container,
  bookBackdrop,
  bookModal,
  booksReg,
  changeBookBackdrop,
  changeBookForm,
} from "./constants.js";
import { changeBook, deleteBook } from "./dataBooksComands.js";
container.addEventListener("click", (e) => {
  const book = booksReg.find((elem) => elem.bookName == e.target.alt);
  if (book) {
    validationCloseModal();
    bookBackdrop.classList.remove("is-hidden");
    bookModal.innerHTML = `
  <img class="book-description__img" src="${book.photo}" alt="" />
  <div class="book-description__content">
    <h2 class="book-description__book-name">${book.bookName}</h2>
    <h3 class="book-description__book-authtor">${book.bookAuthor}</h3>
    <p class="book-description__book-description">${book.description}</p>
    <div class="book-description__button-container">
    ${
      thisUser && book.bookAuthor === thisUser.login
        ? `<button class="book-description__book-button" data-action="change">Change book</button>
        <button class="book-description__book-button" data-action='delete'>Delete book</button>`
        : ``
    }
    <a href="${
      book.bookFile
    }" class="book-description__book-link" target="_blank">Read</a>
    </div>
  </div>`;
  }
  bookBackdrop.addEventListener("click", (e) => {
    if (e.target.dataset.action == "change") {
      closeModalWindow();
      changeBookBackdrop.classList.remove("is-hidden");

      let form = [];
      for (let elem of changeBookForm.children) {
        form.push(elem);
      }
      form[0].value = book.bookName;
      form[1].value = book.description;
      changeBookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (
          form[0].value == "" ||
          form[0].value == " " ||
          form[1].value == "" ||
          form[1].value == " "
        )
          return;
        changeBook(book.id, {
          bookName: form[0].value,
          bookAuthor: book.bookAuthor,
          description: form[1].value,
          bookFile: form[2] || book.bookFile,
        });
      });
    }
    if (e.target.dataset.action == "delete") {
      closeModalWindow();
      deleteBook(book.id);
    }
  });
});
