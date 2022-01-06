var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

router.get("/my-test", function (a, b) {
  //get data from request
  //do conn with database
  //do some operation
  //prepare ans send res back to client
  b.send("hi sachin");
});

router.get("/query", function (req, res, next) {
  //get data from request
  var nm = req.query.name;
  var l = req.query.loc;
  //do conn with database
  //do some operation
  //prepare ans send res back to client
  res.send(`Hi this is ${nm} I am from ${l}`);
});

router.get("/path-params/:name/:loc", function (req, res, next) {
  //get data from request
  var nm = req.params.name;
  var l = req.params.loc;
  //do conn with database
  //do some operation
  //prepare ans send res back to client
  res.send(`Hi this is ${nm} I am from ${l}`);
});

router.get("/my-headers", function (req, res, next) {
  var nm = req.headers.name;
  var l = req.headers.loc;
  //do conn with database
  //do some operation
  //prepare ans send res back to client
  res.send(`Hi this is ${nm} I am from ${l}`);
});

router.post("/my-req-body", function (req, res, next) {
  var nm = req.body.name;
  var l = req.body.loc;
  //do conn with database
  //do some operation
  //prepare ans send res back to client
  res.send(`Hi this is ${nm} I am from ${l}`);
});

module.exports = router;
