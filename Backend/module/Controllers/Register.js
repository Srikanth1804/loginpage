let JWT = require("../../model/jwt.model");
let bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  try {
    let { name, email, pwd } = req.body;

    // Check if the user already exists
    let User = await JWT.findOne({ Email: email });

    if (User) {
      return res.json({
        status: false,
        msg: "Email Already Exists",
      });
    }

    // Hash the password
    let Hashedpwd = await bcrypt.hash(pwd, 10);

    // Create a new user
    let NewUser = await JWT.create({
      Name: name,
      Email: email,
      PWD: Hashedpwd,
    });

    return res.json({
      status: true,
      info: NewUser,
      msg: "Registeration Successful!",
    });
  } catch (e) {
    return res.json({
      status: false,
      info: e,
      msg: "Registeration Unsuccessful!",
    });
  }
};
