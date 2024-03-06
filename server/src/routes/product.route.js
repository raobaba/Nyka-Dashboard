const express = require('express');
const productRouter = express.Router();
const {
    getProductById,
    addProduct,
    renderProducts,
    editProduct,
    deleteProduct,
} = require('../controllers/product.controller')

productRouter.get('/products', renderProducts);
productRouter.get('/products/:id', getProductById);
productRouter.post('/products', addProduct);
productRouter.put('/products/:id', editProduct);
productRouter.delete('/products/:id', deleteProduct);

module.exports = productRouter;
