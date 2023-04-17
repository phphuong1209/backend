const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#btn-submit");
const jobLog = document.querySelector("#job");
submitButton.addEventListener("click", function () {
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(jobLog.value);
});
