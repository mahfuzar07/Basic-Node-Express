const fs = require('fs');
const http = require('http');

//varibale server port and hostname
const port = 3030;
const hostname = '127.0.0.1';
//create server
const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
