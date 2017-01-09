var mongo = require('mongodb').MongoClient;
var _db= process.argv[2];
var _collection = process.argv[3];
var _id = process.argv[4];
var url = 'mongodb://localhost:27017/' + _db;

mongo.connect(url, function(err, db) {
    if(err) throw err;

    var collection = db.collection(_collection);

    collection.remove({
        _id: _id
    }, function(err, data) {
        if(err) throw err;
         db.close(function(err) {
             if(err) throw err;
        });
    })
});