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

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch', completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log('Deleted: ', doc);
  // });
  // db.close();
});
