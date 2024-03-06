const express = require("express");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const connection = require("./config/db.js");
const userRouter = require("./routes/user.route.js");
const productRouter = require('./routes/product.route.js')
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());

connection();
app.use("/api/v1", userRouter);
app.use('/api/v1',productRouter)
app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;
