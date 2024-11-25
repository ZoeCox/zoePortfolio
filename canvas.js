const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 300;
canvas.width = 500;
const canvasDiv = document.querySelector(".canvas-container");

function checkIfReady() {
  this.ready = true;
  playCanvas();
}

function playCanvas() {
  render();
  //   requestAnimationFrame(playCanvas);
}

function render() {
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

canvasDiv.appendChild(canvas);
