var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var getMongoCon = require("./shared");

router.post("/reg", function (req, res, next) {
  //take the data from req
  var uid = req.body.uid;
  var pwd = req.body.pwd;
  var phone = req.body.phone;
  var email = req.body.email;

  //var data={uid:uid,pwd:pwd,phone:phone,email:email}
  var data = { uid, pwd, phone, email };

  //conn with db
  getMongoCon(res, function (db) {
    var collection = db.collection("users");
    collection.insertOne(data, function (e, s) {
      if (e) {
        //prepare/send response
        res.send(e);
      } else {
        //prepare/send response
        res.send(s);
      }
    });
  });
});

router.get("/login/:uid", function (req, res, next) {
  var u = req.params.uid;
  var p = req.query.pwd;
  getMongoCon(res, function (db) {
    var collection = db.collection("users");
    collection.find({ uid: u, pwd: p }).toArray(function (e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r);
      }
    });
  });
});

router.get("/check-uid/:uid", function (req, res, next) {
  var u = req.params.uid;
  getMongoCon(res, function (db) {
    var collection = db.collection("users");
    collection.find({ uid: u }).toArray(function (e, r) {
      if (e) {
        res.send(e);
      } else {
        res.send(r.length.toString());
      }
    });
  });
});

module.exports = router;
