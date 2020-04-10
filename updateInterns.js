const assert = require('assert');

const updateMovie = (db, collection, cb) => {
    const coll = db.collection(collection);
    const updatedValue = { 
        movie: 'Money Heist', 
        year: '2019', 
        rating: 9 
    }
    coll.updateOne({ movie: 'The Banker' }, { $set: updatedValue }, null, (error, result) => {
        assert.equal(error, null);
        cb(result.result, updatedValue)
    });
};

module.exports = updateMovie;