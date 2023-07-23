const express = require("express")
const app = require("./app")
const cors = require('cors')
const cookieParser = require('cookie-parser')

const dbConnection = require("./configs/dbConnection")
const userRouter = require('./routes/userRouter')
app.use(cors({
    origin: '*',
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(userRouter)
dbConnection()



app.listen(process.env.PORT, () => {
    console.log("server is started");
})