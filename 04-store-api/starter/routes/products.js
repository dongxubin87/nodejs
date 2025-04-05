const express = require("express");
const router = express.Router();
const {
  getAllPoductsStatic,
  getAllPoducts,
} = require("../controllers/products");

router.route("/").get(getAllPoducts);
router.route("/static").get(getAllPoductsStatic);
module.exports = router;
