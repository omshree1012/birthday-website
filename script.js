const openSurprise = document.getElementById("openSurprise");
const surprise = document.getElementById("surprise");
const cakeBtn = document.getElementById("cakeBtn");
const cakeMessage = document.getElementById("cakeMessage");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterDialog = document.getElementById("letterDialog");
const musicBtn = document.getElementById("musicBtn");
const backTop = document.getElementById("backTop");

openSurprise.addEventListener("click", () => {
  if (musicOn) startMusic();
  surprise.classList.remove("hidden");
  openSurprise.textContent = "Surprise opened ♡";
  openSurprise.disabled = true;
  launchConfetti(150);
  setTimeout(() => surprise.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
});

cakeBtn.addEventListener("click", () => {
  const blown = cakeBtn.classList.toggle("blown");
  cakeMessage.textContent = blown
    ? "Wish sent! May your year be full of lovely surprises 💗✨"
    : "Three little candles, one big wish 💗";
  if (blown) launchConfetti(90);
});

openLetter.addEventListener("click", () => {
  if (typeof letterDialog.showModal === "function") letterDialog.showModal();
  else alert("Your birthday letter is in the page source under the birthday note section.");
});
closeLetter.addEventListener("click", () => letterDialog.close());
letterDialog.addEventListener("click", (event) => {
  if (event.target === letterDialog) letterDialog.close();
});

let audioContext = null;
let melodyTimer = null;
let melodyStep = 0;
let musicOn = true;
const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46, 523.25, 587.33, 659.25, 523.25];

function playNote(freq, startTime, duration = 0.22) {
  if (!audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);
}

function scheduleMelody() {
  if (!musicOn || !audioContext) return;
  const now = audioContext.currentTime;
  playNote(notes[melodyStep % notes.length], now, 0.24);
  if (melodyStep % 4 === 0) playNote(notes[(melodyStep + 2) % notes.length] / 2, now, 0.36);
  melodyStep++;
}

async function startMusic() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    musicBtn.textContent = "Music not supported in this browser";
    return;
  }
  audioContext = audioContext || new AudioCtx();
  if (audioContext.state === "suspended") {
    try {
      await audioContext.resume();
    } catch (_) {}
  }
  if (!melodyTimer) {
    scheduleMelody();
    melodyTimer = setInterval(scheduleMelody, 320);
  }
  musicOn = true;
  musicBtn.textContent = "♫ Pause cute tune";
  musicBtn.setAttribute("aria-pressed", "true");
}

function stopMusic() {
  musicOn = false;
  if (melodyTimer) {
    clearInterval(melodyTimer);
    melodyTimer = null;
  }
  if (audioContext) {
    audioContext.suspend();
  }
  musicBtn.textContent = "♫ Play cute tune";
  musicBtn.setAttribute("aria-pressed", "false");
}

musicBtn.addEventListener("click", () => {
  if (musicOn) {
    stopMusic();
  } else {
    startMusic();
  }
});

// Autoplay default: attempt immediate start, and resume smoothly on first user interaction if blocked by browser policy
startMusic();
const unlockMusic = () => {
  if (musicOn && (!audioContext || audioContext.state === "suspended")) {
    startMusic();
  }
};
window.addEventListener("pointerdown", unlockMusic, { once: true });
window.addEventListener("keydown", unlockMusic, { once: true });

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Lightweight confetti animation drawn on a canvas—no extra library required.
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let animationId = null;
function resizeCanvas() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
function launchConfetti(count) {
  const palette = ["#f28db5", "#ffd166", "#b8e0d2", "#cdb4db", "#ffafcc", "#ffffff"];
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.35,
      size: 4 + Math.random() * 6,
      speed: 2 + Math.random() * 4,
      drift: (Math.random() - 0.5) * 2.4,
      spin: Math.random() * 6,
      color: palette[Math.floor(Math.random() * palette.length)]
    });
  }
  if (!animationId) drawConfetti();
}
function drawConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces.forEach(piece => {
    piece.y += piece.speed;
    piece.x += piece.drift;
    piece.spin += 0.08;
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.spin);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.65);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter(piece => piece.y < window.innerHeight + 30);
  if (confettiPieces.length) animationId = requestAnimationFrame(drawConfetti);
  else {
    cancelAnimationFrame(animationId);
    animationId = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}
