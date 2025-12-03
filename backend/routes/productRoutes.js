const express = require('express');
const router = express.Router();
const productControllers = require("../controllers/productControllers");

// http://localhost:3000/api/product -> Crear Producto - Administrador
router.post('/api/product', productControllers.createProduct);

// http://localhost:3000/api/product/2 -> Eliminar Producto - Administrador
router.delete('/api/product/:product_id', productControllers.deleteProduct);

module.exports = router;