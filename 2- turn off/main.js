const onImage = document.querySelector("#switch-on");
const offImage = document.querySelector("#switch-off");
offImage.addEventListener("click", function () {
  offImage.style.display = "none";
  onImage.style.display = "block";
});
onImage.addEventListener("click", function () {
  onImage.style.display = "none";
  offImage.style.display = "block";
});
