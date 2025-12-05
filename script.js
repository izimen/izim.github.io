// Create Particles
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Create Sparkles around text
const container = document.querySelector('.container');
const sparkleCount = 20;

setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (Math.random() * 100 - 50) + '%';
    sparkle.style.top = (Math.random() * 100 - 50) + '%';
    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}, 300);

// Text Wave Animation
const text = document.getElementById('text');
const letters = text.textContent.split('');
text.textContent = '';

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.display = 'inline-block';
    span.style.animation = `wave 1s ease-in-out infinite`;
    span.style.animationDelay = `${index * 0.1}s`;
    text.appendChild(span);
});

// Mouse Trail Effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'sparkle';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.position = 'fixed';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
});
