const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((req, res) => {
    const q = url.parse(req.url,true)
    if(q.pathname === '/'){
        fs.readFile('form.html', (err, data) => {
            res.write(data);
            res.end()
        })
    }else if(q.pathname === '/profile'){
        res.write(`<h1>Welcome ${q.query.fname} ${q.query.lname}</h1>`)
        res.end()
    }
    else{
        res.write("<h1>Error</h1>");
        res.end()
    }
}).listen(3000, () => {
    console.log("Server is Running...")
})