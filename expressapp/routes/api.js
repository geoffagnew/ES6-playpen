var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

var feedbackData = require('../data/feedback.json');

/* API page */
router.get('/', function(req, res, next) {
  res.json(feedbackData);
});

// use body-parser middleware to properly interpret body of request (json)
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function(req, res, next) {
  // add post data to top of json object
  feedbackData.unshift(req.body);
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
      if(err) {
        console.log(err);
      }
    }
  );
  res.json(feedbackData);
});

router.delete('/:id', function(req, res, next) {
  // remove the relevant item from the array, 1 defines the number to remove
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
      if(err) {
        console.log(err);
      }
    }
  );
  res.json(feedbackData);
});

module.exports = router;
