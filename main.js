"use strict";

//Selectors
const toggler = document.querySelector(".nav_toggler");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal_close");
const overlay = document.querySelector(".overlay");

//Event lIsteners
toggler.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Functions
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
