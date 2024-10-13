let JWT = require("../../model/jwt.model");
let nodemailer = require("nodemailer");
let jwt = require("jsonwebtoken");
module.exports = async (req, res) => {
  let { email } = req.body;
  console.log(email);

  let User = await JWT.findOne({ Email: email });

  let id = User._id;
  console.log(id);

  if (!User) {
    return res.json({
      status: false,
      msg: "User not found!",
    });
  }

  let Token = jwt.sign({ email: User.Email }, "secret-key", {
    expiresIn: "1h",
  });

  if (!Token) {
    return res.json({
      status: false,
      msg: "Missing Token",
    });
  }

  let Resetlink = `http://localhost:5173/reset-password/${id}/${Token}`;
  console.log(Resetlink);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "p.srikanthsri4567@gmail.com",
      pass: "gzmi pavl fnkg sasr",
    },
  });

  var mailOptions = {
    from: "p.srikanthsri4567@gmail.com",
    to: email,
    subject: "Reset Password",
    text: `Please click the following link to reset your password: ${Resetlink}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res.json({
        status: true,
        msg: "Reset password link has been sent to your email",
      });
    }
  });
};
