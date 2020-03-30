const assert = require('assert');
const insertDocuments = (db, callback) => {
    const collection = db.collection('interns');
    collection.insertOne({"name": "Tolufolorunso"}, (error) => {
        assert.equal(error, null);
        console.log('interns collection created');
    })
}

module.exports = insertDocuments;