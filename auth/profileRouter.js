const router = require("express").Router();
// const db = require("../database/dbConfig");

const authCheck = (req, res, next) => {
  //   const user = db("users");
  if (!req) {
    console.log("Is user here?:", req);

    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  //   console.log("from get", req.session.user);
  // const user = db('users');
  res.render("profile", { users: req });
});

module.exports = router;
