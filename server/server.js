const http = require('http');
const connectToPSQL = require('./dbConnection.js');
const router = require('./router');

function startServer(dbClientPool) {
  // server constructor
  const server = http.createServer(router);

  return new Promise((resolve, reject) => {
    server.listen(9000, err => {
      if (err) return reject(err);
      console.log('server listening');
      return resolve(server);
    });
  });
}

connectToPSQL()
  .then(startServer)
  .catch(err => console.log('An error occured: ', err));


module.exports = startServer;
