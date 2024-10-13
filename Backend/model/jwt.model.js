let Mongoose = require("mongoose");

let JwtSchema = new Mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  PWD: {
    type: String,
  },
});

let JWT = Mongoose.model("LoginData", JwtSchema);

module.exports = JWT;
