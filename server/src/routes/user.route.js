const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller.js");
const { isAuthenticatedUser } = require("../middlewares/isAuthenticate.js");
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout",  logoutUser);

module.exports = userRouter;
