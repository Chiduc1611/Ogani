//di chuyen anh
const carousel = document.querySelector(".img-content"),
  firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".img-overview i");

let isDargStart = false,
  prevPageX,
  prevScrollLeft;

let firstImgWidth = firstImg.clientWidth + 14;
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDargStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDargStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDargStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
