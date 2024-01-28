// Write an http server which sends a random number between 1 and 6 in the body of the HTTP response every time it gets a request.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    let randomDieRoll = () => {
        return 1 + Math.floor((Math.random() * 6))
    };
    res.write(randomDieRoll().toString());
    res.end();
});

// localhost is the default value for the 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});