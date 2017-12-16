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

// window.addEventListener('resize', displayDimensions);

// Tell paper to draw something on the screen
paper.view.draw();

// Fill canvas-2 with circles
let cRepeat;
let counter = 0;
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
