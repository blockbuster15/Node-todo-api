// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server.');
  }
  console.log('Connected to MongoDB Server.');
const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5bbc86cb4cc39132e43b0728')
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5bbba93596189729c0ce4716')
},{
  $set: {
    name: 'Vipul Chikara'
  },
  $inc: {
    age: 1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // client.close();
});
