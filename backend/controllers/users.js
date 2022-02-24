const bcrypt = require('bcryptjs');
const User = require('../models/user');
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
}