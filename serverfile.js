

const app ={}

//dependencies
const http = require('http');

const fs = require('fs');

app.server = http.createServer(function (req, res) {
  if(req.url === '/'){
    res.write('Hello World');
    res.end();
  }else if(req.url === '/about'){
    fs.appendFile('about.txt', 'This is the about page', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
        res.write('About Page');
    
    res.end();
}
    else if(req.url === '/contact' && req.method === 'POST'){
        res.write('Contact Page');
        res.end();
    }
});

app.server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});





