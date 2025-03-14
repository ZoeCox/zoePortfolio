const clickOverlay = document.querySelector(".click-overlay");
const contactBtns = document.querySelectorAll(".contact-btn");
const contactContainer = document.querySelector(".contact-container");

contactContainer.classList.add("hidden");

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 0;
canvas.width = 500;
const canvasDiv = document.querySelector(".canvas-container");

const rocket1 = new Image();
rocket1.ready = false;
rocket1.src = "./sprites/rocket.png";

const rocket2 = new Image();
rocket2.ready = false;
rocket2.src = "./sprites/rocket.png";

const rocket3 = new Image();
rocket3.ready = false;
rocket3.src = "./sprites/rocket.png";

const rockets = {
  speed: 0.25,
  rocket1: { xCoord: 35, yCoord: 200 },
  rocket2: { xCoord: 220, yCoord: 200 },
  rocket3: { xCoord: 405, yCoord: 200 },
};

function rocketMove() {
  rockets.rocket1.yCoord-- * rockets.speed;
  rockets.rocket2.yCoord-- * rockets.speed;
  rockets.rocket3.yCoord-- * rockets.speed;
  setTimeout(() => {
    canvas.height -= rockets.speed;
  }, 100);
}

function playCanvas() {
  render();
  rocketMove();
  requestAnimationFrame(playCanvas);
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(1, 1, 1, 0.0)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    rocket1,
    rockets.rocket1.xCoord,
    rockets.rocket1.yCoord,
    75,
    90
  );
  context.drawImage(
    rocket2,
    rockets.rocket2.xCoord,
    rockets.rocket2.yCoord,
    75,
    90
  );
  context.drawImage(
    rocket3,
    rockets.rocket3.xCoord,
    rockets.rocket3.yCoord,
    75,
    90
  );
}

canvasDiv.appendChild(canvas);

clickOverlay.addEventListener("click", () => {
  canvas.height = 300;
  canvas.width = 500;
  playCanvas();
  clickOverlay.classList.add("hidden");
  contactContainer.classList.remove("hidden");
});
