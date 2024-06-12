const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/add', productController.addProduct);
router.post('/apply-discount', productController.applyDiscount);

module.exports = router;
