var mang_ds = [
  {
    anh: "../TrangWeb/Anh/conten.jpg",
    name: "Vegetable’s Package",
    price: "$55.00",
    total: "$110.00	",
  },
  {
    anh: "../TrangWeb/Anh/img3.jpg",
    name: "Fresh Garden Vegetable",
    price: "$39.00",
    total: "$39.99",
  },
  {
    anh: "../TrangWeb/Anh/sp2.jpg",
    name: "Organic Bananas",
    price: "$69.00",
    total: "$69.99	",
  },
];

var mang_hien_thi = '';
function hienThiDS(mang_ds){
    for (let i = 0; i< mang_ds.length; i++) {
      mang_hien_thi += `
      <div class="product-price-list-price">
      <div class="product-price-list-price-img">
        <img src="${mang_ds[i].anh}" alt="">
        <span>${mang_ds[i].name}</span>
      </div>
      <div class="product-price-list-price-tt">
      <span>${mang_ds[i].price}</span>
      <div class="btn-sl">
      <button class="number-btn">-</button>
      <input type="number" value="1">
      <button class="number-btn">+</button>
      </div>
      <span>${mang_ds[i].total}</span>
    </div>
  </div>
      `
    }
    return mang_hien_thi;
}
query('.hien_thi_ds').innerHTML = hienThiDS(mang_ds);


