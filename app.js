onload = () => {
  // start flower animation
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  // reveal Valentine text LAST
  setTimeout(() => {
    document.body.classList.add("reveal-text");
  }, 6000); // adjust timing if you want
};
