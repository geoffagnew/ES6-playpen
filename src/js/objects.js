'use strict';

/* global createEl getElById, createNode */

// Functions for building a profile from the user object

function buildUserData() {
  let fullName = human.name.first + ' ' + human.name.last;
  let bodyDesc = human.body.gender;
  let age = human.age;
  let detailsCombined = [fullName, bodyDesc, age];
  return detailsCombined;
}

function displayUserData(label, texttoshow) {
  let newEl = createEl('p');
  let keyValue = label + ': ' + texttoshow;
  let newText = createNode(keyValue);
  newEl.appendChild(newText);
  userDisplay.appendChild(newEl);
}

// Data, variables and events for user object

let human = {
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

let userDisplay = getElById('user-profile');

getElById('btn-answer').addEventListener('click', function() {
  displayUserData('Name', buildUserData()[0]);
  displayUserData('Gender', buildUserData()[1]);
  displayUserData('Age', buildUserData()[2]);
});
