const express = require('express');
const router = express.Router();
const cart = require('../services/Cart')

// routes
router.post('/add/:userId/:itemId', addItemInCart);
router.put('/:cartId/complete/:userId', convertCartToOrder);
router.get('/list/:userId', getCartByUser);
router.get('/list', getAllCarts);

module.exports = router;

function addItemInCart(req, res, next) {
    cart.addItemInCart(req.params)
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "Item Added to Cart Succesfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong"
            }))
        .catch(err => next(err));
}


function convertCartToOrder(req, res, next) {
    cart.convertCartToOrder(req.params)
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "Your Order Placed Succesfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong"
            }))
        .catch(err => next(err));
}


function getCartByUser(req, res, next) {
    cart.getCartByUser(req.params.userId)
        .then(cart =>
            res.status(200).json({
                cart: cart,
                message: "Fetched Cart Successfully"
            }))
        .catch(err => next(err));
}

function getAllCarts(req, res, next) {
    cart.getAllCarts()
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "Fetched all Carts Successfully"
            }) :
            res.status(400).json({
                message: "Something Went Wrong"
            }))
        .catch(err => next(err));
}
