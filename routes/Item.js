const express = require('express');
const router = express.Router();

// routes
router.post('/create', addItem);
router.get('/list', getAllItems);

module.exports = router;

function addItem(req, res, next) {}

function getAllItems(req, res, next) {}
