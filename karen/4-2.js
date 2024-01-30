// Write an http server which sends an HTTP response containing “hello world” every time it gets a request.

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader('Content-Type', 'text/html');
  res.write('<p>hello world<p>');
  res.end();
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});