const express = require('express');
const router = express.Router();
const item = require('../services/Item');

// routes
router.post('/create', addItem);
router.get('/list', getAllItems);

module.exports = router;

function addItem(req, res, next) {
    item.addItem(req.body)
        .then(item => item ?
            res.json(item) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function getAllItems(req, res, next) {
    item.allItems(req.body)
        .then(items => items ?
            res.json(items) :
            res.status(400).json({
                message: "items not found"
            }))
        .catch(err => next(err));
}
