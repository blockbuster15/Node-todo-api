var env = process.env.NODE_ENV || 'development';
// process.env.MONGODB_URI = 'mongodb://todoapi:nodetodoapi1@ds039351.mlab.com:39351/todo_api';

if (env === 'development' || env === 'test') {
   var config = require('./config.json');
   var envConfig = config[env];

  (Object.keys(envConfig)).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
