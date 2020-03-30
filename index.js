const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const insertD = require('./internsdb')

const url = 'mongodb://localhost:27017';

const dbName = 'mydb';

const client = new MongoClient(url, { useUnifiedTopology: true });


client.connect(function (err) {
    assert.equal(null, err)
    console.log('Database created by Tolufolorunso');

    const db = client.db(dbName)
    insertD(db, function() {
        client.close()
    })
})