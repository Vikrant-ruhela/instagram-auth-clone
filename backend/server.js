const express = require("express")
const app = require("./app")
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors({ origin: "http://127.0.0.1:5501", credentials: true }));

const dbConnection = require("./configs/dbConnection")
const userRouter = require('./routes/userRouter')




app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(cookieParser())

app.use("/", userRouter)
dbConnection()



app.listen(process.env.PORT, () => {
    console.log("server is started");
})