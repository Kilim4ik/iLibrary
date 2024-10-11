const usersURL = "https://6707785ca0e04071d22a73ed.mockapi.io/users";
export const createUser = (user) => {
  fetch(booksURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(user),
  });
};

export const changeUser = (userID, user) => {
  fetch(`${usersURL}/${userID}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  });
};
export const deleteUser = (userID) => {
  fetch(`${usersURL}/${userID}`, {
    method: "DELETE",
  });
};
