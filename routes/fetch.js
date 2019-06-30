var express = require('express');
var router = express.Router();
var cors = require('cors');
var util = require('../util')

router.options("/delete", cors());

router.get("/", function (req, res) {
  //logCookie(req);
  util.logHeaders(req);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome fetch</h1>");
});

router.post("/post", function (req, res) {
  //logCookie(req);
  //res.json(req.body);
  console.log(req.body);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome POST FETCH</h1>");
});

router.put("/put", function (req, res) {
  //logCookie(req);
  //res.json(req.body);
  console.log("INSIDE PUT");
  console.log(req.body);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome PUT FETCH</h1>");
});

router.delete("/delete", function (req, res) {
  //logCookie(req);
  //res.json(req.body);
  //console.log("INSIDE PUT");
  console.log(req.body);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome DELETE FETCH</h1>");
});

router.head("/fetch/head", function (req, res) {
  console.log("INSIDE HEAD")
  //logCookie(req);
  //res.json(req.body);
  //console.log("INSIDE PUT");
  //console.log(req.body);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome HEAD FETCH</h1>");
});

router.patch("/patch", function (req, res) {
  console.log("INSIDE PATCH")
  //logCookie(req);
  //res.json(req.body);
  //console.log("INSIDE PUT");
  //console.log(req.body);
  //res.cookie("myCookie-OK", "myValue-OK");
  res.send("<h1>Welcome PATCH FETCH</h1>");
});

module.exports = router;
