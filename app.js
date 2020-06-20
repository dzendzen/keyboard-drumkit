const playSound = (e) => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   stop the function if no associated data-key
  //   if (!audio) return;
  //  rewind to start so can be played over and aver again
  audio.currentTime = 0;
  audio.play();
  //   console.log(key);
  key.classList.add("playing");
};
function removeTransition(e) {
  //   console.log(e);
  if (e.propertyName !== "transform") return; //skip if not a transform
  this.classList.remove("playing"); //this refers to the key
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  //   use transition-end event to remove animation
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
