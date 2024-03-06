const express = require('express');
const productRouter = express.Router();
const {
    getProductById,
    addProduct,
    renderProducts,
    editProduct,
    deleteProduct,
} = require('../controllers/product.controller')

productRouter.get('/api/products', renderProducts);
productRouter.get('/api/products/:id', getProductById);
productRouter.post('/api/products', addProduct);
productRouter.put('/api/products/:id', editProduct);
productRouter.delete('/api/products/:id', deleteProduct);

module.exports = productRouter;
