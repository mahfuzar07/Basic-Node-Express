const http = require('http');
const port = 3030;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.end('Node js Server');
});

server.listen(port, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
