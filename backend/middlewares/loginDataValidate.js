function loginDataValidate(req, res, next) {
    const { username, password } = req.body
    if (username && password) {
        next()
    } else {
        res.status(400).json({
            success: false,
            message: "Incomplete data"
        })
    }

}

module.exports = loginDataValidate