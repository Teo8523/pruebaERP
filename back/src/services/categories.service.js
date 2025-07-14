import CategoriasModel from "../models/.categorias.model.js";

export const createCategory = async(data) =>{
    return await CategoriasModel.create(data);
};

export const updateCategoryByCode = async (code, data) => {
    return await CategoriasModel.findOneAndUpdate({ code }, data, { new: true });
};

export const softDeleteByCode = async (code) => {
    return await CategoriasModel.findOneAndUpdate({ code }, { availability: false }, { new: true });
};

export const getAllCategories = async () => {
    return await CategoriasModel.find({ availability: true });
};

export const findCategoryByName = async (name) => {
    return await CategoriasModel.findOne({ name });
};


export const findCategoryBycode = async (code) => {
    return await CategoriasModel.findOne({ code });
};