const assert = require('assert');

const findAll7StarMovies = (db, collection, callback) => {
    const coll = db.collection(collection);
//    coll.find({}).toArray((error, docs) => {
//         assert.equal(error, null);
//         const firstDocument = docs[0];
//         const topRating = docs.filter(doc => doc.rating === 7);
//         callback(firstDocument, topRating);  
//     });

    // Second Approach
    coll.findOne({}, (error, result) => {
        assert.equal(error, null);
        console.log('First Document: ', result);
        return result;
    });

    coll.find({ rating: 7 }).toArray((error, result) => {
        assert.equal(error, null);
        console.log('Top Rating: ', result);
        return result;
    });

    coll.find({}, { projection: { _id: 0, movie: 1 } }).toArray((error, result) => {
        assert.equal(error, null);
        console.log('Name: ', result);
        return result;
    });
};

module.exports = findAll7StarMovies;