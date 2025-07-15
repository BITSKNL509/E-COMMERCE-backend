const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/adminController');

router.get('/categories', getCategories);
router.post('/categories', auth, admin, createCategory);
router.put('/categories/:id', auth, admin, updateCategory);
router.delete('/categories/:id', auth, admin, deleteCategory);

module.exports = router; 