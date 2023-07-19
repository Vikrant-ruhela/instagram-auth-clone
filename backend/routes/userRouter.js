const express = require('express')
const { home, signup, login } = require("../controllers/userController")
const signupDataValidate = require("../middlewares/signupDataValidate")
const loginDataValidate = require("../middlewares/loginDataValidate")
const authenticateUser = require("../middlewares/authenticateUser")



const userRouter = express.Router()

userRouter.get('/', authenticateUser, home)
userRouter.get("/signup", (req, res) => {
    res.sendFile(__dirname + "../../frontend/instagramSignup.html")
})
userRouter.post("/signup", signupDataValidate, signup)
userRouter.post("/login", loginDataValidate, login)



module.exports = userRouter