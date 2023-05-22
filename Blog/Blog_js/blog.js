function query(gia_tri) {
  return document.querySelector(gia_tri);
}
//
var mang_tinTuc = [
  {
    anh: "../TrangChu/AnhTC/blog-1.jpg",
    td: "6 ways to prepare breakfast for 30",
  },
  { anh: "../TrangChu/AnhTC/blog-3.jpg", 
  td: "Visit the clean farm in the US" },
  {
    anh: "../TrangChu/AnhTC/blog-2.jpg",
    td: "Cooking tips make cooking simple",
  },
  {
    anh: "../TrangChu/AnhTC/blog-3.jpg",
    td: "Cooking tips make cooking simple",
  },
  {
    anh: "../TrangChu/AnhTC/blog-2.jpg",
    td: "The Moment You Need To Remove Garlic From The Menu",
  },
  {
    anh: "../TrangChu/AnhTC/blog-1.jpg",
    td: "Cooking tips make cooking simple",
  },
];
// hien thi tin tuc
function hienThiTinTuc() {
  var mangTinTuc = "";
  for (let i = 0; i < mang_tinTuc.length; i++) {
    mangTinTuc += `
    <div class="new">
              <div class="new-img">
                <img src="${mang_tinTuc[i].anh}" alt="">
              </div>
              <div class="new-01-text">
                <ul>
                  <li><i class="fa-sharp fa-regular fa-calendar"></i>
                  May 4,2019</li>
                  <li><i class="fa-solid fa-comment"></i> 5</li>
                </ul>
              </div>
              <h3>${mang_tinTuc[i].td}</h3>
              <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
              <div class="new-button">
                READ MORE 
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
        `;
  }
  return mangTinTuc;
}
query('.hien_thi').innerHTML = hienThiTinTuc()

