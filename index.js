const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const insertD = require('./interns');
const findInterns = require('./findInterns');
const updateMovie = require('./updateInterns');

const url = 'mongodb://localhost:27017';

const dbName = 'movies';

const client = new MongoClient(url, { useUnifiedTopology: true });

// const { findFirstDoc, findAll7StarMovies } = findInterns;


client.connect(function (err) {
    const db = client.db(dbName);
    const collection = db.collection('myMovies');
    assert.equal(null, err)

    insertD(db, 'myMovies', function (docs) {
        assert.equal(err, null);
        // console.log('Result of Insertion: ', docs);
        // findInterns(db,'myMovies', function(doc) {
        //     assert.equal(null, err);
        //     console.log(doc);
        updateMovie(db, 'myMovies', function (result, updatedValue) {
            assert.equal(null, err);
            console.log('Updated Movie: ', result, updatedValue);
            db.dropCollection('myMovies', err => {
                // console.log('droped');
                client.close();
            });
        })
           
        // });
    });
});