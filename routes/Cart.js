const express = require('express');
const router = express.Router();

// routes
router.post('/add/:userId', addItemInCart);
router.put('/:cartId/complete/:userId', convertCartToOrder);
router.get('/list', getAllCarts);

module.exports = router;

function addItemInCart(req, res, next) { }

function convertCartToOrder(req, res, next) { }

function getAllCarts(req, res, next) { }
