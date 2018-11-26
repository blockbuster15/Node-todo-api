var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://todoapi:nodetodoapi1@ds039351.mlab.com:39351/todo_api'
// };
// mongoose.connect(process.env.PORT ? db.mlab : db.localhost);
// >>>>>>> 05b98d90b17135a5433fcc649aa6a28f2915c30a

module.exports = {mongoose};
