const express = require('express')
const { home, signup, login } = require("../controllers/userController")
const signupDataValidate = require("../middlewares/signupDataValidate")
const loginDataValidate = require("../middlewares/loginDataValidate")


const userRouter = express.Router()

userRouter.get('/', home)
userRouter.post("/signup", signupDataValidate, signup)
userRouter.post("/login", loginDataValidate, login)


module.exports = userRouter