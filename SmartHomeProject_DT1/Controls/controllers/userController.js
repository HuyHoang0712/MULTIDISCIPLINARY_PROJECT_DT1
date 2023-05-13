const User = require("../models/userModel");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Login and get User Information
exports.user_login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({username: username});
    if (user === null) {
        res.status(404).send({"message": "Username not found!"})
    }
    else {
        if (password !== user.password) {
            res.status(404).send({"message": "Username or Password is not correct!"})
        }
        else {
            res.status(200).send(user)
        }
    }
})