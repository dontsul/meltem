import * as yup from "yup";
import Inputmask from "inputmask";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  phone: yup.string().required(),
});

const form = document.querySelector("#form");
const nameField = document.querySelector("#name");
const phoneField = document.querySelector("#phone");
const action = document.querySelector(".modal__action");
const success = document.querySelector(".modal__success");

// create mask
const phoneMask = new Inputmask({
  mask: "+380-99-999-99-99",
  greedy: false,
  clearIncomplete: true,
});
phoneMask.mask(phoneField);

//handle input name and phone
nameField.addEventListener("input", (e) => {
  if (nameField.classList.contains("error")) {
    nameField.classList.remove("error");
  }
});
phoneField.addEventListener("input", (e) => {
  if (phoneField.classList.contains("error")) {
    phoneField.classList.remove("error");
  }
});

// handle submit form
async function handleSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    await schema.validate(data, { abortEarly: false });

    console.log("send form");
    nameField.value = "";
    phoneField.value = "";
    action.classList.add("hide");
    success.classList.remove("hide");
    asyncAction(action, success);
  } catch (error) {
    error.inner.forEach((e) => {
      if (e.path === "name" && !nameField.classList.contains("error")) {
        nameField.classList.add("error");
      }
      if (e.path === "phone" && !phoneField.classList.contains("error")) {
        phoneField.classList.add("error");
      }
    });
  }
}

form.addEventListener("submit", handleSubmit);

function asyncAction(actionModal, successModal) {
  const modal = document.querySelector(".modal");
  setTimeout(() => {
    actionModal.classList.remove("hide");
    successModal.classList.add("hide");
    modal.classList.remove("active-modal");
  }, 3000);
}
