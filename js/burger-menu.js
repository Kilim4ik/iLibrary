const checkbox = document.querySelector("#burger-checker");
const mobileMenu = document.querySelector(".mobile-menu-backdrop");

checkbox.addEventListener("change", () => {
  mobileMenu.classList.toggle("is-hidden");
});
mobileMenu.addEventListener("click", (e) => {
  navigation(e);
  mobileMenu.classList.toggle("is-hidden");
  checkbox.checked = false;
});
