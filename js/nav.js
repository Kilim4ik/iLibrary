import { booksReg, loginBackdrop, createBookBackdrop } from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { renderBooks } from "./render.js";
export const navigation = (e) => {
  if (e.target.id == "create-book") {
    validationCloseModal();

    if (thisUser) {
      createBookBackdrop.classList.remove("is-hidden");
    } else loginBackdrop.classList.remove("is-hidden");
  }

  if (e.target.id == "user-books") {
    if (!thisUser) loginBackdrop.classList.remove("is-hidden");
    else {
      const arr = booksReg.filter((elem) => elem.bookAuthor == thisUser.login);
      renderBooks(arr);
    }
  }
  if (e.target.id == "all-books") renderBooks(booksReg);
};
