import {
  loginBackdrop,
  signUpBackdrop,
  loginForm,
  signUpForm,
  code,
  header,
  labelUser,
  logOutButton,
  logInButton,
  sugnUpInputs,
  setCode,
} from "./constants.js";
import { validationCloseModal, closeModalWindow } from "./close-modals.js";
import { navigation } from "./nav.js";
import {
  createUser,
  fetchUser,
  isLoginUsedByData,
} from "./dataUsersComands.js";
import { generateUserKey } from "./generateUserKey.js";
import { sendEmail } from "./mailer.js";
import { showError } from "./notify.js";
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
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = await fetchUser(
    loginForm.children[0].value,
    loginForm.children[1].value
  );

  if (user) {
    console.log(user);
    thisUser = user;

    labelUser.textContent = user.login;
    closeModalWindow();
    localStorage.setItem("user", JSON.stringify(user.userKey));

    switchOnLogOut();

    logOutButton.addEventListener("click", () => {
      switchOnLogIn();
      closeModalWindow(e);
    });
  } else {
    showError("The email or password was entered incorrectly");
  }
});
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const obj = {};
  sugnUpInputs.forEach((elem) => {
    obj[elem.name] = elem.value;
  });

  if (await isLoginUsedByData("login", obj.login.trim())) {
    showError("Your account has not been created. This name is used");
    return;
  }
  if (await isLoginUsedByData("email", obj.email.trim())) {
    showError("Your account has not been created. This email is used");

    return;
  }
  if (obj.validNum.trim() !== String(code)) {
    showError(
      "Your account has not been created. The code was entered incorrectly"
    );
    return;
  }
  generateUserKey(obj);

  delete obj.validNum;
  closeModalWindow(e);

  createUser(obj);
});

function switchOnLogOut() {
  logOutButton.classList.remove("is-hidden");
  logInButton.classList.add("is-hidden");

  labelUser.textContent =
    thisUser.login.length > 11
      ? thisUser.login.slice(0, 11) + "..."
      : thisUser.login;
}
function switchOnLogIn() {
  logInButton.classList.remove("is-hidden");
  logOutButton.classList.add("is-hidden");

  thisUser = null;

  labelUser.textContent = "";
}
if (thisUser) switchOnLogOut();

// document.querySelector("#button").addEventListener("click", (e) => {
//   if (e.target.checked) console.log("!!!!");
//   console.log(e.target);
// });
