const assert = require('assert');

const movies = [
    { movie: 'The Banker', year: '2020', rating: 7 },
    { movie: 'Bad Boys', year: '2020', rating: 7 },
    { movie: 'The Hunt', year: '2020', rating: 7 },
    { movie: 'Bloodshot', year: '2020', rating: 7.5 },
    { movie: 'First', year: '2020', rating: 6.5 }
];
const insertDocuments = (db, collection, callback) => {
    const coll1 = db.collection('interns');

    coll1.insertOne({ "name": "Tolufolorunso" }, (error) => {
        assert.equal(error, null);
        // console.log('interns collection created');
    });
    
    db.collection('myMovies');

    const coll = db.collection(collection);
    coll.insertMany(movies, (error, movies) => {
        assert.equal(error, null);
        callback(movies.ops);
    })
}


module.exports = insertDocuments;