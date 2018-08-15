const http = require('http');
const fs = require('fs');

http
    .createServer ((request, response) => {
        const index = fs.readFileSync('./index.html');
        response.end(index);
        if (fs.readFileSync(`.${request.url}`)) {
            const file = fs.readFileSync(`.${request.url}`);
            response.end(file);
        }
    })
    .listen(3000, err => {
    console.log('server started http://localhost:3000')
    });