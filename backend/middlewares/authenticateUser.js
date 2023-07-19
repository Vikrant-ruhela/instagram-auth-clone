const jwt = require('jsonwebtoken')

const authenticateUser = async function (req, res, next) {
    try {
        const token = req.cookie
        console.log(token);
        if (!token) {
            throw new Error("token is absent")
        }
        const payload = jwt.verify(token, process.env.SECRET)
        req.user = payload.id
        next()
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error.message
        })
    }

}

module.exports = authenticateUser