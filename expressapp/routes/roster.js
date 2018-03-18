var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var playerData = req.app.get('appData');

  res.render('roster', {
    title: 'Team Roster',
    pageId: 'team-roster',
    players: playerData
  });

});

module.exports = router;
