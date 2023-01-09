let x = 0;
let y = 0;
let dx = 4;
let dy = 4;
const circle = document.querySelector('.circle'); // for the animation

const element1 = document.querySelector('.block1');
const element2 = document.querySelector('.circle'); // for the distance
const element3 = document.querySelector('.block2');
const element4 = document.querySelector('.block3');
const element5 = document.querySelector('.block4');
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
const output4 = document.querySelector('.output4');

function calculateDistance() {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  const rect3 = element3.getBoundingClientRect();
  const rect4 = element4.getBoundingClientRect();
  const rect5 = element5.getBoundingClientRect();

  const distance = Math.floor(Math.hypot(rect2.x - rect1.x, rect2.y - rect1.y));
  const distance2 = Math.floor(Math.hypot(rect2.x - rect3.x, rect2.y - rect3.y));
  const distance3 = Math.floor(Math.hypot(rect2.x - rect4.x, rect2.y - rect4.y));
  const distance4 = Math.floor(Math.hypot(rect2.x - rect5.x, rect2.y - rect5.y));
  output.textContent = distance;
  output2.textContent = distance2;
  output3.textContent = distance3;
  output4.textContent = distance4;

}

function animate() {
  requestAnimationFrame(animate);

  x += dx;
  y += dy;

  if (x + 50 > window.innerWidth || x < 0) {
    dx *= -1;
  }

  if (y + 50 > window.innerHeight || y < 0) {
    dy *= -1;
  }

  circle.style.top = y + 'px';
  circle.style.left = x + 'px';
  calculateDistance();

}

animate();
