const express = require('express');
const router = express.Router();
const user = require('../services/User')

// routes
router.post('/create', signup);
router.post('/login', authenticate);
router.get('/list', allUsers);

module.exports = router;

function signup(req, res, next) {
    user.signup(req.body)
        .then(user => user ?
            res.json(user) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function authenticate(req, res, next) {
    user.authenticate(req.body)
        .then(user => user ?
            res.json(user) :
            res.status(400).json({
                message: "invalid user ceredentials"
            }))
        .catch(err => next(err));
}

function allUsers(req, res) {
    user.allUsers(req.body)
        .then(users => users ?
            res.json(users) :
            res.status(400).json({
                message: "users not present"
            }))
        .catch(err => next(err));
}