const divBox = document.querySelectorAll("div .box");
const hienThi = ["một", "hai", "ba", "bốn", "năm"];
divBox.forEach((doiSo, index) => {
  doiSo.addEventListener("click", function () {
    console.log(hienThi[index]);
  });
});
