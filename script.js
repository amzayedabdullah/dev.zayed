// ==== Background Particle Animation ====
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
    });
  }
}
initParticles();

function animateParticles() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

// Resize handler
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Subtle mouse interaction
window.addEventListener('mousemove', e => {
  particles.push({
    x: e.x,
    y: e.y,
    size: Math.random() * 3,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: (Math.random() - 0.5) * 1.5,
  });
  if (particles.length > 150) particles.splice(0, 1);
});


