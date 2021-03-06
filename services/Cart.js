const db = require('../config/db');
const Item = db.Item;
const Cart = db.Cart;
const User = db.User;
const jwt = require('jsonwebtoken');


module.exports = {
    addItemInCart,
    convertCartToOrder,
    getCartByUser,
    getAllCarts
};

async function addItemInCart(params) {
    let userId = jwt.verify(params.userId,
        process.env.SCERET_KEY).sub;

    let cart = await Cart.findOne({
        userId: userId,
        isPurchased: false
    });

    if (cart) {
        cart.items.push(params.itemId);
        return await cart.save();
    } else {
        return await Cart.create({
            userId,
            items: [params.itemId]
        });
    }
}


async function convertCartToOrder(params) {
    let userId = jwt.verify(params.userId,
        process.env.SCERET_KEY).sub;

    return Cart.findByIdAndUpdate(params.cartId,
        { isPurchased: true },
        function (err, cart) {
            if (err)
                return err;
            else
                return cart;
        });
}


async function getCartByUser(token) {
    const userId = jwt.verify(token,
        process.env.SCERET_KEY).sub;

    return await Cart.findOne({
        userId: userId,
        isPurchased: false
    }).populate('items');
}


async function getAllCarts() {
    return await Cart.find()
        .populate('items');
}

