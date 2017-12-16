'use strict';

/* global paper Shape */

// Call paper.js in the global scope
paper.install(window);
// Attach paper.js to the canvas element and prepares it for drawing
// paper.setup(document.getElementById('main-canvas'));
paper.setup(document.getElementById('canvas-2'));

// Create the circle object
// var c1 = Shape.Circle(150, 150, 100);
// var c2 = Shape.Circle(150, 150, 25);
// c1.fillColor = 'white';
// c2.fillColor = 'black';

// Check to see if value is even or odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Fill canvas-2 with circles
var cRepeat;
var counter = 0;
for (var x = 25; x < 800; x += 50) {
  for (var y = 25; y < 800; y += 50) {
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

// for (var x = 25; x < 800; x+= 50) {
//   for (var y = 25; y < 800; y+= 50) {
//     cRepeat = Shape.Circle(x, y, 10);
//     cRepeat.fillColor = 'black';
//     }
// }

// Tell paper to draw someothing on the screen
paper.view.draw();
