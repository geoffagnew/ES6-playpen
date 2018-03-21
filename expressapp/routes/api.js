var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');

/* API page */
router.get('/', function(req, res, next) {
  res.json(feedbackData);
});

module.exports = router;
