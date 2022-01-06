var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var getMongoCon = require("./shared");

router.get("/get-result/:uid", function (req, res) {
  var uid = req.params.uid;
  getMongoCon(res, function (db) {
    var collection = db.collection("results");
    collection.find({ name: uid }).toArray(function (e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r);
      }
    });
  });
});

router.post("/save-result", function (req, res) {
  var resultObj = req.body.resultObj;
  getMongoCon(res, function (db) {
    var collection = db.collection("results");
    collection.insertOne(resultObj, function (e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r);
      }
    });
  });
});

module.exports = router;
