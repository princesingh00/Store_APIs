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
                message: "item added succesfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function convertCartToOrder(req, res, next) {
    cart.convertCartToOrder(req.params)
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "order placed succesfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}


function getCartByUser(req, res, next) {
    cart.getCartByUser(req.params.userId)
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "fetched cart successfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}

function getAllCarts(req, res, next) {
    cart.getAllCarts()
        .then(cart => cart ?
            res.status(200).json({
                cart: cart,
                message: "fetched all carts successfully"
            }) :
            res.status(400).json({
                message: "something went wrong"
            }))
        .catch(err => next(err));
}
