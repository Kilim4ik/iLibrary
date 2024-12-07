import { container } from "./constants.js";

export const showError = (message) => {
  const code = `    <div class="message-window">
    <img src="../src/svg/info.svg" alt="info message icon">
    <p>${message}</p>
  </div>`;
  container.insertAdjacentHTML("afterbegin", code);
  setTimeout(() => {
    document.querySelector(".message-window").remove();
  }, 8000);
};
