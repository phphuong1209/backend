const frontShow = document.querySelector("#box-score-home");
const buTTon = document.querySelectorAll("#frontend button");
let acc = 0;
buTTon.forEach((item) => {
  item.addEventListener("click", function () {
    acc += parseInt(item.value);
    frontShow.innerHTML = acc.toString().padStart(2, "0");
  });
});
