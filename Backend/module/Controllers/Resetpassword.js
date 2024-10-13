let JWT = require("../../model/jwt.model");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  let { pwd } = req.body;
  let { id, token } = req.params;

  // Verify the JWT token
  jwt.verify(token, "secret-key", async (err, decoded) => {
    if (err) {
      return res.json({
        status: false,
        msg: "Invalid Token",
      });
    }

    // If token is valid, hash the password
    let Hashedpwd = await bcrypt.hash(pwd, 10);

    // Update the password in the database
    await JWT.findOneAndUpdate({ _id: id }, { PWD: Hashedpwd })
      .then((data) => {
        res.json({
          status: true,
          info: data,
          msg: "Password Updated Successfully!",
        });
      })
      .catch((e) => {
        res.json({
          status: false,
          msg: "Failed to Update!",
        });
      });
  });
};
