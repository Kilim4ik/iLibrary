import { container, bookBackdrop, bookModal, booksReg } from "./constants.js";
container.addEventListener("click", (e) => {
  const book = booksReg.find((elem) => elem.bookName == e.target.alt);
  console.log(book);
  bookBackdrop.classList.remove("is-hidden");
  bookModal.innerHTML = `
  <img class="book-description__img" src="${book.photo}" alt="" />
  <div class="book-description__contant">
    <h2 class="book-description__book-name">${book.bookName}</h2>
    <h3 class="book-description__book-authtor">${book.bookAuthor}</h3>
    <p class="book-description__book-descriprion">${book.description}</p>
    <button class="book-description__book-button">Read</button>
  </div>`;
});
