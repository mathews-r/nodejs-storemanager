const express = require('express');

const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.get('/', salesController.controllerGetAll);

salesRouter.get('/:id', salesController.controllerGetById);

module.exports = {
  salesRouter,
};