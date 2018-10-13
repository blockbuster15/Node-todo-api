const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5bc0eba6705a3979bac0caa3'}).then((todo) => {
    console.log(todo);
    
})

// Todo.findByIdAndRemove('5bc0eb5b705a3979bac0ca72').then((todo) => {
//     console.log(todo);
//     });