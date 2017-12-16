'use strict';

// ----------------------------------- FUNCTIONS

// DOM manipulation functions to keep things DRY

function getElById(el) {
  return document.getElementById(el);
}
function createEl(el) {
  return document.createElement(el);
}
function createNode(n) {
  return document.createTextNode(n);
}

// Calculate window dimensions
function calcWinDimensions() {
  var dynWidth = window.innerWidth;
  var dynHeight = window.innerHeight;
  var dimensions = [dynWidth, dynHeight];
  return dimensions;
}

// Update page with current window dimensions
function displayDimensions() {
  var updateText = 'Width: ' + calcWinDimensions([0]) + ' Height: ' + calcWinDimensions([1]);
  newText.nodeValue = updateText;
  newEl.appendChild(newText);
  dimensionDisplay.appendChild(newEl);
}

// -----------------------------------

var dimensionDisplay = getElById('values');
var newEl = createEl('p');
var newText = createNode('');
newEl.appendChild(newText);
dimensionDisplay.appendChild(newEl);

window.addEventListener('resize', displayDimensions);

// let btnAnswer = getElById('btnAnswer');
// let dimensionDisplay = getElById('values');
// let newEl = createEl('p');
// let newText = createNode('Hell yes you are. No doubt fool.');
// newEl.appendChild(newText);

// btnAnswer.addEventListener('click', function() {
//   dimensionDisplay.appendChild(newEl);
// });