// function that controls audio playback
function playSound(e) {
	// select the appropriate audio file based on keyCode captured from the user event
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// select the appropriate .key element so we can manipulate the css
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	// if the key pressed doesn't have a corresponding data-key/audio file, end the function
	if (!audio) return;
	// rewind the audio file to 0 second mark on each keydown	
	audio.currentTime = 0;
	// play the appropriate audio file
	audio.play();
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName != "transform") return;
	this.classList.remove("playing"); 
}

// event listener for playing sound on keydown and transitioning css
window.addEventListener("keydown", playSound);

// get all elements with the class .key (returns an array in keys)
const keys = document.querySelectorAll(".key");
// listen for transitionend event so we can remove the .playing class from the currently selected div
keys.forEach(key => key.addEventListener("transitionend", removeTransition));