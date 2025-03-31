const express = require("express");
const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

let { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status("200").send(`Welcome ${name}`);
  }
  res.status("401").send("please enter a name");
});

app.listen(5001, () => {
  console.log("listening on 5001...");
});
