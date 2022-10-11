const { productService } = require('../services');

const controllerGetAll = async (_req, res) => {
  const result = await productService.serviceGetAll();
  res.result(result.status).json(result.message);
};

module.exports = {
  controllerGetAll,
};