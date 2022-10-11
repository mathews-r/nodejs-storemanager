const express = require('express');
const productController = require('../controllers/product.controller');
const { nameValidation } = require('../middlewares/nameValidation');

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.controllerGetById);

productRouter.post('/', nameValidation, productController.controllerInsert);

module.exports = {
  productRouter,
};