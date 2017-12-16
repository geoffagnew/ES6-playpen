'use strict';

/* global paper Shape */

// Call paper.js in the global scope
paper.install(window);
// Attach paper.js to the canvas element and prepares it for drawing
paper.setup(document.getElementById('canvas-2'));

// ----------------------------------- FUNCTIONS

// Check to see if value is even or odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// function createEl(el) {
//   let element = document.createElement(el);
// }

// function createNode(n) {
//   let node = document.createTextNode(n);
// }

function calcWinDimensions() {
  let dynWidth = window.innerWidth;
  let dynHeight = window.innerHeight;
  let dimensions = [dynWidth, dynHeight];
  return dimensions;
}

function displayDimensions() {
  console.log(calcWinDimensions([0], [1]));
}

// ----------------------------------- VARIABLES

let dimensionDisplay = document.getElementById('values');
let newEl = document.createElement('p');
let newText = document.createTextNode('This is my new text foo!');
newEl.appendChild(newText);
dimensionDisplay.appendChild(newEl);

// let para = document.createElement('p');
// let node = document.createTextNode('This is new.');

// Dynamically get the width and height of the browser viewport
// let CalcWinDimensions = function(e) {
//   let dynWidth = window.innerWidth;
//   let dynHeight = window.innerHeight;
//   console.log('Width: ' + dynWidth + ' Height: ' + dynHeight);
// };

window.addEventListener('resize', displayDimensions);

// Tell paper to draw something on the screen
paper.view.draw();

// Fill canvas-2 with circles
// let cRepeat;
// let counter = 0;
// for (var x = 25; x < 1400; x += 50) {
//   for (var y = 25; y < 1400; y += 50) {
//     counter = counter + 1;
//     var numberType = isEven(counter);
//     cRepeat = Shape.Circle(x, y, 10);
//     if (numberType === true) {
//       cRepeat.fillColor = 'black';
//     } else {
//       cRepeat.fillColor = 'pink';
//     }
//   }
// }
