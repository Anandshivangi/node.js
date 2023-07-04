const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/Home') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const modifiedContent = data.replace('<%= name %>', 'John Doe');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedContent);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
