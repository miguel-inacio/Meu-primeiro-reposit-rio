// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", previneLink);

function previneLink(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", previneCheckbox);

function previneCheckbox(event) {
  event.preventDefault();
}

INPUT_TEXT.addEventListener("keypress", previneKeypress);

function previneKeypress(event) {
  if(event.key !== "a") {
    event.preventDefault();
  }
}