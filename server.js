const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
    res.send("Welcome to online store APIs")
})

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
})