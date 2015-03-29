var fs = require('fs');
var mongojs = require('mongojs');
var express = require('express');
var path = require('path');

var db = mongojs.connect("hubhacks");
var hubway = db.collection('hubway');

var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/hubway-routes.json', function(req, res) {
  hubway.find().limit(5, function(err, rows) {
    res.json(rows);
  });
});

app.get('/hubway-density.json', function(req, res) {
  var start = parseInt(req.query.start);
  var end = parseInt(req.query.end);

  hubway.find({ strt_statn: start, end_statn: end }, function(err, rows) {
    res.json(rows.map(function(row) {
      return row.duration / 60;
    }));
  });
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(80, function() {
  console.log("Listening on port 80");
});
