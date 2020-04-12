const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const insertD = require('./interns');
const findInterns = require('./findInterns');
const updateMovie = require('./updateInterns');

const url = 'mongodb://localhost:27017';

const dbName = 'movies';

const client = new MongoClient(url, { useUnifiedTopology: true });


client.connect(function (error) {
    const db = client.db(dbName);
    // const collection = db.collection('myMovies');
    assert.equal(null, error);

    // db.dropCollection('myMovies', error => {
    //     assert.equal(null, error);
    //     client.close();
    // });

    insertD(db, 'myMovies', function (docs) {
        assert.equal(null, error);
        // console.log('Result of Insertion: ', docs);
        findInterns(db, 'myMovies', () => {
            updateMovie(db, 'myMovies',  (result, updatedValue) => {
                db.dropCollection('myMovies', error => {
                    assert.equal(null, error);
                    client.close();
                });
            });
        });
    });
});

 // findInterns(db, 'myMovies', function () {
        //     assert.equal(null, error);
        //     // console.log(firstDocument);
        //     // console.log(topRating);
        //     console.log(titleName);
        //     updateMovie(db, 'myMovies', function (result, updatedValue) {
        //         assert.equal(null, error);
        //         console.log('Updated Movie: ', result, updatedValue);
        //         db.dropCollection('myMovies', error => {
        //             assert.equal(null, error);
        //             console.log('droped');
        //             client.close();
        //         });
        //     });
        // });