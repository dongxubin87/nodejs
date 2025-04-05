const Product = require("../models/product");

const getAllPoductsStatic = async (req, res) => {
  const products = await Product.find({})
    .sort("name price")
    .select("name price")
    .limit(4)
    .skip(2)
    .gt("price", 100);

  res.status(200).json({ products, nbHits: products.length });
};
const getAllPoducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFields) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /(<=|>=|<|>|=)/g;
    let filters = numericFields.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters.split(",").forEach((item) => {
      const [field, oprator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [oprator]: Number(value) };
      }
    });
    console.log(filters);
  }
  console.log(queryObject);
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
    console.log(sort);
  } else {
    result = result.sort("createAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  const products = await result;

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllPoductsStatic, getAllPoducts };
