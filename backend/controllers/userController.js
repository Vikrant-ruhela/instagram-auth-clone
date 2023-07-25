const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function home(req, res) {
    const id = req.user;

    try {
        const userData = await UserModel.findOne({ id });
        res.status(200).send({
            msg: "Success",
            data: userData
        })

    }
    catch (err) {
        res.status(501).send({ msg: err.message })
    }
}

async function signup(req, res) {
    const { name, username, email, password, bio } = req.body

    try {
        //password length must be more than 8
        if (password.length < 8) {
            throw new Error("Weak password")
        }

        //check if user already exists
        const userexists = await userModel.findOne({ email: email })

        const userExists = await userModel.findOne({ username: username })

        if (userExists && userexists) {
            throw new Error("user already exists..")
        }

        // save password with hashing 
        const hashPassword = bcrypt.hashSync(password, 11)

        const user = await userModel.create({
            name: name,
            username: username,
            email: email,
            password: hashPassword,
            bio: bio
        })
        await user.save()
        res.status(201).json({
            message: "success",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

async function login(req, res) {
    const { username, password } = req.body

    try {
        //check if it is already registered or not
        const user = await userModel.findOne({ username: username }).select('password')

        if (!user) {
            throw new Error("user doesn't exist")
        }

        //verify it's password
        const verifyPass = await bcrypt.compare(password, user.password)
        if (!verifyPass) {
            throw new Error("Password does't match")
        }

        //jwt token gen and send in cookie
        const token = await jwt.sign({ id: user._id }, process.env.SECRET)

        res.cookie('token', token, { httpOnly: true }).status(200).json({
            data: user,
            message: 'success'
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


module.exports = { home, signup, login }