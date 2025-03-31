const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "dong") {
    req.user = { name: "dong", id: 3 };
    console.log(req.user);

    next();
  } else {
    res.status(401).send("Unauthorised");
    next();
  }
};

module.exports = authorize;
