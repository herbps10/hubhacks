var mongojs = require('mongojs');
var fs = require('fs');
var parse = require('csv-parse');

var db = mongojs.connect("hubhacks");
var hubway = db.collection("hubway");

var parser = parse({ delimiter: ',' });

parser.on('readable', function() {
  while(record = parser.read()) {
    if(record[0] == 'seq_id') { continue; }

    if(record[9] == 'Registered') {
			hubway.insert({
				duration: parseInt(record[3]),
				strt_statn: parseInt(record[5]),
				end_statn: parseInt(record[7])
			});
		}
  }
});

parser.on('finish', function() {
  console.log("Finished");
});

var input = fs.createReadStream("./hubway_trips.csv");

input.pipe(parser);
console.log("here");
