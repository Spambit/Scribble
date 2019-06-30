var express = require('express');
var router = express.Router();
var util = require('../util')

router.get("/:filename", (req, res) => {
  console.log(req.headers);
  let fileName = req.params.filename;
  console.log(JSON.stringify(req.headers));
  util.delay(5000);
  res.sendFile(path.join(__dirname, "download", fileName));
});

module.exports = router;
