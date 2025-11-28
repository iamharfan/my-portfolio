// --- 1. MATRIX RAIN + NEURAL NODES ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンΣΩβμπ'.split('');
const fontSize = 14;
let columns = canvas.width / fontSize;
const drops = [];
// Neural nodes
const nodes = [];
const nodeCount = 30;

// Init Matrix drops
for (let x = 0; x < columns; x++) { drops[x] = 1; }

// Init Neural Nodes
for (let i = 0; i < nodeCount; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5
    });
}

function drawMatrix() {
    // Fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Draw Matrix Rain
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }

    // 2. Draw Neural Connections (Blue/Cyan)
    ctx.fillStyle = '#00F0FF';
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
    ctx.lineWidth = 0.5;

    nodes.forEach(node => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Connections
        nodes.forEach(otherNode => {
            const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.stroke();
            }
        });
    });
}
setInterval(drawMatrix, 40);


// --- 2. TABS LOGIC ---
window.openTab = function (evt, tabId) {
    // Hide all contents
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }

    // Remove active class from buttons
    const buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab");
    }

    // Show current and add active class
    document.getElementById(tabId).classList.add("active-content");
    evt.currentTarget.classList.add("active-tab");
}


// --- 3. SCROLL SPY ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');

            entry.target.querySelectorAll('.fade-in-on-scroll').forEach(el => el.classList.add('visible'));
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// --- 4. TYPING EFFECT ---
const textToType = "Loading Weights... Model: M_HARFAN_V1.0";
const typeContainer = document.getElementById('typing-text');
let typeIndex = 0;
function typeWriter() {
    if (typeIndex < textToType.length) {
        typeContainer.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 50);
    }
}
setTimeout(typeWriter, 500);

// --- 5. CLOCK ---
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { hour12: false });
}, 1000);

// --- 6. MOBILE MENU ---
window.closeMobileMenu = function () {
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Initial fade
window.onload = () => {
    document.querySelectorAll('#home .fade-in-on-scroll').forEach(el => el.classList.add('visible'));
};
