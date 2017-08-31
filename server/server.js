var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST /todos
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
      code: 'asdf'
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todos) => {
    if (!todos) {
      return res.status(404).send();
    }
    res.send({todos});
  }).catch((err) => res.status(400).send());
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((err) => res.status(400).send());
});

// PATCH /todos
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']); //Pick only the things a user cam update

    //Verify id
    if (!ObjectId.isValid(id)) {
      return res.status(404).send();
    }

    //Check completed value and set completedAt
    if (_.isBoolean(body.completed) && body.completed) {
      //Is boolean and is true
      body.completedAt = new Date().getTime();
    } else {
      //Not a boolean or it's not true
      body.completed = false;
      body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((err) => {
      res.status(400).send();
    })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
