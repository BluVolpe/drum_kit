window.addEventListener('keydown', function(event) {    
    // console.log(event);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // console.log(audio);
    if(!audio) return; // stop the function from running
    audio.currentTime = 0; // rewinds audio in order to repeat sounds
    audio.play();
    // console.log(key);
    key.classList.add("playing"); // adding a class to change the CSS properties
});

function removeTransition(event) {
    console.log(event);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));