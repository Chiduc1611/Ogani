function query(gia_tri) {
  return document.querySelector(gia_tri);
}
//mang tong
var mang_sp = [
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" },
  { anh: "../TrangChu/AnhTC/conten.jpg" },
  { anh: "../TrangChu/AnhTC/img1.jpg" },
  { anh: "../TrangChu/AnhTC/img2.jpg" },
  { anh: "../TrangChu/AnhTC/img3.jpg" },
  { anh: "../TrangChu/AnhTC/sp1.jpg" },
  { anh: "../TrangChu/AnhTC/sp2.jpg" },
  { anh: "../TrangChu/AnhTC/sp3.jpg" },
  { anh: "../TrangChu/AnhTC/sp4.jpg" }
];
//Oranges
var mang_oranges = [
  { anh: "./AnhTC/sp_thit.jpg" },
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
  { anh: "./AnhTC/conten.jpg" },
  { anh: "./AnhTC/img1.jpg" },
  { anh: "./AnhTC/img2.jpg" },
  { anh: "./AnhTC/img3.jpg" },
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
];
//Fresh Meat
var mang_fresh_meat = [
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/img2.jpg" },
  { anh: "./AnhTC/conten.jpg" },
  { anh: "./AnhTC/img1.jpg" },
  { anh: "./AnhTC/img2.jpg" },
  { anh: "./AnhTC/img3.jpg" },
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
];
//Vegetables
var mang_vegetables = [
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/feature-5.jpg" },
  { anh: "./AnhTC/feature-7.jpg" },
  { anh: "./AnhTC/feature-8.jpg" },
  { anh: "./AnhTC/conten.jpg" },
  { anh: "./AnhTC/img1.jpg" },
  { anh: "./AnhTC/img2.jpg" },
  { anh: "./AnhTC/img3.jpg" },
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
];
//Fastfood
var mang_fastfood = [
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
  { anh: "./AnhTC/sp_thit.jpg" },
  { anh: "./AnhTC/feature-8.jpg" },
  { anh: "./AnhTC/conten.jpg" },
  { anh: "./AnhTC/img1.jpg" },
  { anh: "./AnhTC/img2.jpg" },
  { anh: "./AnhTC/img3.jpg" },
  { anh: "./AnhTC/sp1.jpg" },
  { anh: "./AnhTC/sp2.jpg" },
  { anh: "./AnhTC/sp3.jpg" },
  { anh: "./AnhTC/sp4.jpg" },
];
function hienThiSanPham(mang_sp) {
  var mangHienThi = "";
  for (var i = 0; i < mang_sp.length; i++) {
    mangHienThi += `
    <div class="product"> 
    <div class="product-img">
            <img src="${mang_sp[i].anh}" alt="Loi anh">
          </div>
          <div class="product-icon">
          <ul>
          <li><i class="fa fa-heart"></i></li>
          <li><i class="fa fa-retweet"></i></li>
          <li><i class="fa fa-shopping-cart"></i></li>
          </ul>
          </div>      
          <div class="product-text">
            <p>Crab Pool Security</p>
          </div>
          <div class="product-text">
            <span>$30.00</span>
          </div>
          </div>
    `;
  }
  return mangHienThi;
}
document.querySelector(".product-display").innerHTML = hienThiSanPham(mang_sp);
// hien thi loai san pham
var hienthi_loaisp = query(".product-display");
var hover_gachduoi1 = query(".so_1");
var hover_gachduoi2 = query(".so_2");
var hover_gachduoi3 = query(".so_3");
var hover_gachduoi4 = query(".so_4");
var hover_gachduoi5 = query(".so_5");

hienthi_loaisp.innerHTML = hienThiSanPham(mang_sp);
function hienThi_ds() {
  hienthi_loaisp.innerHTML = hienThiSanPham(mang_sp);
  hover_gachduoi1.style.borderBottom = "2px solid #7FAD39";
  hover_gachduoi2.style.borderBottom = "none";
  hover_gachduoi3.style.borderBottom = "none";
  hover_gachduoi4.style.borderBottom = "none";
  hover_gachduoi5.style.borderBottom = "none";
}
function hienThi_ds1() {
  hienthi_loaisp.innerHTML = hienThiSanPham(mang_oranges);
  hover_gachduoi1.style.borderBottom = "none";
  hover_gachduoi2.style.borderBottom = "2px solid #7FAD39";
  hover_gachduoi3.style.borderBottom = "none";
  hover_gachduoi4.style.borderBottom = "none";
  hover_gachduoi5.style.borderBottom = "none";
}
function hienThi_ds2() {
  hienthi_loaisp.innerHTML = hienThiSanPham(mang_fresh_meat);
  hover_gachduoi1.style.borderBottom = "none";
  hover_gachduoi2.style.borderBottom = "none";
  hover_gachduoi3.style.borderBottom = "2px solid #7FAD39";
  hover_gachduoi4.style.borderBottom = "none";
  hover_gachduoi5.style.borderBottom = "none";
}
function hienThi_ds3() {
  hienthi_loaisp.innerHTML = hienThiSanPham(mang_vegetables);
  hover_gachduoi1.style.borderBottom = "none";
  hover_gachduoi2.style.borderBottom = "none";
  hover_gachduoi3.style.borderBottom = "none";
  hover_gachduoi4.style.borderBottom = "2px solid #7FAD39";
  hover_gachduoi5.style.borderBottom = "none";
}
function hienThi_ds4() {
  hienthi_loaisp.innerHTML = hienThiSanPham(mang_fastfood);
  hover_gachduoi1.style.borderBottom = "none";
  hover_gachduoi2.style.borderBottom = "none";
  hover_gachduoi3.style.borderBottom = "none";
  hover_gachduoi4.style.borderBottom = "none";
  hover_gachduoi5.style.borderBottom = "2px solid #7FAD39";
}
