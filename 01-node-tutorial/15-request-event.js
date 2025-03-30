const { createServer } = require("http");

const http = reuire("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome, Dong");
});

server.listen(5001, () => {
  console.log("listening on the port 5001...");
});
