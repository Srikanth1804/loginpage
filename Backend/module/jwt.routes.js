let Express = require("express");
const Register = require("./Controllers/Register");
const Login = require("./Controllers/Login");
const VerifyToken = require("../middleware/VerifyToken");
const Forgotpassword = require("./Controllers/Forgotpassword");
const Resetpassword = require("./Controllers/Resetpassword");

let JwtRouter = Express.Router();

JwtRouter.post("/register", Register);
JwtRouter.post("/login", Login);

JwtRouter.post("/forgot-password", Forgotpassword);

JwtRouter.put("/reset-password/:id/:token", Resetpassword);

module.exports = JwtRouter;
