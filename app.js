const tapBtn = document.getElementById("tapBtn");
const music = document.getElementById("bg-music");
const volumeNotice = document.getElementById("volumeNotice");

// Step 1: show volume notice first
setTimeout(() => {
  volumeNotice.style.display = "none";
  tapBtn.style.display = "block";
}, 3000); // 3 seconds message

// Step 2: user taps
tapBtn.addEventListener("click", () => {
  tapBtn.style.display = "none";

  document.body.classList.remove("not-loaded");

  music.volume = 0.85;
  music.play();

  setTimeout(() => {
    document.body.classList.add("reveal-text");
  }, 6000);
});
