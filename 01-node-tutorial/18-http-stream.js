const http = require("http");

const fs = require("fs");

http
  .createServer((req, res) => {
    const text = fs.readFileSync("./content/big.txt", "utf8");
    res.end(text);
    // in chuncks
    // const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    // fileStream.on("open", () => {
    //   fileStream.pipe(res);
    // });
    // fileStream.on("error", (err) => {
    //   res.end(err);
    // });
  })
  .listen(5001, () => {
    console.log("listening port on: 5001..");
  });
