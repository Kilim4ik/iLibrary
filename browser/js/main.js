import {
  // users,
  loginBackdrop,
  signUpBackdrop,
  createBookBackdrop,
  loginForm,
  signUpForm,
  code,
  createBookForm,
  header,
  labelUser,
  logOutButton,
  logInButton,
  sugnUpInputs,
  setCode,
  setUsers,
} from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { navigation } from "./nav.js";
import { filterBooksByAuthor } from "./dataBooksComands.js";
import { getUser, createUser } from "./dataUsersComands.js";
import { sendEmail } from "./mailer.js";
import { showError } from "./notify.js";

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
  if (
    e.target.dataset.action == "send-email" &&
    !e.target.classList.contains("active")
  ) {
    e.target.classList.add("active");

    const obj = {};
    sugnUpInputs.forEach((elem) => {
      obj[elem.name] = elem.value;
    });
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 10000);
    const fetchData = async () => {
      setCode(await sendEmail(obj.email.trim()));
    };
    fetchData();
  }
  if (e.target.dataset.action == "change-window") {
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
  const obj = {};
  sugnUpInputs.forEach((elem) => {
    obj[elem.name] = elem.value;
  });
  if (obj.login.trim() === "") {
    showError("Your account has not been created. This name is used");
    return;
  }
  if (obj.email.trim() === "") {
    showError("Your account has not been created. This email is used");

    return;
  }
  if (obj.validNum.trim() !== String(code)) {
    showError(
      "Your account has not been created. The code was entered incorrectly"
    );

    return;
  }
  delete obj.validNum;
  closeModalWindow(e);

  createUser(obj);
  setUsers();
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
