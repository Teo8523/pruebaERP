import Product from "../models/product.model.js";

export const createProduct = async (data) => {
    const model = Product.getModel();
    return await model.create(data);
};

// Obtener todos los productos activos
export const getProducts = async () => {
    const model = Product.getModel();
    return await model.find({ active: true }).populate('categories');
};

// Obtener un producto por su código
export const getProductByCode = async (code) => {
    const model = Product.getModel();
    return await model.findOne({ code }).populate('categories', 'name');
};

// Actualizar un producto por su código
export const updateProduct = async (code, data) => {
    const model = Product.getModel();
    return await model.findOneAndUpdate({ code }, data, { new: true }).populate('categories', 'name');
};

// Eliminar lógicamente un producto por su código
export const softDeleteProduct = async (code) => {
    const model = Product.getModel();
    return await model.findOneAndUpdate({ code }, { active: false }, { new: true });
};