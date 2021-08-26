

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
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("s").addEventListener("click", function() {
  let a = new Audio("sounds/hihat.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("d").addEventListener("click", function() {
  let a = new Audio("sounds/kick.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("f").addEventListener("click", function() {
  let a = new Audio("sounds/openhat.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("g").addEventListener("click", function() {
  let a = new Audio("sounds/boom.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("h").addEventListener("click", function() {
  let a = new Audio("sounds/ride.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("j").addEventListener("click", function() {
  let a = new Audio("sounds/snare.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("k").addEventListener("click", function() {
  let a = new Audio("sounds/tom.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
  this.classList.add("playing");
  a.play()
  
});

document.getElementById("l").addEventListener("click", function() {
  let a = new Audio("sounds/tink.wav");
  if (!a) {
    return
  };
  a.currentTime = 0;
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
