const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    
    if(!authorization || !authorization.startsWith('Bearer ')) {
        return res
        .status(401)
        .send({ message: 'Пожалуйста, авторизуйтесь' });
    }
    const token = authorization.replace('Bearer ', '');
    
    let payload;

    try {
    payload = jwt.verify(token, 'some-secret-key');
    } catch(err) {
        return res.status(401).send({ message: 'Пожалуйста, авторизуйтесь'});
    }

    req.user = payload;
    next();
};