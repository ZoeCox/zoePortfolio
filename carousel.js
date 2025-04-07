const projectText = document.querySelector(".project-text");

const carouselImg1 = document.querySelector(".carousel-image1");
const carouselImg2 = document.querySelector(".carousel-image2");
const carouselImg3 = document.querySelector(".carousel-image3");
const carouselImg4 = document.querySelector(".carousel-image4");

const carouselImages = [carouselImg1, carouselImg2, carouselImg3, carouselImg4];

// https://fantasy-demo-game.zoecox.co.uk/

const nextBtn = document.querySelector(".carousel-control-next-icon");
const prevBtn = document.querySelector(".carousel-control-prev-icon");

const textLinkHandler = (linkToFollow) => {
  open(linkToFollow);
};

projectText.addEventListener("click", () => {
  if (projectText.innerHTML === "Princess of Bramboria - Text Adventure Game") {
    textLinkHandler("https://text-game.zoecox.co.uk/");
  }
  if (projectText.innerHTML === "Happy Dog Toys - Dog Toy Web Shop") {
    textLinkHandler("https://happy-dog-toys.zoecox.co.uk/");
  }
  if (projectText.innerHTML === "Table Tennis - Two Player Game") {
    textLinkHandler("https://tennis-game.zoecox.co.uk/");
  }
});

nextBtn.addEventListener("click", () => {
  for (let i = 0; i < carouselImages.length; i++) {
    if (carouselImages[i].classList.contains("active")) {
      if (carouselImages[i] === carouselImg1) {
        projectText.innerHTML = "Princess of Bramboria - Text Adventure Game";
      }
      if (carouselImages[i] === carouselImg2) {
        projectText.innerHTML = "Table Tennis - Two Player Game";
      }
      if (carouselImages[i] === carouselImg3) {
        projectText.innerHTML = "Happy Dog Toys - Dog Toy Web Shop";
      }
      if (carouselImages[i] === carouselImg4) {
        projectText.innerHTML = "Fantasy Game Demo - A Short Demo Game";
      }
    }
  }
});

prevBtn.addEventListener("click", () => {
  for (let i = carouselImages.length - 1; i >= 0; i--) {
    if (carouselImages[i].classList.contains("active")) {
      if (carouselImages[i] === carouselImg1) {
        projectText.innerHTML = "Table Tennis - Two Player Game";
      }
      if (carouselImages[i] === carouselImg2) {
        projectText.innerHTML = "Happy Dog Toys - Dog Toy Web Shop";
      }
      if (carouselImages[i] === carouselImg3) {
        console.log("this is image 3");
        projectText.innerHTML = "Princess of Bramboria - Text Adventure Game";
      }
      if (carouselImages[i] === carouselImg4) {
        projectText.innerHTML = "Fantasy Game Demo - A Short Demo Game";
      }
    }
  }
});

// projectText.innerHTML = "hello";
