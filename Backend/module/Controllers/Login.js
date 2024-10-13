let JWT = require("../../model/jwt.model");
let bcrypt = require("bcryptjs");
let Token = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    let { email, pwd } = req.body;

    // Find user by email
    let User = await JWT.findOne({ Email: email });

    if (!User) {
      return res.json({
        status: false,
        msg: "User not found!",
      });
    }

    // Compare the password
    let Ismatch = await bcrypt.compare(pwd, User.PWD);

    if (!Ismatch) {
      return res.json({
        status: false,
        msg: "Incorrect Password",
      });
    }

    // Generate JWT token
    let TokenGenerator = Token.sign({ Email: email }, "secret-key", {
      expiresIn: "1d",
    });

    return res.json({
      status: true,
      msg: "Login successful",
      token: TokenGenerator,
    });
  } catch (e) {
    return res.json({
      status: false,
      msg: "An error occurred during login",
      error: e.message,
    });
  }
};
