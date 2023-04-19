const numOne = document.querySelector("#number-one");
const numTwo = document.querySelector("#number-two");
const ketQua = document.querySelector("#result");
const buttonTinh = document.querySelectorAll(".btn");
buttonTinh.forEach((button) => {
    button.addEventListener("click", function () {
    let tinhData = button.getAttribute("data");
    console.log(tinhData);
    const result = eval(`${numOne.value}${tinhData}${numTwo.value}`); 
    ketQua.innerHTML = result;
  });
}); 

