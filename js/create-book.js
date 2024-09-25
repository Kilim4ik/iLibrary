createBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow(e);

  let arr = [];
  for (let elem of createBookForm.children) {
    arr.push(elem.value);
  }
  if(arr[2].size > 5 ){}
  const newBook = new Book({
    name: arr[0],
    description: arr[1],
    file: arr[2],
  });
  thisUser.addBook(newBook);
  newBook.addBook();
});
