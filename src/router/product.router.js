const express = require('express');
const productController = require('../controllers/product.controller');
// const connection = require('../models/db/connection');

const productRouter = express.Router();

productRouter.get('/', productController.controllerGetAll);

productRouter.get('/:id', productController.controllerGetById);

module.exports = {
  productRouter,
};