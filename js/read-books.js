const container = document.querySelector("main");
const bookBackdrop = document.querySelector(".book-decriprion__backdrop");
const bookModal = document.querySelector(".book-description__window");
container.addEventListener("click", (e) => {
  const book = allBooks.find((elem) => elem.name == e.target.alt);
  console.log(book);
  bookBackdrop.classList.remove("is-hidden");
  bookModal.innerHTML = `
  <img class="book-description__img" src="${book.file}" alt="" />
  <div class="book-description__contant">
    <h2 class="book-description__book-name">${book.name}</h2>
    <h3 class="book-description__book-authtor">${book.authtor}</h3>
    <p class="book-description__book-descriprion">${book.description}</p>
    <button class="book-description__book-button">Read</button>
  </div>`;
});
