const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        id: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        phone: {
            type: String,
            require: false,
        },
        email: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: false,
        }
    },
    {
        timestamps: true
    }
);


const User = mongoose.model('User', userSchema);

module.exports = User;