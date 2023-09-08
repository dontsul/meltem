document.addEventListener("DOMContentLoaded", () => {
  const cookiesModal = document.querySelector(".modal-cookies");

  function showCookies() {
    cookiesModal.classList.remove("hide-cookies");
  }

  setTimeout(showCookies, 2000);

  const btn = document.querySelector("#cookies-btn");
  btn.addEventListener("click", () => {
    cookiesModal.classList.add("hide-cookies");
  });
});
