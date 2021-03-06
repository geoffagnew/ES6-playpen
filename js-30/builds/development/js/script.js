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

// born1500.forEach(inventor => console.log(`Name: ${inventor.first} ${inventor.last}, Born: ${inventor.year}`));


// ----------------- Array.prototype.map()
// 2. Give us an array of the inventors" first and last names

// Map will take in an array of any length but unlike filter, it will return an array of the SAME length as the original

var names = inventors.map(function (inventor) {
  return inventor.first + " " + inventor.last;
});
// console.table(names);

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
// console.table(sortedAge);

// ----------------- Array.prototype.reduce()
// 4. How many years did all the inventors live?
var totalYears = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
// console.log(totalYears);

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

var people = [{ name: "Wes", year: 1988 }, { name: "Kait", year: 1986 }, { name: "Irv", year: 1970 }, { name: "Lux", year: 2015 }];

var comments = [{ text: "Love this!", id: 523423 }, { text: "Super good", id: 823423 }, { text: "You are the best", id: 2039842 }, { text: "Ramen is my fav food ever", id: 123523 }, { text: "Nice Nice Nice!", id: 542328 }];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

var isAdult = people.some(function (person) {
  var currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19; // returns true if at least one value in the array meets the condition
});
// console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
var allAdults = people.every(function (person) {
  var currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19; // returns true if every value in the array meets the condition
});
// console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
var findComment = comments.find(function (comment) {
  return comment.id === 823423;
});
// console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
var findCommentIdx = comments.findIndex(function (comment, idx) {
  if (comment.id === 823423) {
    return comments.splice(idx, 1);
  }
});
// console.table(comments);

},{}],3:[function(require,module,exports){
"use strict";

// onclick register which element was clicked and if the onkeydown event was fired simultaneously
// if yes -> 
// register which select element was most recently clicked
// register which select element was click 1 step prior
// identify which element nodes exist between those two items in the DOM
// loop over that collection of nodes and check each of them

// variables
var inboxItems = document.querySelectorAll(".item input"); // total of 9 items in the array of dom nodes
var previousSelection = null;

// event listeners
inboxItems.forEach(function (item) {
  return item.addEventListener("click", selectRange);
});

// function declarations
function selectRange(e) {
  var _this = this;

  var inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every checkbox
    inboxItems.forEach(function (checkbox) {
      console.log(checkbox);
      if (checkbox === _this || checkbox === previousSelection) {
        inBetween = !inBetween;
        console.log("Starting to check them in between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  previousSelection = this;
}

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

var panels = document.querySelectorAll(".panel");
var activePanel = null;

function closeActivePanel() {
  if (activePanel !== null) {
    var locatePanel = document.querySelector("." + activePanel[1]);
    locatePanel.classList.remove("open");
    activePanel = null;
  }
}

function toggleOpen() {
  var currentSelection = this.classList;
  if (currentSelection.contains("open")) {
    closeActivePanel();
  } else {
    closeActivePanel();
    currentSelection.add("open");
    activePanel = currentSelection;
  }
}

panels.forEach(function (panel) {
  return panel.addEventListener("click", toggleOpen);
});

// function closeAllPanels() {
//   panels.forEach(function(panel) {
//     panel.classList.remove("open");
//   });
// }

// function toggleOpen() {
//   const currentSelection = this.classList;
//   if(currentSelection.contains("open")) {
//     closeAllPanels();
//   } else {
//     closeAllPanels();
//     currentSelection.add("open");
//   }
// }

},{}],8:[function(require,module,exports){
"use strict";

// ------------------------------------------- Imports
var drumMachine = require("./drum-machine");
var clock = require("./clock");
var cssVariables = require("./css-variables");
var arrayCardio1 = require("./array-cardio-1");
var flexPanels = require("./flex-panels");
var typeAhead = require("./type-ahead");
var arrayCardio2 = require("./array-cardio-2");
var checkAllBoxes = require("./check-all-boxes");

},{"./array-cardio-1":1,"./array-cardio-2":2,"./check-all-boxes":3,"./clock":4,"./css-variables":5,"./drum-machine":6,"./flex-panels":7,"./type-ahead":9}],9:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var cities = [];
var cityData = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(cityData).then(function (res) {
  return res.json();
}).then(function (data) {
  return cities.push.apply(cities, _toConsumableArray(data));
}).catch(function (error) {
  return console.log(error);
});

function findMatches(wordToMatch, cities) {
  return cities.filter(function (place) {
    // here we need to figure out if the city or state matches what was searched
    var regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayResults() {
  var _this = this;

  var results = findMatches(this.value, cities);
  if (this.value.length > 0) {
    var resultsHtml = results.map(function (place) {
      var regex = new RegExp(_this.value, "gi");
      var cityName = place.city.replace(regex, "<span class=\"highlight\">" + _this.value + "</span>");
      var stateName = place.state.replace(regex, "<span class=\"highlight\">" + _this.value + "</span>");
      return "\n        <li>\n          <strong>" + cityName + "</strong> \n          " + stateName + " \n          <div class=\"population\">Population: " + place.population + "</div>\n        </li>\n      ";
    }).join("");
    return resultsContainer.innerHTML = resultsHtml;
  } else {
    return resultsContainer.innerHTML = "";
  }
}

var resultsContainer = document.querySelector(".suggestions");
var input = document.querySelector(".search");

input.addEventListener("keyup", displayResults);

},{}]},{},[8]);
