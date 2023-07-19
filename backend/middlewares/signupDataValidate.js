function signupDataValidate(req, res, next) {
    console.log(req.body);
    const { name, username, email, password, bio } = req.body
    if (name && username && email && password && bio) {
        next()
    }
    else {
        res.status(400).json({
            success: false,
            message: "Incomplete data"
        })
    }

}

module.exports = signupDataValidate