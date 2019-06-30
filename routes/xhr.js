var express = require('express');
var router = express.Router();
var util = require('../util')

/* GET users listing. */
router.get("/xhr", function (req, res) {
  //logCookie(req);
  logHeaders(req);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome xhr</h1>");
});

router.get("/", function (req, res) {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  res.send("<h1>Welcome RELATIVE xhr</h1>");
  //res.redirect('http://192.168.0.103:3001/');
  //res.sendFile(path.join(__dirname));
});

module.exports = router;
