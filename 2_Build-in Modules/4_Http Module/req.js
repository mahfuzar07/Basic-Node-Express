const http = require('http');
const port = 3030;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>Node js Server</h1>');
});

server.listen(port, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
