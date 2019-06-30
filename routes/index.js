var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Scribble',
    navItems : [
      {
        name: 'Fetch',
        route: 'fetch'
      },
      {
        name: 'xhr',
        route: 'xhr'
      }
    ]
  });
});

module.exports = router;
