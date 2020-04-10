const assert = require('assert');

const findAll7StarMovies = (db, collection, cb) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((error, docs) => {
        assert.equal(error, null);
        cb(docs);  
    });
};

module.exports = findAll7StarMovies;