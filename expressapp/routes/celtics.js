var express = require('express');
var router = express.Router();

/* GET roster page. */
router.get('/', function(req, res, next) {
  var playerData = req.app.get('appData');

  res.render('roster', {
    title: playerData.teams[1].name,
    pageId: 'boston-celtics',
    teamName: playerData.teams[1].name,
    players: playerData.teams[1]
  });

});

module.exports = router;
