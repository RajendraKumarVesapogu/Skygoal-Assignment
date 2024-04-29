const express = require("express");
const {login,register, getUser} = require("../controllers/auth-controller");
const userRouter = express.Router();


userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/", getUser);

module.exports = userRouter;
