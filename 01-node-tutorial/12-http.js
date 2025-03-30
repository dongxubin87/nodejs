const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page! ");
  }

  if (req.url === "/about") {
    return res.end("Welcome to about! ");
  }

  // Default response for unknown routes
  //res.writeHead(404, { "Content-Type": "text/html" }); // Set response type
  res.end(`
    <h1>Oops</h1>
    <p>Page not found!</p>
    <a href="/">Go to Home</a>
  `);
});

server.listen(5001, () => {
  console.log("Server running on port 5001...");
});
