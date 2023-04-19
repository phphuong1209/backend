const canhLeBut = document.querySelector("#slb-text-align");
const vanBan = document.querySelector("#content");
const lineHeightBut = document.querySelector("#slb-line-height");
const mauNen = document.querySelectorAll("#background-color button");
const incButton = document.querySelector("#btn-asc");
const decButton = document.querySelector("#btn-desc");
let bienLuu = 16;
canhLeBut.addEventListener("click", function () {
  vanBan.style.textAlign = this.value;
});
lineHeightBut.addEventListener("click", function () {
  vanBan.style.lineHeight = this.value;
});
mauNen.forEach((doiSo) => {
  doiSo.addEventListener("click", function () {
    vanBan.style.backgroundColor = doiSo.getAttribute("data-value");
  });
});
incButton.addEventListener("click", function () {
  ++bienLuu;
  vanBan.style.fontSize = bienLuu + "px";
  console.log(bienLuu);
});
decButton.addEventListener("click", function () {
  if (bienLuu > 13) {
    --bienLuu;
    vanBan.style.fontSize = bienLuu + "px";
    console.log(bienLuu);
  }
});
