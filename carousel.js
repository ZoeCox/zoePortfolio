const projectText = document.querySelector(".project-text");

const carouselImg1 = document.querySelector(".carousel-image1");
const carouselImg2 = document.querySelector(".carousel-image2");
const carouselImg3 = document.querySelector(".carousel-image3");

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const nextBtn = document.querySelector(".carousel-control-next-icon");
const prevBtn = document.querySelector(".carousel-control-prev-icon");

nextBtn.addEventListener("click", () => {
  for (let i = 0; i < carouselImages.length; i++) {
    if (carouselImages[i].classList.contains("active")) {
      if (carouselImages[i] === carouselImg1) {
        projectText.innerHTML = "Princess of Bramboria - Text Adventure Game";
      }
      if (carouselImages[i] === carouselImg2) {
        projectText.innerHTML = "This is a yellow labrador";
      }
      if (carouselImages[i] === carouselImg3) {
        projectText.innerHTML = "This is a moose with a bird in an alley";
      }
    }
  }
});

prevBtn.addEventListener("click", () => {
  for (let i = carouselImages.length - 1; i >= 0; i--) {
    if (carouselImages[i].classList.contains("active")) {
      if (carouselImages[i] === carouselImg1) {
        projectText.innerHTML = "This is a yellow labrador";
      }
      if (carouselImages[i] === carouselImg2) {
        projectText.innerHTML = "This is a moose with a bird in an alley";
      }
      if (carouselImages[i] === carouselImg3) {
        console.log("this is image 3");
        projectText.innerHTML = "Princess of Bramboria - Text Adventure Game";
      }
    }
  }
});

// projectText.innerHTML = "hello";
