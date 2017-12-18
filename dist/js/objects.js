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

// Functions for building a profile from the user object

function buildUserData() {
  var fullName = human.name.first + ' ' + human.name.last;
  var bodyDesc = human.body.gender;
  var age = human.age;
  var detailsCombined = [fullName, bodyDesc, age];
  return detailsCombined;
}

function displayUserData(label, texttoshow) {
  var newEl = createEl('p');
  var keyValue = label + ': ' + texttoshow;
  var newText = createNode(keyValue);
  newEl.appendChild(newText);
  userDisplay.appendChild(newEl);
}

// Data, variables and events for user object

var human = {
  name: {
    first: 'Magoo',
    last: 'Boobsworth'
  },
  body: {
    height: '5\'11"',
    weightPounds: 195,
    gender: 'Male',
    hairColour: 'brown',
    ethnicity: 'latino'
  },
  age: 29
};

var userDisplay = getElById('user-profile');

getElById('btn-answer').addEventListener('click', function () {
  displayUserData('Name', buildUserData()[0]);
  displayUserData('Gender', buildUserData()[1]);
  displayUserData('Age', buildUserData()[2]);
});