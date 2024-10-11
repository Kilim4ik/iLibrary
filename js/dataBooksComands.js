const booksURL = "https://6707785ca0e04071d22a73ed.mockapi.io/books";
export const createBook = (book) => {
  fetch(booksURL, {
    method: "POST",
    headers: { "content-type": "application/json;charset=urf-8" },
    // Send your data in the request body as JSON
    body: JSON.stringify(book),
  });
};
export const getBook = () => {
  fetch("booksURL", {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
};
export const changeBook = (bookID, book) => {
  fetch(`${booksURL}/${bookID}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book),
  });
};
export const deleteBook = (bookID) => {
  fetch(`${booksURL}/${bookID}`, {
    method: "DELETE",
  });
};
