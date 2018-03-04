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
  let dynWidth = window.innerWidth;
  let dynHeight = window.innerHeight;
  let dimensions = [dynWidth, dynHeight];
  return dimensions;
}

// Update page with current window dimensions
function displayDimensions() {
  let updateText = 'Width: ' + calcWinDimensions([0]) + ' Height: ' + calcWinDimensions([1]);
  newText.nodeValue = updateText;
  newEl.appendChild(newText);
  dimensionDisplay.appendChild(newEl);
}

// -----------------------------------

let dimensionDisplay = getElById('values');
let newEl = createEl('p');
let newText = createNode('');
newEl.appendChild(newText);
dimensionDisplay.appendChild(newEl);

window.addEventListener('resize', displayDimensions);

// answer text
let btnAnswer = getElById('btnAnswer');
let answerEl = createEl('p');
let answerText = createNode('Yes, yes you are. There is zero doubt.');
answerEl.appendChild(answerText);

// messing with the background
var bodyEl = document.body;

btnAnswer.addEventListener('click', function() {
  btnAnswer.setAttribute('class', 'highlight-button');
  btnAnswer.textContent = 'LOL';
  dimensionDisplay.appendChild(answerEl);
  bodyEl.className = 'activate-lol';
});
