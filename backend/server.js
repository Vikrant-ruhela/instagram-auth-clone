const express = require("express")

const app = require("./app")
const dbConnection = require("./configs/dbConnection")
const userRouter = require('./routes/userRouter')
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.use(cors())
dbConnection()
app.use(cookieParser())


app.listen(process.env.PORT, () => {
    console.log("server is started");
})