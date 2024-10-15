import {
  loginBackdrop,
  signUpBackdrop,
  createBookBackdrop,
  loginForm,
  signUpForm,
  createBookForm,
  header,
  labelUser,
  logOutButton,
  logInButton,
} from "./constants.js";
import { validationCloseModal } from "./close-modals.js";
import { navigation } from "./nav.js";

header.addEventListener("click", (e) => {
  if (e.target == logInButton) {
    loginBackdrop.classList.remove("is-hidden");
  }
  navigation(e);
});
document.addEventListener("click", (e) => {
  validationCloseModal();
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

    switchOnLogOut();
    logOutButton.addEventListener("click", () => {
      switchOnLogIn();
      closeModalWindow(e);
    });
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

function switchOnLogOut() {
  logOutButton.classList.add("user-logout");
  logOutButton.classList.remove("user-login");
  logInButton.textContent = "Log out ";
}
function switchOnLogIn() {
  thisUser = null;
  logOutButton.classList.add("user-login");
  logOutButton.classList.remove("user-logout");
  logInButton.textContent = "Log in ";
  labelUser.textContent = "";
}
