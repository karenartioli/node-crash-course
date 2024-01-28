// Write an http server which console logs the request.url whenever it gets a request.  No need to send a response for now.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
  });
  
  // localhost is the default value for 2nd argument
  server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });