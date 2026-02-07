function sayYes() {
  document.getElementById("question").style.display = "none";
  document.getElementById("gifts").classList.remove("hidden");
  const music = document.getElementById("bgMusic");
  music.volume = 0.3;
  music.play();
}

function sayNo() {
  alert("nuh uh");
}

function playClick() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("muteBtn");
  music.muted = !music.muted;
  btn.textContent = music.muted ? "🔇" : "🔊";
}

function openGift(button, id) {
  document.querySelectorAll("#gifts button").forEach(btn => {
    if (btn !== button) btn.style.display = "none";
  });
  showSection(id);
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => {
    s.classList.add("hidden");
    s.classList.remove("show");
  });
  const sec = document.getElementById(id);
  sec.classList.remove("hidden");
  setTimeout(() => sec.classList.add("show"), 50);
}

function showAllButtons() {
  document.querySelectorAll("#gifts button").forEach(b => b.style.display = "inline-block");
  document.querySelectorAll(".section").forEach(s => {
    s.classList.add("hidden");
    s.classList.remove("show");
  });
}

function reveal(el, msg) { el.textContent = msg; }

function flip(c) { c.classList.toggle("flipped"); }

const reasons = [
  "The way you smile at me 💗",
  "How you always know how to comfort me",
  "You make me feel safe",
 "The way you laugh 💗",
 "I can trust you with ANYTHING",
 "The way you LOVE me 💗",
  "You’re my favorite person 💕",
 "The way you are 💗"
];
let i = 0;
function nextReason() {
  document.getElementById("reasonText").textContent =
    reasons[i++] || "You're PERFECT 💗💞";
}

function flipCoupon(coupon) {
  coupon.classList.toggle("flipped");
}

function showAllButtons() {
  document.querySelectorAll("#gifts button").forEach(b => b.style.display = "inline-block");
  document.querySelectorAll(".section").forEach(s => {
    s.classList.add("hidden");
    s.classList.remove("show");
  });
}

/* Hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = "💗";
  h.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 500);

/* Page flip */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  if(page){
    page.addEventListener("click", () => {
      page.classList.toggle("flipped");
    });
  }
});

document.addEventListener("click", e => {
  if (e.target.closest(".page")) {
    e.target.closest(".page").classList.toggle("flipped");
  }
});