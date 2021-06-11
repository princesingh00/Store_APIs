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
                message: "Your Order Placed Succesfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong, try again"
            }))
        .catch(err => next(err));
}


function getOrdersByUser(req, res, next) {
    order.getOrdersByUser(req.params)
        .then(order => order ?
            res.status(200).json({
                order: order,
                message: "Fetched Orders Succesfully"
            }) :
            res.status(400).json({
                message: "Orders Not Found"
            }))
        .catch(err => next(err));
}


function getAllOrders(req, res, next) {
    order.getAllOrders()
        .then(order => order ?
            res.status(200).json({
                order: order,
                message: "Fetched All Orders Succesfully"
            }) :
            res.status(400).json({
                message: "Orders Not Found"
            }))
        .catch(err => next(err));
}

