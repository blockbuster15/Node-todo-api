var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://varun15@:varun@15@ds145563.mlab.com:45563/node_todo_api'
// };
// mongoose.connect(process.env.PORT ? db.localhost : db.mlab);

module.exports = {mongoose};
