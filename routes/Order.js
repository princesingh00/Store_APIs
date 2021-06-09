const express = require('express');
const router = express.Router();

// routes
router.put('/list/:userId', getOrdersByUser);
router.get('/list', getAllOrders);

module.exports = router;

function getOrdersByUser(req, res, next) { }

function getAllOrders(req, res, next) { }

