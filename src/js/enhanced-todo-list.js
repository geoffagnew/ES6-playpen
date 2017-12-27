'use strict';

/* global getElById */

// import * as hFunctions from './functions.js';
var hFunctions = require('./functions.js');

const submitBtn = getElById('addToDo');
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

