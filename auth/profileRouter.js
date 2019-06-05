const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req) {
    console.log("req", req);
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  console.log("req in get", req);
  res.render("profile", { user: req });
});

module.exports = router;
