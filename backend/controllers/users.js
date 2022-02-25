const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hash,
        })
    )
    .then(user => res.send(user))
    .catch(err => console.log(err));
};

exports.signIn = (req, res) => {
    const { userName, password } = req.body;
    User.findUserByCredentials(userName, password)
    .then((user) => {
        const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
        res.send({ userName, password, token });
    })
    .catch(err => console.log(err));
}