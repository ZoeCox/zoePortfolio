const projectText = document.querySelector(".project-text");

const carouselImg1 = document.querySelector(".carousel-image1");
const carouselImg2 = document.querySelector(".carousel-image2");
const carouselImg3 = document.querySelector(".carousel-image3");

const carouselImages = [carouselImg1, carouselImg2, carouselImg3];
const carouselTracker = {
  img1Active: true,
  img2Active: false,
  img3Active: false,
};

const carouselBtns = document.querySelectorAll(".carousel-button");

for (let i = 0; i < carouselBtns.length; i++) {
  carouselBtns[i].addEventListener("click", function () {
    if (carouselImg2.closest(".active")) {
      carouselTracker.img2Active = true;
      console.log("image 2 has active class");
      projectText.innerHTML = "This is image two";
    }
    //  if (carouselTracker.img2Active) {
    //    console.log("image 2 active");
    //    projectText.innerHTML = "This is image two";
    //  }
    else if (carouselImg2.closest(".not-active")) {
      carouselTracker.img2Active = false;
      projectText.innerHTML = "This isn't image two";
    }

    //  else {
    //   carouselTracker.img2Active = false;
    //   projectText.innerHTML = "This isn't image two";
    // }
    console.log(carouselTracker);
    //only toggling picture 2 to active when i click onto image 3??
  });
}

// projectText.innerHTML = "hello";
