const booksURL = "https://6707785ca0e04071d22a73ed.mockapi.io/books";
export const createBook = (book) => {
  //   bookName: "test",
  //   description: "description",
  //   bookFile: null,
  //   bookAuthor: "Danylo Nutella",
  fetch(booksURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(book),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // do something with the new task
    })
    .catch((error) => {
      // handle error
    });
};
export const getBook = (page) => {
  return fetch(`${booksURL}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((books) => {
      // Do something with the list of tasks

      return books;
    })
    .catch((error) => {
      // handle error
    });
};
export const changeBook = (bookID, { bookName, description, bookFile }) => {
  fetch(`${booksURL}/${bookID}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ bookName, description, bookFile }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((books) => {
      // Do something with updated task
    })
    .catch((error) => {
      // handle error
    });
};
export const deleteBook = (bookID) => {
  fetch(`${booksURL}/${bookID}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((books) => {
      // Do something with deleted task
    })
    .catch((error) => {
      // handle error
    });
};
export const filterBooksByAuthor = (author) => {
  return fetch(`${booksURL}?bookAuthor=${author}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((books) => {
      // Do something with the list of tasks

      return books;
    })
    .catch((error) => {
      // handle error
    });
};
