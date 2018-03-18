var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var starters = '';
  // var benchMob = '';
  // var playerData = req.app.get('appData');
  // playerData.roster.forEach(function(item, i) {
  //   if (i <= 4) {
  //     starters += `
  //       <li>
  //         <strong>${item.name}</strong>
  //         ${item.position}
  //       </li>
  //     `;
  //   } else {
  //     benchMob += `
  //       <li>
  //         <strong>${item.name}</strong>
  //         ${item.position}
  //       </li>
  //     `;
  //   }
  // })
  // res.send(`
  //   <h1>Toronto Raptors 2018 roster</h1>
  //   <h2>Starters</h2>
  //   ${starters}
  //   <h2>Bench mob</h2>
  //   ${benchMob}
  // `);
  var myName = 'Bonestorm';
  res.render('index', {
    title: 'Home',
    pageId: 'home',
    name: myName
  });
});

module.exports = router;
