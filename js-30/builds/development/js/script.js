(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// function that controls audio playback
function playSound(e) {
	// select the appropriate audio file based on keyCode captured from the user event
	var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
	// select the appropriate .key element so we can manipulate the css
	var key = document.querySelector("div[data-key=\"" + e.keyCode + "\"]");
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
var keys = document.querySelectorAll(".key");
// listen for transitionend event so we can remove the .playing class from the currently selected div
keys.forEach(function (key) {
	return key.addEventListener("transitionend", removeTransition);
});

},{}],2:[function(require,module,exports){
"use strict";

// ------------------------------------------- Imports
// load a custom js module that lives outside node-modules (example)
var drumMachine = require("./drum-machine");

},{"./drum-machine":1}]},{},[2]);
