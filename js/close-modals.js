import {
  loginBackdrop,
  signUpBackdrop,
  createBookBackdrop,
  bookBackdrop,
} from "./constants.js";
export const validationCloseModal = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("backdrop")) closeModalWindow();
  });
};
export function closeModalWindow() {
  loginBackdrop.classList.add("is-hidden");
  signUpBackdrop.classList.add("is-hidden");
  createBookBackdrop.classList.add("is-hidden");
  bookBackdrop.classList.add("is-hidden");
}
