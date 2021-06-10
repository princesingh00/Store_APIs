const db = require('../config/db');
const Item = db.Item;
const Cart = db.Cart;
const User = db.User;
const Order = db.Order;
const jwt = require('jsonwebtoken');


module.exports = {
    createOrder,
    getOrdersByUser,
    getAllOrders
};

async function createOrder(params) {
    let userId = jwt.verify(params.userId,
        process.env.SCERET_KEY).sub;

    return await Order.create({
        userId: userId,
        cartId: params.cartId
    })
}

async function getOrdersByUser(params) {
    let userId = jwt.verify(params.userId,
        process.env.SCERET_KEY).sub;

    return await Order.find({ userId })
        .populate("cartId");
}

async function getAllOrders() {
    return await Order.find()
        .populate("cartId");
}

