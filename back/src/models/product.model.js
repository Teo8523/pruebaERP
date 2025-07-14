import BaseModel from './base.model.js';
import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        description: 'Código único de la bodega'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        description: 'Precio promedio de operación o mantenimiento (si aplica)'
    },
    location: {
        type: String,
        required: true,
        description: 'Ubicación física de la bodega'
    },
    description: {
        type: String,
        description: 'Descripción breve de la bodega'
    },
    image: {
        type: String,
        required: false,
        description: 'Ruta o nombre del archivo de imagen'
    },
    parentWarehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: false,
        description: 'Referencia opcional a otra bodega'
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: false,
        description: 'Categorías de productos que almacena esta bodega'
    }],
    active: {
        type: Boolean,
        required: true,
        description: 'Estado de disponibilidad de la bodega'
    }
}, { timestamps: true });

productsSchema.index({ code: 1 }, { name: 'codeIdx' });

export default class Product extends BaseModel {
    static schema = productsSchema;
    static collectionName = 'products';
}

Product.init();