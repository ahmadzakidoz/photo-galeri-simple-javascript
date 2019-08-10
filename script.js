const photos = document.querySelector(".photos");

photos.addEventListener("click", function(e) {
  if (e.target.tagName == "IMG") {
    const srcImg = e.target.getAttribute("src");
    const showImg = document.querySelector(".show img");

    showImg.setAttribute("src", srcImg);
  }
});
