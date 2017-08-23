// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //Creating an objectid manually
// var obj = new ObjectID();
// console.log(obj);

// //Object destructuring
// var user = {name: 'john', age: 10};
// var {name} = user;
// console.log(name); //Should print out 'john'

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error connecting to database server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('599cd9e89b780bcb705acb89')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('599cbbd159ce59a1d0b6982e')
  }, {
    $set: {
      name: '7amada'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
