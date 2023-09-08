const headerLanguageBtn = document.querySelectorAll(".header__language__btn");
const headerLanguage = document.querySelector(".header__language");
const headerWrapBtnsBurger = document.querySelector(
  ".header__wrap-btns__burger"
);
const headerBtnConnection = document.querySelector(".header__wrap-btns__btn");
const modal = document.querySelector(".modal");
const closeBtnModal = document.querySelector(".modal__action__close-btn");

//set language
function setLanguage() {
  const language = window.localStorage.getItem("language");

  if (!language) {
    return;
  }

  headerLanguageBtn.forEach((el) => {
    if (el.dataset.language === language) {
      el.classList.add("active-language");
    } else {
      el.classList.remove("active-language");
    }
  });
}
setLanguage();

// handle toggle language
headerLanguage.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("active-language")) {
    return;
  } else {
    headerLanguageBtn.forEach((el) => {
      el.classList.remove("active-language");
    });
    target.classList.add("active-language");
    const language = target.dataset.language;
    window.localStorage.setItem("language", language);
  }
});

//handle active menu
headerWrapBtnsBurger.addEventListener("click", (e) => {
  const target = e.target;
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header__nav");
  const headerPhone = document.querySelector(".header__phone");
  const headerLanguage = document.querySelector(".header__language");
  header.classList.toggle("active-header-menu");
  target.classList.toggle("active-menu");
  headerNav.classList.toggle("active");
  headerPhone.classList.toggle("active");
  headerLanguage.classList.toggle("active");
});

// open modal
headerBtnConnection.addEventListener("click", (e) => {
  modal.classList.add("active-modal");
});

// close modal function
function closeModal() {
  modal.classList.remove("active-modal");
}

// handle close modal
closeBtnModal.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target === modal) {
    closeModal();
  }
  return;
});
