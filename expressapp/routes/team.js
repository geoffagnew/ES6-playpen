var express = require('express');
var router = express.Router();

/* GET parent team page */
router.get('/', function(req, res, next) {
  var playerData = req.app.get('appData');

  res.render('roster', {
    title: playerData.teams[0].name,
    pageId: playerData.teams[0].slug,
    teamName: playerData.teams[0].name,
    players: playerData.teams[0]
  });

});

/* GET child team page */
router.get('/:teamId', function(req, res, next) {
  var playerData = req.app.get('appData');
  // get the selected url parameters
  var currentTeamId = req.params.teamId;
  // empty array to hold the selected team object that's pulled out of the playerData object
  var currentTeam = [];

  playerData.teams.forEach(function(item) {
    if (item.slug === currentTeamId) {
      currentTeam.push(item);
    }
  });

  res.render('roster', {
      title: currentTeam[0].name,
      pageId: currentTeam[0].slug,
      teamName: currentTeam[0].name,
      players: currentTeam[0]
  });

});

module.exports = router;
