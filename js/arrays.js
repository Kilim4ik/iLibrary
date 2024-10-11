const allBooks = [];
const users = [];
fetch("https://6707785ca0e04071d22a73ed.mockapi.io/books")
  .then((elem) => elem.json())
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
