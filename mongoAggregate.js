/**
 * Next up is aggregation. Aggregation allows one to do things like
 * calculate the sum of a field of multiple documents or the average
 * of a field of documents meeting particular criteria.
 */
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2];

mongo.connect(url, function(err, db) {
    if(err) throw err;

    var prices = db.collection('prices');

    prices.aggregate([
        { $match: { size: size }}
        ,
        { $group: { 
            _id: 'average'
        , average: {
            $avg: '$price'
            }
        }
        }
    ]).toArray(function(err, results) {
            if(err) throw err;
            var val = Number(results[0].average).toFixed(2);
            console.log(val);

            db.close(function(err) {
                if(err) throw err;
        });
    })
});