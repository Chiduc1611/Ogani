//
function query(gia_tri) {
    return document.querySelector(gia_tri);
  }
  //
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
