import { closeModalWindow, validationCloseModal } from "./close-modals.js";
import {
  container,
  bookBackdrop,
  bookModal,
  booksReg,
  changeBookBackdrop,
  changeBookForm,
  changeBookInputs,
} from "./constants.js";
import {
  changeBook,
  deleteBook,
  filterBooksByName,
} from "./dataBooksComands.js";
import { addFile } from "./multer.js";
import { showError } from "./notify.js";

container.addEventListener("click", async (e) => {
  let book = booksReg.find((elem) => elem.bookName == e.target.alt);

  if (!book && e.target.alt) {
    book = await filterBooksByName(e.target.alt);
    book = book[0];
  }
  if (book) {
    validationCloseModal();
    bookBackdrop.classList.remove("is-hidden");
    bookModal.innerHTML = `
  <img class="book-description__img" src="http://testing-task-1.onrender.com/files/photo/${
    book.bookPhoto
  }" alt="" />
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
    <a href="http://testing-task-1.onrender.com/files/pdf/${
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
      changeBookForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let arr = Array(changeBookForm.children);
        const changedBook = {
          bookName: arr[0][0].value,
          description: arr[0][1].value,
        };
        if (
          changedBook.bookName.trim() === "" ||
          (await filterBooksByName(changedBook.bookName.trim()))
        ) {
          showError(
            "The book was not created, the title field is empty or busy"
          );
          return;
        }
        if (changedBook.description.trim() === "") {
          showError("The book was not created, the description field is empty");
          return;
        }
        try {
          const res = await addFile(changeBookForm);
          changedBook["bookFile"] = `../${res.file[0].path}`;

          changedBook["bookPhoto"] = `../${res.photo[0].path}`;
        } catch (err) {
          console.log(err);
          return;
        }

        closeModalWindow(e);

        console.log(changedBook);
        changeBook(book.id, changedBook);
      });
    }
    if (e.target.dataset.action == "delete") {
      closeModalWindow();
      deleteBook(book.id);
    }
  });
});
