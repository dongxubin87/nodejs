require("dotenv").config();
require("express-async-errors");
const errorMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const express = require("express");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const app = express();

// middlemare
app.use(express.json());

//  roots
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/ap/v1/products'>products route</a>");
});
app.use("/api/v1/products", productsRouter);
// products
app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
