import { checkbox, mobileMenu } from "./constants.js";
import { navigation } from "./nav.js";

checkbox.addEventListener("change", () => {
  mobileMenu.classList.toggle("is-hidden");
});
mobileMenu.addEventListener("click", (e) => {
  navigation(e);
  mobileMenu.classList.toggle("is-hidden");
  checkbox.checked = false;
});
