const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({//can't be empty})

Todo.remove({}).then((result) => {
  console.log(result); //We get a number of how many were removed
});

Todo.findOneAndRemove({_id: 'some id'}).then((todo) => {
  console.log(todo); //We get back the deleted doc.
});

Todo.findByIdAndRemove('some id').then((todo) => {
  console.log('Deleted todo:', todo);
});
