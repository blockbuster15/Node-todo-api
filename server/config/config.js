var env = process.env.NODE_ENV || 'development';
// process.env.MONGODB_URI = 'mongodb://todoapp:varun@15@ds145573.mlab.com:45573/todoapp';

if (env === 'development' || env === 'test') {
   var config = require('./config.json');
   var envConfig = config[env];

  (Object.keys(envConfig)).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
