var express = require("express");
var router = express.Router();
var TokenService = require("../../twilio/token");

router.post("/token", function(req, res) {
  var deviceId = req.body.device;
  var identity = req.body.identity;

  var token = TokenService.generate(identity, deviceId);

  res.json({
    identity: identity,
    token: token.toJwt()
  });
});

module.exports = router;
