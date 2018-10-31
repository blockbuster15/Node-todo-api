var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://todoapp:varun@15@ds145573.mlab.com:45573/todoapp'
// };
// mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
