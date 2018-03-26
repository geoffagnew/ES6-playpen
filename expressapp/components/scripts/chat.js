// -------------------------- Libraries
// load jquery
const $ = require("jquery");

// -------------------------- Plugins
// socket.io-client
const io = require("socket.io-client");
// load dom purify sanitizer
const DOMPurify = require("dompurify");

// call the io object and load all the methods into the socket variable
var socket = io();

// -------------------------- Functions

// sanitize form input
function sanitizeInput(val) {
  var cleanInput = DOMPurify.sanitize(val, {SAFE_FOR_JQUERY: true});
  return cleanInput;
}

function updateChat(data) {
  var chatOutput = "";
  chatOutput += `<div class="userMessageBlock">`;
  chatOutput += `<div class="userChatText pt-3 pr-0 pb-1 pl-0">`;
  if ($("#chat-name").val() == data.name) {
    chatOutput += `<p><strong class="highlight-user-name">${data.name}:</strong> ${data.message}</p>`;
  } else {
    chatOutput += `<p><strong>${data.name}:</strong> ${data.message}</p>`;
  }
  chatOutput += `</div>`;
  chatOutput += `</div>`;
  $("#chat-container").prepend(chatOutput);
}

socket.on("connect", function() {
  // get the form element from the chat page
  var $chatForm = $("#chat-form");

  // check if a chat form exists on the page
  if ($chatForm.length) {
    var name = $("#chat-name");
    var message = $("#chat-message");

    $chatForm.submit(function(e){
      e.preventDefault();
      // sanitize user data from both name and message inputs
      var cleanName = sanitizeInput(name.val());
      var cleanMessage = sanitizeInput(message.val());
      // emit PostMessage event to server to be broadcasted to all connected users
      socket.emit("postMessage", {
        name: cleanName,
        message: cleanMessage
      });
      // clear message field from form and restore focus
      message.val("");
      message.focus();
    });

    // on receipt of updateChatMessages event from server (data argument contains the new message content), run the updateChat function to display the new message in the client
    socket.on("updateChatMessages", function(data) {
      updateChat(data);
    });
  }
});
