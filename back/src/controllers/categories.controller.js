import * as categoryService from '../services/categories.service.js'
import CategoriesDto from "../dto/categories.dto.js";


export const create = async (req, res) => {
    try {
        const dto = new CategoriesDto(req.body);
        if (!dto.code || !dto.name) {
            return res.status(400).json({ error: 'Se requiere Codigo y nombre' })
        }

        const created = await categoryService.createCategory(dto);
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateByCode = async (req, res) => {
    try {
        const dto = new CategoriesDto(req.body);
        const update = await categoryService.updateCategoryByCode(req.params.code, dto);

        if (!update) return res.status(404).json({ message: "categoria no encontrada" });

        res.json(update);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const deleteByCode = async (req, res) => {
    try {
        const deleted = await categoryService.softDeleteByCode(req.params.code);
        if (!deleted) return res.status(404).json({ message: "categoria no encontrada" });

        res.json({ message: "Categoria desactivada", data: deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const categoriesd = await categoryService.getAllCategories();
        res.json(categoriesd)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const findByName = async (req, res) => {
    try {
        const category = await categoryService.findCategoryByName(req.params.name);
        if (!category) return res.status(404).json({ message: "Categoria no encontrada" });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const findByCode = async (req, res) => {
    try {
        const category = await categoryService.findCategoryBycode(req.params.code);
        if (!category) return res.status(404).json({ message: "Categoría no encontrada" });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};