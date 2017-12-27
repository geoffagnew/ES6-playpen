'use strict';

/* global getElById */

var _functions = require('functions.js');

var hFunctions = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var submitBtn = getElById('addToDo');
console.log(submitBtn);

// function to check if existing data has been saved in localStorage from previous visits
// function loadToDo() {
//   if (localStorage.getItem('savedList')) {
//     theList.innerHTML = localStorage.getItem('savedList');
//   }
// }

// call the function to check if existing data has been saved
// loadToDo();

// event listener for the clear all button
// clearAll.addEventListener('click', function(e) {
//   e.preventDefault();
//   localStorage.clear();
//   theList.innerHTML = '<li>' + 'Add your first item' + '</li>';
//   console.log('Clear event has fired.');
// });