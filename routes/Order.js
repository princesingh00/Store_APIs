const express = require('express');
const router = express.Router();
const order = require('../services/Order')

// routes
router.post('/create/:userId/:cartId', createOrder);
router.get('/list/:userId', getOrdersByUser);
router.get('/list', getAllOrders);

module.exports = router;

function createOrder(req, res, next) {
    order.createOrder(req.params)
        .then(order => order ?
            res.status(200).json({
                order: order,
                message: "ordered succesfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function getOrdersByUser(req, res, next) {
    order.getOrdersByUser(req.params)
        .then(order => order ?
            res.status(200).json({
                order: order,
                message: "fetched orders succesfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function getAllOrders(req, res, next) {
    order.getAllOrders()
        .then(order => order ?
            res.status(200).json({
                order: order,
                message: "fetched all orders succesfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

