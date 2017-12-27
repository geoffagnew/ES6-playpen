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

export { getElById, createEl, createNode };
