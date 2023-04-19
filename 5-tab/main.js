const showhideButton = document.querySelector(".accordion-button");
const divBox = document.querySelector("#collapseOne");
showhideButton.addEventListener("click", function () {
  divBox.classList.toggle("show");
});
  