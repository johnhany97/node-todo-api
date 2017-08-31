const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todo_id = '69a7ebef89fbe73f184304a011';
var user_id = '599f760330ebb94b0467e01a';

// if (!ObjectId.isValid(todo_id)) {
//   console.log('Invalid id');
// }
// Todo.find({
//   _id: todo_id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: todo_id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(todo_id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo id not found');
//   }
//   console.log('Todo: :', todo);
// }).catch((e) => console.log(e));

if (!ObjectId.isValid(user_id)) {
  console.log('Invalid id');
}

User.findById(user_id).then((user) => {
  if (!user) {
    return console.log('User id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));
