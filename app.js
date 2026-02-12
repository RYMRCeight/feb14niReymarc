const tapBtn = document.getElementById("tapBtn");
const music = document.getElementById("bg-music");

tapBtn.addEventListener("click", () => {
  // Hide the button
  tapBtn.style.display = "none";

  // Start flower animation
  document.body.classList.remove("not-loaded");

  // Play music
  music.volume = 0.85;
  music.play();

  // Reveal greeting LAST
  setTimeout(() => {
    document.body.classList.add("reveal-text");
  }, 6000);
});
