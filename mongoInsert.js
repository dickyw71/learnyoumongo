/**
 * You should connect to the database named learnyoumongo and insert
 * a document into the docs collection.
 */

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect(url, function(err, db) {
    if(err) throw err;

    var docs = db.collection('docs');

    myDoc = {
        firstName: firstName,
        lastName: lastName      
    };

    docs.insert(myDoc, function(err, data) {
            if(err) throw err;

            console.log(JSON.stringify(myDoc));

            db.close(function(err) {
                if(err) throw err;
        });
    })
});