const express = require('express');

const salesController = require('../controllers/sales.controller');
const { productValidation, quantityValidation } = require('../middlewares/salesValidation');

const salesRouter = express.Router();

salesRouter.get('/', salesController.controllerGetAll);
salesRouter.get('/:id', salesController.controllerGetById);
salesRouter.post('/', productValidation, quantityValidation, salesController.controllerInsert);

module.exports = {
  salesRouter,
};