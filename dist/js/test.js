'use strict';

/* global paper Shape */

// Call paper.js in the global scope

paper.install(window);
// Attach paper.js to the canvas element and prepares it for drawing
paper.setup(document.getElementById('canvas-2'));

// ----------------------------------- FUNCTIONS

// Calculate window dimensions
function calcWinDimensions() {
  var dynWidth = window.innerWidth;
  var dynHeight = window.innerHeight;
  var dimensions = [dynWidth, dynHeight];
  return dimensions;
}

function winWidth() {
  // Determine the width of the circles required to fill the page with 20
  var currentWidth = calcWinDimensions()[0];
  var circleSize = currentWidth / numCircles;
  circleSize = Math.floor(circleSize);
  console.log(circleSize);
}

// Check to see if value is even or odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var numCircles = 20;

// Fill canvas-2 with circles
var cRepeat = void 0;
var counter = 0;
for (var x = 25; x < 700; x += 50) {
  for (var y = 25; y < 700; y += 50) {
    counter = counter + 1;
    var numberType = isEven(counter);
    cRepeat = Shape.Circle(x, y, 10);
    if (numberType === true) {
      cRepeat.fillColor = 'black';
    } else {
      cRepeat.fillColor = 'pink';
    }
  }
}

// Tell paper to draw something on the screen
paper.view.draw();

window.addEventListener('resize', winWidth);