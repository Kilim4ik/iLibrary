fetch(
  `https://6707785ca0e04071d22a73ed.mockapi.io/users?userKey=${JSON.parse(
    localStorage.getItem("user")
  )}`
)
  .then((res) => res.json())
  .then((user) =>
    Array.isArray(user) ? (thisUser = user[0]) : (thisUser = undefined)
  );
