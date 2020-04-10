const assert = require('assert');

const findAll7StarMovies = (db, collection, cb) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((error, docs) => {
        assert.equal(error, null);
        const firstDocument = docs[0];
        const topRating = docs.filter(doc => doc.rating >= 7);
        const titleName = docs.map(doc => doc.movie).join(' ');
        cb(firstDocument, topRating, titleName);  
    });
};

module.exports = findAll7StarMovies;