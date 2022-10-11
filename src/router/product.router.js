const express = require('express');
const productController = require('../controllers/product.controller');
// const connection = require('../models/db/connection');

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.controllerGetById);

productRouter.post('/', productController.controllerInsert);

module.exports = {
  productRouter,
};