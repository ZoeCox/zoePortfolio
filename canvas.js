const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 300;
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
  rocket1: { xCoord: 15, yCoord: 200 },
  rocket2: { xCoord: 200, yCoord: 200 },
  rocket3: { xCoord: 385, yCoord: 200 },
};

document.addEventListener("click", (event) => {
  const canvasBoundaries = canvas.getBoundingClientRect();
  const mouseYCoord = event.clientY;
  const mouseXCoord = event.clientX;
  console.log(mouseXCoord, mouseYCoord, canvasBoundaries);
  // if (mouseXCoord >= canvasBoundaries.height) {
  //   console.log("you're clicking higher than the canvas");
  // }
});

window.onload = () => {
  playCanvas();
};

function rocketMove() {
  rockets.rocket1.yCoord-- * rockets.speed;
  rockets.rocket2.yCoord-- * rockets.speed;
  rockets.rocket3.yCoord-- * rockets.speed;
}
//test function

function playCanvas() {
  render();
  // rocketMove();
  requestAnimationFrame(playCanvas);
}

function render() {
  context.fillStyle = "#241d57";
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
