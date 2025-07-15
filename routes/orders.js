const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  placeOrder,
  getUserOrders,
  getAllOrders,
} = require('../controllers/orderController');

router.post('/', auth, placeOrder);
router.get('/my', auth, getUserOrders);
router.get('/', auth, admin, getAllOrders);

module.exports = router; 