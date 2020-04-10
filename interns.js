const assert = require('assert');
const insertDocuments = (db, collection, cb) => {
    const coll = db.collection(collection);
    coll.insertMany([
        { movie: 'The Banker', year: '2020', rating: 7 },
        { movie: 'Bad Boys', year: '2020', rating: 7 },
        { movie: 'The Hunt', year: '2020', rating: 7 },
        { movie: 'Bloodshot', year: '2020', rating: 7.5 },
        { movie: 'First', year: '2020', rating: 6.5 }
    ], (error, movies) => {
        assert.equal(error, null);
        cb(movies.ops);
    })
}


module.exports = insertDocuments;