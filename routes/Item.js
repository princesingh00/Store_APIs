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
            res.status(201).json({
                item: item,
                message: "Item Added Successfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong"
            }))
        .catch(err => next(err));
}


function getAllItems(req, res, next) {
    item.allItems(req.body)
        .then(items =>
            res.status(200).json({
                items: items,
                message: "Items Fetched Successfully"
            }))
        .catch(err => next(err));
}
