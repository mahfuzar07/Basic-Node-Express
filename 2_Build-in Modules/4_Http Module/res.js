const http = require('http');
const port = 3030;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.writeHead(202, { 'Content-Type': 'text/html' }); //plain text for text/plain
  res.write('<h1>Node js Server</h1>');
  res.end();
});

server.listen(port, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
