const {MongoClient} = require('mongodb');
// const {MongoClient} = require('mongodb').MongoClient // this is also a way to destructure

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-com'


async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = collection.find({}).toArray();
    console.log(response);
}

getData()