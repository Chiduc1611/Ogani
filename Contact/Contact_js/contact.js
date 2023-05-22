var mang_tt = [
  {
    icon: '<i class="phone fa-solid fa-phone"></i>',
    td: "Phone",
    nd: "+01-3-8888-6868",
  },
  {
    icon: '<i class="fa-solid fa-location-dot"></i>',
    td: "Address",
    nd: "60-49 Road 11378 New York",
  },
  {
    icon: '<i class="fa-solid fa-clock"></i>',
    td: "Open time",
    nd: "10:00 am to 23:00 pm",
  },
  {
    icon: '<i class="fa-solid fa-envelope"></i>',
    td: "Email",
    nd: "chiduc1611@gmail.com",
  },
];
var mang_hien_thi = "";
function hien_thi_tt(mang_tt) {
  for (let i = 0; i < mang_tt.length; i++) {
    mang_hien_thi += `
    <div class="information">
    ${mang_tt[i].icon}
    <h3>${mang_tt[i].td}</h3>
    <span>${mang_tt[i].nd}</span>
  </div>
    `;
  }
  return mang_hien_thi;
}
document.querySelector(".hienthitt").innerHTML = hien_thi_tt(mang_tt);
