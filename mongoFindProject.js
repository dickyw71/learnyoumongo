/** 
* Use the parrots collection to find all documents where age
* is greater than the first argument passed to your script.
* The difference from the last lesson will be that we only want the
* name and age properties.
*/

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2], 10);

mongo.connect(url, function(err, db) {
    if(err) throw err;

    var parrots = db.collection('parrots');

    parrots.find({
        age: { 
            $gt: age
        }}, {
         name: 1
        , age: 1
        , _id: 0       
        }).toArray(function(err, docs) {
            if(err) throw err;

            console.log(docs);

            db.close(function(err) {
                if(err) throw err;
        });
    })
});