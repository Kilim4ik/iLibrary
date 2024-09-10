const loginBackdrop = document.querySelector(".login-backdrop");
const signUpBackdrop = document.querySelector(".signup-backdrop");
const loginForm = document.querySelector(".login__form");
const signUpForm = document.querySelector(".signup__form");
const header = document.querySelector(".header");
header.addEventListener("click", () => {
  loginBackdrop.classList.remove("is-hidden");

  document.addEventListener("click", (e) => {
    if (e.target == loginBackdrop || e.target == signUpBackdrop)
      closeModalWindow(e);

    if (e.target.nodeName == "P") {
      loginBackdrop.classList.toggle("is-hidden");
      signUpBackdrop.classList.toggle("is-hidden");
      //   signUpBackdrop.addEventListener("click", closeModalWindow());
    }
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(1);
    });
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
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
  });
});
function closeModalWindow() {
  loginBackdrop.classList.add("is-hidden");
  signUpBackdrop.classList.add("is-hidden");
}
