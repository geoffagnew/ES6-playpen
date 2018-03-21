// -------------------------- Libraries
// load jquery
const $ = require("jquery");

// -------------------------- Plugins

$.getJSON("api", displayFeedback);

// -------------------------- Functions
function displayFeedback(data) {
  var feedbackOutput = "";
  $.each(data, function(key, item) {
    feedbackOutput += `<div class="userFeedbackBlock">`;
    feedbackOutput += `<div class="userFeedbackText pt-4 pr-4 pb-2 pl-4">`;
    feedbackOutput += `<h4>${item.title}</h4>`;
    feedbackOutput += `<p><strong>${item.name}</strong></p>`;
    feedbackOutput += `<p>${item.message}</p>`;
    feedbackOutput += `</div>`;
    feedbackOutput += `</div>`;
  });
  $("#feedback-container").html(feedbackOutput);
}
