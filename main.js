let keys = document.querySelectorAll(".key");

function removeTransition() {
  this.classList.remove("playing");
}

function playSound(target) {
  let key = document.querySelector(`.key[data-key="${target.keyCode}"]`);
  let sound = document.querySelector(`audio[data-key="${target.keyCode}"]`);
  if (!sound) {
    return;
  }
  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
}

keys.forEach((e) => {
  e.addEventListener("transitionend", removeTransition);
});

document.addEventListener("keydown", playSound);
