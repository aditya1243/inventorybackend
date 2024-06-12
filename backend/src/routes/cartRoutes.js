const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add-to-cart', cartController.addToCart);
router.post('/remove-from-cart', cartController.removeFromCart);

module.exports = router;
