const express = require('express');
const router = express.Router();

// routes
router.post('/create', signup);
router.post('/login', authenticate);
router.get('/list', allUsers);

module.exports = router;

function signup(req, res) { }

function authenticate(req, res) { }

function allUsers(req, res) { }