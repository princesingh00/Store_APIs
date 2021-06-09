const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
    res.send("Welcome to online shopping store APIs")
})

app.use('/user', require('./routes/User'));
app.use('/item', require('./routes/Item'));
app.use('/cart', require('./routes/Cart'));
app.use('/order', require('./routes/Item'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
})