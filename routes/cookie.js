var express = require('express');
var router = express.Router();

var setMultipleCookies = function (res) {
  res.cookie("myCookie1", "myValue1", { expires: new Date(Date.now() + 3000) });
}

var logCookie = function(req) {
  console.log(req.headers.cookie);
}

var logCookieValues = function(req) {
  let cookies = parseCookies(req);
  for (let key of Object.keys(cookies)) {
    var cookie = cookies[key];
    console.log(cookie);
  }
}

var parseCookies = function(request) {
  var list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      var parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });
  return list;
}

router.get("/", function (req, res) {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  logCookie(req);
  setMultipleCookies(res);
  res.end("<h1>Check your browser cookies. It should have been set.</h1>");
});

module.exports = router;
