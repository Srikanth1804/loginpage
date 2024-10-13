let jwt = require("jsonwebtoken");

let VerifyToken = (req, res, next) => {
  let Header = req.headers.authorization;

  if (!Header) {
    return res.json({
      status: false,
      msg: "Missing Token!",
    });
  }

  let Token = Header.split(" ")[1];

  if (!Token) {
    return res.json({
      status: false,
      msg: "Invalid Authorization Header!",
    });
  }

  jwt.verify(Token, "secret-key", (err, decoded) => {
    if (err) {
      return res.json({
        status: false,
        msg: "Invalid Token!",
      });
    }

    next();
  });
};

module.exports = VerifyToken;
