const express = require("express")
const app = require("./app")
const cookieParser = require('cookie-parser')

const dbConnection = require("./configs/dbConnection")
const userRouter = require('./routes/userRouter')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(userRouter)
app.use(cors())
dbConnection()



app.listen(process.env.PORT, () => {
    console.log("server is started");
})