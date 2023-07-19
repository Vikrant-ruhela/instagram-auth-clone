const express = require('express')
const home = require("../controllers/userController")

const userRouter = express.Router()

userRouter.get('/', home)

module.exports = userRouter