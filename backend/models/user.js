const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
});

module.exports = mongoose.model('user', userSchema);