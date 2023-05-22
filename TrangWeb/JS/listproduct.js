var mang_sp = [
  { ma: "01", anh: "./Anh/sp1.jpg", ten: "Crab Pool Security", gia: "$30.00" },
  { ma: "02", anh: "./Anh/sp2.jpg", ten: "Crab Pool Security", gia: "$30.00" },
  { ma: "03", anh: "./Anh/sp3.jpg", ten: "Crab Pool Security", gia: "$30.00" },
  { ma: "04", anh: "./Anh/sp4.jpg", ten: "Crab Pool Security", gia: "$30.00" },
];
//hien thi san pham
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
            <p>${mang_sp[i].ten}</p>
          </div>
          <div class="product-text">
            <span>${mang_sp[i].gia}</span>
          </div>
          </div>
    `;
  }
  return mangHienThi;
}
document.querySelector(".present-product").innerHTML = hienThiSanPham(mang_sp);

//hien thi muc luc

var checked = document.querySelector(".search-list");
var kt = "";
function Checked() {
  if (kt == true) {
    checked.style.display = "none";
    kt = false;
  } else {
    checked.style.display = "block";
    kt = true;
  }
}

//
function query(gia_tri) {
  return document.querySelector(gia_tri);
}
//

var text = query(".hienthitext");
var text1 = query(".Description");
var text2 = query(".Information");
var text3 = query(".Reviews");

function Text1() {
  text.innerHTML = `
  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
  dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
  tortor risus. Vivamus suscipit tortor eget felis porttitor
  volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed
  sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus
  suscipit tortor eget felis porttitor volutpat. Curabitur arcu
  erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien
  massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
  ac diam sit amet quam vehicula elementum sed sit amet dui.
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
  posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
  vel, ullamcorper sit amet ligula. Proin eget tortor risus. <br />
  Praesent sapien massa, convallis a pellentesque nec, egestas non
  nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras
  ultricies ligula sed magna dictum porta. Cras ultricies ligula sed
  magna dictum porta. Sed porttitor lectus nibh. Mauris blandit
  aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
  sit amet quam vehicula elementum sed sit amet dui. Sed porttitor
  lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
  sed sit amet dui. Proin eget tortor risus.`;
  text1.style.color = "red";
  text2.style.color = "black";
  text3.style.color = "black";
}
function Text2() {
  text.innerHTML = `
  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.<br>
  Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.`;
  text1.style.color = "black";
  text2.style.color = "red";
  text3.style.color = "black";
}
function Text3() {
  text.innerHTML = `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.`;
  text1.style.color = "black";
  text2.style.color = "black";
  text3.style.color = "red";
}

//chuc nang tang giam so luong
function dieuchinhsoluong(toantu) {
  let inputSoluong = document.getElementById("so_luong");
  let soluong = inputSoluong.value;
  if (toantu == "-") {
    if (Number(soluong) > 1) {
      inputSoluong.value = Number(soluong) - 1;
    } else {
      inputSoluong.value = 1;
    }
  } else if (toantu == "+") {
    if (Number(soluong) < 100) {
      inputSoluong.value = Number(soluong) + 1;
    }
  }
}
//chuyen anh
function chuyenAnh(anh) {
  var anhMoi = document.querySelector(".post-content-img img");
  anhMoi.src = anh;
}
//tim
var tim = query(".fa-sharp");

function Tim() {
  if (kt == true) {
    tim.style.color = "red";
    kt = false;
  } else {
    tim.style.color = "black";
    kt = true;
  }
}
// kiem tra loi tim kiem
var khongcoloi = true;
function kiemTraLoiTimKiem() {
  var tk = query("#int-tk");
  var loi_tk = query(".search");

  if (!tk.value) {
    alert("Bắt buộc nhập nội dung tìm kiếm");
    loi_tk.style.boxShadow = "0 0 5px 0 red";
    khongcoloi = false;
  } else if (tk.value.length <= 10 || tk.value.length >= 256) {
    alert("Nội dung tìm kiếm phải lớn hơn 10 và nhỏ hơn 256");
    loi_tk.style.boxShadow = "0 0 5px 0 red";
    khongcoloi = false;
  } else {
    alert("Thành Công");
    khongcoloi = true;
  }
  return khongcoloi;
}
//kiem tra loi email
var kiemTraEmail = /\w{2,}@\w{2,}(\.[a-zA-Z]{2,3})/;
function kiemTraLoiEmail() {
  var int_email = query("#int-email");
  var loi_email = query("#int-email");

  if (!int_email.value) {
    alert("Bắt buộc nhập nội dung email");
    loi_email.style.boxShadow = "0 0 5px 0 red";
    khongcoloi = false;
  } else if (!kiemTraEmail.test(int_email.value)) {
    alert("Vui long nhap dung dinh dang email");
    loi_email.style.boxShadow = "0 0 5px 0 red";
    khongcoloi = false;
  } else {
    alert("Thành Công");
    khongcoloi = true;
  }
  return khongcoloi;
}
