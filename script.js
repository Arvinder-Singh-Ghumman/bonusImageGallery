var images = ["img1.avif", "img2.avif", "img3.avif"];
var current = 0;

window.onload = () => {
  let img = document.getElementById("img");
  let btnLeft = document.getElementById("left");
  let btnRight = document.getElementById("right");

  //adding event listners
  btnLeft.addEventListener("click", () => {
    if(--current<0)
      current=images.length-1;
    img.src = images[current];
  });
  btnRight.addEventListener("click", () => {
    current= ++current%3;
    img.src = images[current];
  });
};
