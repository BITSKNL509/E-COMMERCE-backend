const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    const order = new Order({ user: req.user.id, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}; 