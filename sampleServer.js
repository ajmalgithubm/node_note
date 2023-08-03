const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('sample.html', function (err, data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        })
    }else if(req.url === '/about'){
        res.write("About Page")
        res.end()
    }else{
        res.write("This is Error")
        res.end()
    }
}).listen(3000, () => {
    console.log("Server is Running...")
})