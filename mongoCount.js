var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2], 10);

mongo.connect(url, function(err, db) {
    if(err) throw err;

    var parrots = db.collection('parrots');

    parrots.count({
        age: { 
            $gt: age
        }}, function(err, count) {
            if(err) throw err;

            console.log(count);

            db.close(function(err) {
                if(err) throw err;
        });
    })
});