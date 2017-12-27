'use strict';

// ----------------------------------- FUNCTIONS

// DOM manipulation functions to keep things DRY

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getElById(el) {
  return document.getElementById(el);
}
function createEl(el) {
  return document.createElement(el);
}
function createNode(n) {
  return document.createTextNode(n);
}

exports.getElById = getElById;
exports.createEl = createEl;
exports.createNode = createNode;