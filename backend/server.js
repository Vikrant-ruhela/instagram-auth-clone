const express = require("express")

const app = require("./app")
const dbConnection = require("./configs/dbConnection")
const userRouter = require('./routes/userRouter')


dbConnection()

app.use(userRouter)


app.listen(process.env.PORT, () => {
    console.log("server is started");
})