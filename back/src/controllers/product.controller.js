import * as productService from '../services/products.service.js';

const ProductController = {
    async createProduct(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getProducts(req, res) {
        try {
            const products = await productService.getProducts();
            res.json(products); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getProductById(req, res) {
        try {
            const product = await productService.getProductByCode(req.params.id);
            if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateProduct(req, res) {
        try {
            const product = await productService.updateProduct(req.params.id, req.body);
            if (!product) return res.status(404).json({ error: 'Producto no encontrado para actualizar' });
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteProduct(req, res) {
        try {
            const deleted = await productService.softDeleteProduct(req.params.id);
            if (!deleted) return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
            res.json({ message: 'Producto eliminado lógicamente', product: deleted });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default ProductController;
