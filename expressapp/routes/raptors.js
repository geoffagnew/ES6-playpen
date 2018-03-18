var express = require('express');
var router = express.Router();

/* GET roster page. */
router.get('/', function(req, res, next) {
  var playerData = req.app.get('appData');

  res.render('roster', {
    title: playerData.teams[0].name,
    pageId: playerData.teams[0].slug,
    teamName: playerData.teams[0].name,
    players: playerData.teams[0]
  });

});

module.exports = router;
