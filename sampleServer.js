const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('sample.html', function(err, data){
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3000)