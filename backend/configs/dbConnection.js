const mongoose = require('mongoose')

const dbConnection = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    } catch (error) {
        console.log("error in connection of db", error.message)
    }
}

module.exports = dbConnection