const productService = require('../services/product.service');

const controllerGetAll = async (_req, res) => {
  const result = await productService.serviceGetAll();
  res.status(result.status).json(result.message);
};

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.serviceGetById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

module.exports = {
  controllerGetAll,
  controllerGetById,
};