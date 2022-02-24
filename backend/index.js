const express = require('express');
const { PORT = 3000 } = process.env;
const router = require('./routers/router');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const { createUser, signIn } = require('./controllers/users');
const auth = require('./middlewares/auth');

mongoose.connect('mongodb://localhost:27017/to-do');

app.use(express.static(path.join(__dirname, 'public')))

// app.use(middleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// const logger = () => {
//     console.log('Запрос залогирован'); Про логгирование еще раз почитай
//     next();
// }
// app.use(logger);
app.post('/signup', createUser);
app.post('/signin', signIn);
app.use(auth);
app.use('/', router);
app.listen(PORT, () => {
    console.log(`Listen ${PORT}`);
});