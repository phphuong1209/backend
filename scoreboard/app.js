const scoButton = document.querySelectorAll("#frontend button");
const fronHienThi = document.querySelector("#box-score-home");
let acc = 0;
scoButton.forEach((argu) => {
  argu.addEventListener("click", function () {
    acc += parseInt(argu.value);
    fronHienThi.innerHTML = acc.toString().padStart(2, "0");
  });
});
