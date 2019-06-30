var express = require('express');
var router = express.Router();
const formidable = require('formidable')
var util = require('../util')

router.use('/', (req, res) => {
  new formidable.IncomingForm().parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field)
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file)
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
    })
    .on('fileBegin', (name, file) => {
      file.path = __dirname + '/../upload/' + file.name
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
    })
    .on('end', () => {
      res.send("Files uploaded.");
      res.end()
    })
})

let uploadFilename = 0;
router.use("/raw", function (req, res) {
  console.log("Old filename was :" + uploadFilename);
  uploadFilename++;
  console.log("New filename is :" + uploadFilename);
  req.on("data", function (data) {
    //util.delay(200);
    fs.appendFileSync(`upload/${uploadFilename}.jpg`, data);
  });
  req.on("end", () => {
    res.send("File uploaded.");
    console.log("File uploaded and client was notified.");
  });
});

module.exports = router;
