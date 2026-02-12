const tapBtn = document.getElementById("tapBtn");
const music = document.getElementById("bg-music");
const volumeNotice = document.getElementById("volumeNotice");
const volumeOk = document.getElementById("volumeOk");

// Wait for user to confirm volume
volumeOk.addEventListener("click", () => {
  volumeNotice.style.display = "none";
  tapBtn.style.display = "block";
});

// Start experience
tapBtn.addEventListener("click", () => {
  tapBtn.style.display = "none";

  // Start flower animation
  document.body.classList.remove("not-loaded");

  // Play music
  music.volume = 0.85;
  music.play();

  // Reveal greeting last
  setTimeout(() => {
    document.body.classList.add("reveal-text");
  }, 6000);
});
