const inputValue = document.querySelector("#font-size-control");
console.log(inputValue);
const text = document.querySelector("#text");
console.log(text);

inputValue.addEventListener("input", biggerFontSizeText);

function biggerFontSizeText(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value) {
    text.style.fontSize = event.currentTarget.value + "px";
  }
}