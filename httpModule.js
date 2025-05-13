const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(' <div><form action="http://localhost:3000" method="POST"><input type="text" name="name" placeholder="Enter your name"><input type="submit" value="Submit"></form></div>');
    res.end();
});

//html form

server.listen(3000)