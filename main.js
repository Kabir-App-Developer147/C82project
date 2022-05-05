var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function make_base() {
  base_image = new Image();
  base_image.src = "https://source.unsplash.com/random";
  ctx.drawImage(base_image, 100, 100);
}

var mouse_event = "";
var lastX, lastY;
color = "red";
linewidth = "5";

canvas.addEventListener("mousedown", md);

function md(e) {
  make_base();
  mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", mu);

function mu(e) {
  mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", ml);

function ml(e) {
  mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mm);

function mm(e) {
  var currentX = e.clientX - canvas.offsetLeft;
  var currentY = e.clientY - canvas.offsetTop;

  if (mouse_event == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(currentX, currentY, 100, 0, 2 * Math.PI);
    ctx.stroke();
  }
  lastX = currentX;
  lastY = currentY;
}

function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
