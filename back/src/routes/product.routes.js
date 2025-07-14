import express from 'express';
import ProductController from '../controllers/product.controller.js';

const routerProduct = express.Router();

routerProduct.post('/', ProductController.createProduct);
routerProduct.get('/', ProductController.getProducts);
routerProduct.get('/:id', ProductController.getProductById);
routerProduct.put('/:id', ProductController.updateProduct);
routerProduct.delete('/:id', ProductController.deleteProduct);

export default routerProduct;