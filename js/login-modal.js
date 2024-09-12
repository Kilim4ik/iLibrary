const loginBackdrop = document.querySelector(".login-backdrop");
const signUpBackdrop = document.querySelector(".signup-backdrop");
const createBookBackdrop = document.querySelector(".create-book-backdrop");
const loginForm = document.querySelector(".login__form");
const signUpForm = document.querySelector(".signup__form");
const createBookForm = document.querySelector(".create-book__form");
const header = document.querySelector(".header");
const labelUser = document.querySelector(".header__user-name");
header.addEventListener("click", (e) => {
  if (e.target.classList == "header__button user-login")
    loginBackdrop.classList.remove("is-hidden");
  navigation(e);
});
document.addEventListener("click", (e) => {
  if (
    e.target == loginBackdrop ||
    e.target == signUpBackdrop ||
    e.target == createBookBackdrop
  )
    closeModalWindow(e);

  if (e.target.nodeName == "P") {
    loginBackdrop.classList.toggle("is-hidden");
    signUpBackdrop.classList.toggle("is-hidden");
  }
});
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = users.find((elem) => elem.email == loginForm.children[0].value);
  if (user.password == loginForm.children[1].value) {
    thisUser = user;
    labelUser.textContent = thisUser.name;
    closeModalWindow();
    localStorage.setItem("user", JSON.stringify(thisUser));
  }
});
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  closeModalWindow(e);

  let arr = [];
  for (let elem of signUpForm.children) {
    arr.push(elem.value);
  }
  const newUser = new User({
    name: arr[0],
    email: arr[1],
    password: arr[2],
  });
  newUser.addUser();
});
function closeModalWindow() {
  loginBackdrop.classList.add("is-hidden");
  signUpBackdrop.classList.add("is-hidden");
  createBookBackdrop.classList.add("is-hidden");
}
