import { createBook } from "./dataBooksComands.js";
createBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow(e);

  let arr = [];
  for (let elem of createBookForm.children) {
    arr.push(elem.value);
  }
  if (arr[2].size > 5) {
  }
  const newBook = new Book({
    bookName: arr[0],
    description: arr[1],
    bookFile: arr[2],
  });
  createBook(newBook);
  thisUser.addBook(newBook);
  newBook.addBook();
});
