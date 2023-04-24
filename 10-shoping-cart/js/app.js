const products = [
  {
    id: 1,
    name: "奧康第一件",
    thumb: "img/anh 1.png",
    shortDesc: "",
    price: 12,
    priceInner: "12",
    quantity: 1,
    added: false,
  },
  {
    id: 2,
    name: "奧康第二件",
    thumb: "img/anh 2.png",
    shortDesc: "",
    price: 15,
    priceInner: "15",
    quantity: 1,
    added: false,
  },
  {
    id: 3,
    name: "奧康第三件",
    thumb: "img/anh 3.png",
    shortDesc: "",
    price: 25,
    priceInner: "25",
    quantity: 1,
    added: false,
  },
  {
    id: 4,
    name: "奧康第四件",
    thumb: "img/anh 4.png",
    shortDesc: "",
    price: 32,
    priceInner: "32",
    quantity: 1,
    added: false,
  },
  {
    id: 5,
    name: "奧康第五件",
    thumb: "img/anh 5.png",
    shortDesc: "",
    price: 9,
    priceInner: "9",
    quantity: 1,
    added: false,
  },
];
const divListProduct = document.querySelector("#listProducts");
function renderProduct(doiSo) {
  divListProduct.innerHTML = "";
  doiSo.forEach((product) => {
    divListProduct.innerHTML += `<div class="row align-items-center">
    <div class="col-6 col-md-4">
      <img src="${product.thumb}" alt="" class="img-fluid">
    </div>
    <div class="col-6 col-md-8">
      <h6>${product.name}</h6>
      <div class="form-group">
        <div class="d-flex">
          <button class="btn btn-primary" onClick="minus(${product.id})"> - </button>
          <input type="text" class="form-control mx-1" value="${product.quantity}">
          <button class="btn btn-primary" onClick="plus(${product.id})"> + </button>
        </div>
        <button class="btn btn-danger btn-block mt-1 btn-add-to-cart" onClick="addCart(${product.id})"><span>$</span><span>${product.priceInner}</span></button>
      </div>
    </div>
    `;
  });
}
renderProduct(products);
function plus(id) {
  const item = products.find((product) => product.id == id);
  item.quantity++;
  item.priceInner = item.price * item.quantity;
  renderProduct(products);
}
function minus(id) {
  const item = products.find((product) => product.id == id);
  if (item.quantity > 0) {
    item.quantity--;
    item.priceInner = item.price * item.quantity;
    renderProduct(products);
  }
}
const divListCart = document.querySelector("#cartProducts");
const totalInput = document.querySelector("#toTal");
const countInput = document.querySelector("#count");
function renderCartProduct(doiSo) {
  divListCart.innerHTML = "";
  let condition = doiSo.filter((c) => c.added === true);
  countInput.innerHTML = condition.length;
  condition.forEach((cart) => {
    divListCart.innerHTML += ` <tr >
    <td></td>
    <td>${cart.name}</td>
    <td>$${cart.price}</td>
    <td>
      <input type="number" id="cartProduct-${cart.id}" class="form-control" value="${cart.quantity}">
    </td>
    <td><span class="fw-bold">$<span>${cart.priceInner}</span></td>
    <td>
      <button type="button" class="btn btn-link btn-sm btn-rounded" onClick="update(${cart.id})">Update</button>
      <button type="button" class="btn btn-link btn-sm btn-rounded" onClick="remove(${cart.id})">Delete</button>
    </td>
  </tr>`;
  });
}
function addCart(id) {
  const item = products.find((cart) => cart.id == id);
  item.added = true;
  updateTotalPrice();
  renderCartProduct(products);
}
function update(id) {
  const item = products.find((cart) => cart.id == id);
  const inputValue = document.querySelector(`#cartProduct-${item.id}`);
  item.quantity = inputValue.value;
  item.priceInner = item.price * item.quantity;
  updateTotalPrice();
  renderCartProduct(products);
  renderProduct(products);
}
function updateTotalPrice() {
  const filterSave = products.filter((cart) => cart.added == true);
  const saveARGU = filterSave.reduce((acc, curr) => {
    return acc + parseInt(curr.priceInner);
  }, 0);
  totalInput.innerHTML = saveARGU;
}
function remove(id) {
  const item = products.find((cart) => cart.id == id);
  item.added = false;
  updateTotalPrice();
  renderCartProduct(products);
}
