import {
  // users,
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
  sugnUpInputs,
} from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { navigation } from "./nav.js";
import { getUser, createUser } from "./dataUsersComands.js";
import { sendEmail } from "./mailer.js";

console.log("test");
const start = async () => {
  const code = await sendEmail("lavrovskiy.danya@gmail.com");
  console.log(code); // Теперь код будет доступен здесь
};
start();

const users = await getUser();

header.addEventListener("click", (e) => {
  if (e.target == logInButton) {
    loginBackdrop.classList.remove("is-hidden");
  }
  if (e.target == logOutButton) {
    switchOnLogIn();
  }

  navigation(e);
});

loginBackdrop.addEventListener("click", (e) => {
  validationCloseModal();
  if (e.target.nodeName == "P") {
    loginBackdrop.classList.toggle("is-hidden");
    signUpBackdrop.classList.toggle("is-hidden");
  }
});
signUpBackdrop.addEventListener("click", (e) => {
  validationCloseModal();
  if (e.target.nodeName == "P") {
    signUpBackdrop.classList.toggle("is-hidden");
    loginBackdrop.classList.toggle("is-hidden");
  }
});
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = users.find((elem) => elem.email == loginForm.children[0].value);
  if (user.password == loginForm.children[1].value) {
    thisUser = user;
    labelUser.textContent = thisUser.login;
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
  const obj = {};
  sugnUpInputs.forEach((elem) => {
    obj[elem.name] = elem.value;
  });
  if (
    obj.login.trim() === "" ||
    obj.email.trim() === "" ||
    obj.password.trim() === "" ||
    obj.validNum.trim() === ""
  )
    return;
  console.log(obj);

  createUser(obj);
});

function switchOnLogOut() {
  logOutButton.classList.remove("is-hidden");
  logInButton.classList.add("is-hidden");

  labelUser.textContent = thisUser.login;
}
function switchOnLogIn() {
  logInButton.classList.remove("is-hidden");
  logOutButton.classList.add("is-hidden");

  thisUser = null;

  labelUser.textContent = "";
}
if (thisUser) switchOnLogOut();
