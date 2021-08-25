

function playSound(event) {
  // console.log(event);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  // console.log(audio);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0; // rewinds audio in order to repeat sounds
  audio.play();
  // console.log(key);
  key.classList.add("playing"); // adding a class to change the CSS properties
}

document.getElementById("a").addEventListener("click", function() {
  let a = new Audio("sounds/clap.wav");
  this.classList.add("playing");
  a.play()
  
});

function removeTransition(event) {
  // console.log(event);
  if (event.propertyName !== "transform") {
    return;
  }
  // console.log(event.propertyName);
  // console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
