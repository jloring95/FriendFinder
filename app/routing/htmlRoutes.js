var path = require("path");
var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Export HTML routes for server.js to use.
module.exports = router;