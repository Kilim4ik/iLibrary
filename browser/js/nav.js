import { booksReg, loginBackdrop, createBookBackdrop } from "./constants.js";
import { validationCloseModal } from "./close-modals.js";
import { renderBooks } from "./render.js";
import { filterBooksByAuthor } from "./dataBooksComands.js";
export const navigation = async (e) => {
  e.target.focus();
  if (e.target.id == "create-book") {
    validationCloseModal();

    if (thisUser) {
      createBookBackdrop.classList.remove("is-hidden");
    } else loginBackdrop.classList.remove("is-hidden");
  }

  if (e.target.id == "user-books") {
    if (!thisUser) loginBackdrop.classList.remove("is-hidden");
    else {
      renderBooks(await filterBooksByAuthor(thisUser.login));
    }
  }
  if (e.target.id == "all-books") renderBooks(booksReg, true);
};
