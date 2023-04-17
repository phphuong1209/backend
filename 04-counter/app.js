const incButton = document.querySelector("#btn-increase");
const decButton = document.querySelector("#btn-decrease");
const showNumber = document.querySelector("#number");
const saveSaveNumButton = document.querySelector("#btn-save");
const saveShowNumber = document.querySelector("#saved-number-value");
let mangChua = 0;
incButton.addEventListener("click", function () {
  ++mangChua;
  showNumber.innerHTML = mangChua;
  console.log(mangChua);
});
decButton.addEventListener("click", function () {
  if (mangChua > 0) {
    --mangChua;
    showNumber.innerHTML = mangChua;
    console.log(mangChua);
  }
});
saveSaveNumButton.addEventListener("click", function () {
  saveShowNumber.innerHTML = showNumber.innerHTML;
});
