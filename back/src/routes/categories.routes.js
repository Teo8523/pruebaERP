import express from 'express';
import{
    create,
    updateByCode,
    deleteByCode,
    getAll,
    findByName,
    findByCode
} from '../controllers/categories.controller.js';

const routerCategories = express.Router();

routerCategories.post('/',create);
routerCategories.put('/code/:code',updateByCode);
routerCategories.delete('/code/:code',deleteByCode);
routerCategories.get('/',getAll);
routerCategories.get('/name/:name', findByName);
routerCategories.get('/code/:code', findByCode); 

export default routerCategories;