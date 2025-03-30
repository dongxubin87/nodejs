const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");
// default 64kb
// last buffer = remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt",{highaterMark: 90000})
// const stream = createReadStream("./content/big.txt",{encoding: 'utf8'})

stream.on("data", (result) => {
  console.log(result);
});
