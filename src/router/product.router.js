const express = require('express');
const productController = require('../controllers/product.controller');
// const connection = require('../models/db/connection');

const productRouter = express.Router();

productController.get('/', productController.controllerGetAll);

module.exports = {
  productRouter,
};