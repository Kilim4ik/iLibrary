

checkbox.addEventListener("change", () => {
  mobileMenu.classList.toggle("is-hidden");
});
mobileMenu.addEventListener("click", (e) => {
  navigation(e);
  mobileMenu.classList.toggle("is-hidden");
  checkbox.checked = false;
});
