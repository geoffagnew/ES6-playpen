(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

var inventors = [{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 }, { first: "Isaac", last: "Newton", year: 1643, passed: 1727 }, { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 }, { first: "Marie", last: "Curie", year: 1867, passed: 1934 }, { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 }, { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 }, { first: "Max", last: "Planck", year: 1858, passed: 1947 }, { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 }, { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 }, { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 }, { first: "Lise", last: "Meitner", year: 1878, passed: 1968 }, { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }];

var people = ["Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley, Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black, Elk", "Blair, Robert", "Blair, Tony", "Blake, William"];

// ----------------- Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500"s

// Filter will let you bring in any number of items in an array are return any number on the other side

var born1500 = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    // return true to tell filter we want to keep it
    return true;
  }
});

born1500.forEach(function (inventor) {
  return console.log("Name: " + inventor.first + " " + inventor.last + ", Born: " + inventor.year);
});

// ----------------- Array.prototype.map()
// 2. Give us an array of the inventors" first and last names

// Map will take in an array of any length but unlike filter, it will return an array of the SAME length as the original

var names = inventors.map(function (inventor) {
  return inventor.first + " " + inventor.last;
});
console.table(names);

// ----------------- Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// const sortedAge = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// this sort statement is the same as above, just using shorthand arrow functions and a ternerary statement instead of a regular if
var sortedAge = inventors.sort(function (a, b) {
  return a.year > b.year ? 1 : -1;
});
console.table(sortedAge);

// ----------------- Array.prototype.reduce()
// 4. How many years did all the inventors live?
var totalYears = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// The for loop does the exact same thing as above, but using the traditional method of reducing values across array items
// let totalYears = 0;
// for(let i = 0; i < inventors.length; i++){
//   totalYears += inventors[i].passed - inventors[i].year;
//   console.log(totalYears);
// }
// console.log(`Total from trad for loop ${totalYears}`);

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain "de" anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

},{}],2:[function(require,module,exports){
"use strict";

var secondsHand = document.querySelector(".second-hand");
var minutesHand = document.querySelector(".min-hand");
var hoursHand = document.querySelector(".hour-hand");

function setDate() {
  var currentTime = new Date();

  // calculate hours and move hand in the clockface
  var hours = currentTime.getHours();
  var hoursDegrees = hours / 12 * 360 + 90;
  hoursHand.style.transform = "rotate(" + hoursDegrees + "deg)";

  // calculate minutes and move hand in the clockface
  var minutes = currentTime.getMinutes();
  var minutesDegrees = minutes / 60 * 360 + 90;
  minutesHand.style.transform = "rotate(" + minutesDegrees + "deg)";

  // calculate seconds and move hand in the clockface
  var seconds = currentTime.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  secondsHand.style.transform = "rotate(" + secondsDegrees + "deg)";
}
if (hoursHand) {
  setInterval(setDate, 1000);
}

},{}],3:[function(require,module,exports){
"use strict";

var myImg = document.getElementById("mainImg");
var inputs = document.querySelectorAll(".controls input");

function updateValues() {
	var suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty("--" + this.name, this.value + suffix);
}

if (myImg) {
	inputs.forEach(function (input) {
		return input.addEventListener("input", updateValues);
	});
}

// let spacingControl = document.getElementById("spacing");
// let blurControl = document.getElementById("blur");
// let colorControl = document.getElementById("color");

// function updateSpacing () {
// 	let paddingValue = spacingControl.value;
// 	myImg.setAttribute("style", `padding: ${paddingValue}px;`);
// }
// 
// function updateBlur () {
// 	let blurValue = blurControl.value;
// 	myImg.setAttribute("style", `filter: blur(${blurValue}px);`);
// }

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

// ------------------------------------------- Imports
var drumMachine = require("./drum-machine");
var clock = require("./clock");
var cssVariables = require("./css-variables");
var arrayCardio1 = require("./array-cardio-1");

},{"./array-cardio-1":1,"./clock":2,"./css-variables":3,"./drum-machine":4}]},{},[5]);
