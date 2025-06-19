const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius *= 0.90;

const tickSound = new Audio("tick.mp3");
tickSound.volume = 0.5;

// Main animation loop — perfectly synced with system time
let lastSecond = -1;
function animateClock() {
  const now = new Date();
  const currentSecond = now.getSeconds();

  drawClock();

  if (currentSecond !== lastSecond) {
    tickSound.pause();
    tickSound.currentTime = 0;
    tickSound.play().catch(() => {});
    lastSecond = currentSecond;
  }

  requestAnimationFrame(animateClock);
}
animateClock();

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
  drawCenter(ctx, radius);
  drawGloss(ctx, radius);
}

function drawFace(ctx, radius) {
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#111";
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, "#666");
  grad.addColorStop(0.5, "#222");
  grad.addColorStop(1, "#666");

  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.07;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
  ctx.fillStyle = "#f2f2f2";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  const romanNumerals = [
    "", "I", "II", "III", "IV", "V", "VI",
    "VII", "VIII", "IX", "X", "XI", "XII"
  ];

  let ang;
  ctx.font = radius * 0.18 + "px serif";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "#f0f0f0";

  for (let num = 1; num <= 12; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.78);
    ctx.rotate(-ang);
    ctx.fillText(romanNumerals[num], 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.78);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour %= 12;
  hour = (hour * Math.PI / 6) +
         (minute * Math.PI / (6 * 60)) +
         (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.45, radius * 0.07, "#ddd", "vintage");

  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.7, radius * 0.05, "#fff", "vintage");

  second = second * Math.PI / 30;
  drawHand(ctx, second, radius * 0.85, radius * 0.02, "#e74c3c", "vintage");
}

function drawHand(ctx, pos, length, width, color = "#fff", style = "vintage") {
  ctx.save();
  ctx.rotate(pos);
  ctx.beginPath();

  if (style === "vintage") {
    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(-width / 4, -length * 0.15);
    ctx.lineTo(0, -length);
    ctx.lineTo(width / 4, -length * 0.15);
    ctx.lineTo(width / 2, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 4;
    ctx.fill();
  } else {
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
  }

  ctx.restore();
}

function drawCenter(ctx, radius) {
  const gradient = ctx.createRadialGradient(0, 0, radius * 0.01, 0, 0, radius * 0.06);
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(0.4, "#d4af37");  // gold
  gradient.addColorStop(1, "#5a4e2d");    // darker outer rim

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;

  ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;

  ctx.fill();
}

function drawGloss(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, -Math.PI / 4, Math.PI / 4);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = radius * 0.01;
  ctx.stroke();
}
