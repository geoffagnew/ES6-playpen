var express = require('express');
var router = express.Router();

/* GET roster page. */
router.get('/', function(req, res, next) {
  var playerData = req.app.get('appData');

  res.render('roster', {
    title: 'Toronto Raptors',
    pageId: 'toronto-raptors',
    teamName: 'Toronto Raptors',
    players: playerData
  });

});

module.exports = router;
