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

  // db.collection('Todos').find({
  //   // _id: new ObjectID('599cbb28e8f4bbb04c806a96')
  //   // completed: false
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({
  //   // _id: new ObjectID('599cbb28e8f4bbb04c806a96')
  //   // completed: false
  // }).count().then((count) => {
  //   console.log('Todos Count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'John'}).toArray().then((docs) => {
    console.log('John\'s todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch john\' todos');
  });

  // db.close();
});
