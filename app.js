const tapBtn = document.getElementById("tapBtn");
const music = document.getElementById("bg-music");
const volumeNotice = document.getElementById("volumeNotice");
const volumeOk = document.getElementById("volumeOk");

// Enter fullscreen safely
function goFullScreen() {
  const el = document.documentElement;

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen(); // Safari
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

// STEP 1: Volume OK → Fullscreen + show Tap Here
volumeOk.addEventListener("click", () => {
  goFullScreen();               // 👈 FULLSCREEN HERE
  volumeNotice.style.display = "none";
  tapBtn.style.display = "block";
});

// STEP 2: Tap Here → Start experience
tapBtn.addEventListener("click", () => {
  tapBtn.style.display = "none";

  document.body.classList.remove("not-loaded");

  music.volume = 0.85;
  music.play();

  setTimeout(() => {
    document.body.classList.add("reveal-text");
  }, 6000);
});
