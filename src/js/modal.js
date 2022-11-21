"use strict";
import { quoteIsStarted } from ".";
const modal = document.querySelector("#modal");
let modalIsShown = false;
export let timeoutForModalWindow = false;

export function showModalWindow(evt) {
  if (quoteIsStarted) {
    evt.preventDefault();
    timeoutForModalWindow = setTimeout(() => {
      modal.classList.add("_open");
      modalIsShown = true;
    }, 5000);
  }
}

export function checkTimeoutForModalWindow() {
  if (timeoutForModalWindow) {
    clearTimeout(timeoutForModalWindow);
    timeoutForModalWindow = false;
  }
}

const buttonStop = document.querySelector("#button-stop");

buttonStop.addEventListener("click", showModalWindow);

const modalClose = document.querySelector("#modal-close");

export function closeModalWindow() {
  modal.classList.remove("_open");
  modalIsShown = false;
}
modalClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  closeModalWindow();
});

window.addEventListener("keydown", (evt) => {
  if (evt.key == "Escape" && modalIsShown) {
    closeModalWindow();
  }
});

modal.addEventListener("click", (evt) => {
  if (!evt.target.closest(".modal__container")) {
    evt.preventDefault();
    closeModalWindow();
  }
});

const modalSubmit = document.querySelector("#modal-submit");

modalSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (emailValidation(modalEmail)) {
    closeModalWindow();
  }
});

//* проверка email
const modalEmail = document.querySelector("#modal-email");

function emailValidation(el) {
  const emailRegular = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,6}$/i;
  if (!el.value) {
    console.log("заполните поле");
    return false;
  } else if (emailRegular.test(el.value)) {
    console.log("спасибо");
    return true;
  }
  console.log("введите корректный email");
  return false;
}
