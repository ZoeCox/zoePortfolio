const projectText = document.querySelector(".project-text");

const carouselImg1 = document.querySelector("#image1");
const carouselImg2 = document.querySelector("#image2");
const carouselImg3 = document.querySelector("#image3");

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];

const carouselSlides = document.querySelectorAll(".carousel-item");

const carouselTracker = [carouselImg1, carouselImg2, carouselImg3];

const nextBtn = document.querySelector(".carousel-control-next-icon");
const prevBtn = document.querySelector(".carousel-control-prev-icon");
const carouselBtns = [nextBtn, prevBtn];

const carouselVar = document.querySelector(".carousel-whole");
// console.log(carouselTracker[0], carouselTracker[1], carouselTracker[2]);

for (let i = 0; i < carouselTracker.length; i++) {
  let activeOption = carouselTracker[i];
  for (let j = 0; j < carouselBtns.length; j++) {
    carouselBtns[j].addEventListener("click", function () {
      if (carouselBtns[j] === nextBtn) {
        activeOption = carouselTracker[i + 1];
        console.log(activeOption);
      }
      if (carouselBtns[j] === prevBtn) {
        activeOption = carouselTracker[i - 1];
      }
    });
  }
}
//FIXXXX!!!!
// projectText.innerHTML = "hello";
