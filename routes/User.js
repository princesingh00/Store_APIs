const express = require('express');
const router = express.Router();
const user = require('../services/User')

// routes
router.post('/create', signup);
router.post('/login', authenticate);
router.get('/list', allUsers);

module.exports = router;

function signup(req, res) {
    user.signup(req.body)
        .then(user => user ?
            res.status(201).json({
                user: user,
                message: "User Created Successfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong"
            }))
        .catch(err => res.status(409).json({
            message: err
        }));
}


function authenticate(req, res) {
    user.authenticate(req.body)
        .then(user => user ?
            res.status(200).json({
                user: user,
                message: "User LoggedIn Successfully"
            }) :
            res.status(401).json({
                message: "Invalid User Credentials"
            }))
        .catch(err => res.status(500).json({
            message: err
        }));
}


function allUsers(req, res, next) {
    user.allUsers(req.body)
        .then(users => users ?
            res.status(200).json({
                users: users,
                message: "User Fetched Successfully"
            }) :
            res.status(404).json({
                users: users,
                message: "Users Not Found"
            }))
        .catch(err => next(err));
}