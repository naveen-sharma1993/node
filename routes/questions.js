var express = require("express");
var router = express.Router();
var getMongoCon = require("./shared");

router.post("/insert-que", function (req, res, next) {
  //take the data from req
  var question = req.body.queObj;
  //connect with db

  getMongoCon(res, function (db) {
    var collection = db.collection("questions");
    collection.insertOne(question, function (e, r) {
      if (e) {
        //prepare/send response
        res.send(e);
      } else {
        //prepare/send response
        res.send(r);
      }
    });
  });
});

router.get("/get-que", function (req, res, next) {
  getMongoCon(res, function (db) {
    var collection = db.collection("questions");
    collection.find({}).toArray(function (e, s) {
      if (e) {
        res.send(e);
      } else {
        res.send(s);
      }
    });
  });
});

module.exports = router;
