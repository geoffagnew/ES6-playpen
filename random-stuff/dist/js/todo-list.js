'use strict';

/* global localStorage */

var theList = document.getElementById('todo-list');
var saveAll = document.getElementById('save-all');
var clearAll = document.getElementById('clear-all');

// function to check if existing data has been saved in localStorage from previous visits
function loadToDo() {
  if (localStorage.getItem('savedList')) {
    theList.innerHTML = localStorage.getItem('savedList');
  }
}

// call the function to check if existing data has been saved
loadToDo();

// event listener for the saveall button
saveAll.addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.setItem('savedList', theList.innerHTML);
  console.log('Save event has fired.');
});

// event listener for the clear all button
clearAll.addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.clear();
  theList.innerHTML = '<li>' + 'Add your first item' + '</li>';
  console.log('Clear event has fired.');
});