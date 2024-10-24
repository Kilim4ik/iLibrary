import { getBook } from "./dataBooksComands.js";
import { getUser } from "./dataUsersComands.js";
export const booksReg = await getBook();
export const users = await getUser();

export const headerInput = document.querySelector(".header__search");
export const checkbox = document.querySelector("#burger-checker");
export const mobileMenu = document.querySelector(".mobile-menu-backdrop");
export const loginBackdrop = document.querySelector(".login-backdrop");
export const signUpBackdrop = document.querySelector(".signup-backdrop");
export const createBookBackdrop = document.querySelector(
  ".create-book-backdrop"
);
export const changeBookBackdrop = document.querySelector(
  ".change-book-backdrop"
);
export const loginForm = document.querySelector(".login__form");
export const signUpForm = document.querySelector(".signup__form");
export const createBookForm = document.querySelector(".create-book__form");
export const changeBookForm = document.querySelector(".change-book__form");
export const header = document.querySelector(".header");
export const labelUser = document.querySelector(".header__user-name");
export const logOutButton = document.querySelector(".user-logout");
export const logInButton = document.querySelector(".user-login");
export const container = document.querySelector("main");
export const bookBackdrop = document.querySelector(
  ".book-decriprion__backdrop"
);
export const bookModal = document.querySelector(".book-description__window");
