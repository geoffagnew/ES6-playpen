var express = require('express');
var router = express.Router();

/* GET feedback page */
router.get('/', function(req, res, next) {

  res.render('feedback', {
      title: 'Feedback',
      pageId: 'feedback'
  });

});

module.exports = router;
