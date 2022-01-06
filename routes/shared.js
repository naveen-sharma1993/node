var mongo = require("mongodb");

function getMongoCon(res, cb) {
  //var url = "mongodb://localhost:27017";
  var url =
    "mongodb+srv://nav:nav@cluster0.hloou.mongodb.net/onlinetest?retryWrites=true&w=majority";

  var mongoClient = mongo.MongoClient;

  mongoClient.connect(url, function (err, server) {
    if (err) {
      //prepare / send response to client
      res.send("db conn error");
    } else {
      //perform some operation
      var db = server.db("onlinetest");
      cb(db);
    }
  });
}

module.exports = getMongoCon;
