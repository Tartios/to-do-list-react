const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
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
        select: false,
    }
});

userSchema.statics.findUserByCredentials = function (userName, password) {
    return this.findOne({ userName }).select('+password')
    .then((user) => {
        if(!user) {
            return Promise.reject(new Error('Неправильные почта или пароль'))
        }
        return bcrypt.compare(password, user.password)
        .then((matched) => {
            if(!matched) {
                return Promise.reject(new Error('Неправильные почта или пароль'));
            }
            return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);