import { booksReg, loginBackdrop } from "./constants.js";
import { renderBooks } from "./render.js";
export const navigation = (e) => {
  if (e.target.id == "create-book")
    if (!thisUser) loginBackdrop.classList.remove("is-hidden");
    else createBookBackdrop.classList.remove("is-hidden");

  if (e.target.id == "user-books") {
    if (!thisUser) loginBackdrop.classList.remove("is-hidden");
    else renderBooks(thisUser.userBooks);
  }
  if (e.target.id == "all-books") renderBooks(booksReg);
};
