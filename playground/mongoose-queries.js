const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5bbe1e06148a64169ceafd52'

// var id = '5bc06cd145b8ec132c8a9e7511'

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Uer not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));