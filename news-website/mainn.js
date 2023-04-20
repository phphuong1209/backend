const postMenu = "http://apiforlearning.zendvn.com/api/categories_news";
const postGold = "http://apiforlearning.zendvn.com/api/get-gold";
const postCoin = "http://apiforlearning.zendvn.com/api/get-coin";
const postNews =
  "http://apiforlearning.zendvn.com/api/categories_news/1/articles?offset=0&limit=10&sort_by=id&sort_dir=desc";
const divMenu = document.querySelector("#NAVBAR");
const divGold = document.querySelector("#divGold");
const divCoin = document.querySelector("#divCoin");
const divNews = document.querySelector(".newSS");
async function getData() {
  try {
    let resMenu = await fetch(postMenu);
    let resGold = await fetch(postGold);
    let resCoin = await fetch(postCoin);
    let resNews = await fetch(postNews);
    let dataMenu = await resMenu.json();
    let dataGold = await resGold.json();
    let dataCoin = await resCoin.json();
    let dataNews = await resNews.json();
    return { dataMenu, dataGold, dataCoin, dataNews };
  } catch (err) {
    console.log(err);
  }
}
async function renderMenu() {
  let ArraydataMenu = await getData();
  let data = ArraydataMenu.dataMenu;
  divMenu.innerHTML = data
    .map((item) => {
      return `<a href="${item.link}" class="nav-item nav-link active">${item.name}</a>`;
    })
    .join("");
}
renderMenu();
async function renderGold() {
  let ArraydataGold = await getData();
  let data = ArraydataGold.dataGold;
  divGold.innerHTML = data
    .map((item) => {
      return `<span class="font-weight-medium">Loại: ${item.type}</span></br>
    <span class="font-weight-medium">Giá mua: ${item.buy}</span></br>
    <span class="font-weight-medium">Giá bán: ${item.sell}</span></br>
    `;
    })
    .join("");
}
renderGold();
async function renderCoin() {
  let ArraydataCoin = await getData();
  let data = ArraydataCoin.dataCoin;
  divCoin.innerHTML = data
    .map((item) => {
      return `<span class="font-weight-medium">Tên: ${item.name}</span></br>
    <span class="font-weight-medium">Giá: ${item.price}</span></br>
    <span class="font-weight-medium">Tỉ suất quy đổi sau 24h: ${item.percent_change_24h}</span></br>
    <span class="font-weight-medium">Tỉ suất quy đổi sau 1h: ${item.percent_change_1h}</span></br>`;
    })
    .join("");
}
renderCoin();
async function renderNews() {
  let ArraydataNews = await getData();
  let data = ArraydataNews.dataNews;
  divNews.innerHTML = data
    .map((item) => {
      return `<div class="col-lg-6">
    <div class="position-relative mb-3">
        <img class="img-fluid w-100" src="${
          item.thumb
        }" style="object-fit: cover;">
        <div class="bg-white border border-top-0 p-4">
            <div class="mb-2">
                <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="">NEWS</a>
                <a class="text-body" href=""><small>Jan 01, 2045</small></a>
            </div>
            <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">${
              item.title
            }</a>
            <p class="m-0">${item.description
              .toString()
              .slice(0, 20)
              .concat("...")}</p>
        </div>
        <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
            <div class="d-flex align-items-center">
                <img class="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt="">
                <small>John Doe</small>
            </div>
            <div class="d-flex align-items-center">
                <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
            </div>
        </div>
    </div>
</div>`;
    })
    .join("");
}
renderNews();
