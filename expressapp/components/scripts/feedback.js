// -------------------------- Libraries
// load jquery
const $ = require("jquery");

// -------------------------- Plugins
// load dom purify sanitizer
const DOMPurify = require("dompurify");

// -------------------------- Functions

// sanitize form input
function sanitizeInput(val) {
  var cleanInput = DOMPurify.sanitize(val, {SAFE_FOR_JQUERY: true});
  return cleanInput;
}

// function to display and update feedback on page
function displayFeedback(data) {
  var feedbackOutput = "";
  $.each(data, function(key, item) {
    feedbackOutput += `<div class="userFeedbackBlock">`;
    feedbackOutput += `<div class="userFeedbackText pt-4 pr-4 pb-2 pl-4">`;
    feedbackOutput += `<a href="#" class="delete-item" id="${key}">X</a>`;
    feedbackOutput += `<h4>${item.title}</h4>`;
    feedbackOutput += `<p><strong>${item.name}</strong></p>`;
    feedbackOutput += `<p>${item.message}</p>`;
    feedbackOutput += `</div>`;
    feedbackOutput += `</div>`;
  });
  $("#feedback-container").html(feedbackOutput);
}

var $feedbackForm = $("#user-message-form");

// check if a user-message-form exists on the page
if ($feedbackForm.length) {

  // load the json data on page load
  $.getJSON("api", displayFeedback);

  var name = $("#name");
  var title = $("#title");
  var message = $("#feedbackMessage");

  $feedbackForm.submit(function(e){
    e.preventDefault();
    // sanitize input values
    var cleanName = sanitizeInput(name.val());
    var cleanTitle = sanitizeInput(title.val());
    var cleanMessage = sanitizeInput(message.val());
    $.post("api", {
      name: cleanName,
      title: cleanTitle,
      message: cleanMessage
    }, displayFeedback);
    // clear the form fields and restore focus
    name.val("");
    title.val("");
    message.val("");
    name.focus();
  });

  $("#feedback-container").on("click", ".delete-item", function(e){
    e.preventDefault();
    $.ajax({
      url: "api/" + e.target.id,
      type: "DELETE",
      success: displayFeedback
    });
  });

}
