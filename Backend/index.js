let Express = require("express");
let Mongoose = require("mongoose");
let App = Express();
let Cors = require("cors");
const JwtRouter = require("./module/jwt.routes");

App.use(Cors());
App.use(Express.json());

Mongoose.connect("mongodb://127.0.0.1:27017/?")
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((e) => {
    console.log("Database Connection Failed!");
  });
//middlewares
App.use("/api", JwtRouter);

App.listen(4000, () => {
  console.log("http://localhost:4000");
});
