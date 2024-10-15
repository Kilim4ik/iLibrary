const usersURL = "https://6707785ca0e04071d22a73ed.mockapi.io/users";
export const createUser = (book) => {
  //   bookName: "test",
  //   description: "description",
  //   bookFile: null,
  //   bookAuthor: "Danylo Nutella",
  fetch(usersURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((user) => {
      // do something with the new task
    })
    .catch((error) => {
      // handle error
    });
};
export const getUser = () => {
  return fetch(usersURL, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((users) => {
      // Do something with the list of tasks
      return users;
    })
    .catch((error) => {
      // handle error
    });
};
export const changeUser = (userID, user) => {
  fetch(`${usersURL}/${userID}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed: true }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((users) => {
      // Do something with updated task
    })
    .catch((error) => {
      // handle error
    });
};
export const deleteUser = (userID) => {
  fetch(`${usersURL}/${userID}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((users) => {
      // Do something with deleted task
    })
    .catch((error) => {
      // handle error
    });
};
