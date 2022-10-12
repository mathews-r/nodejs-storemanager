const salesService = require('../services/sales.service');

const controllerGetAll = async (_req, res) => {
  const result = await salesService.serviceGetAll();
  res.status(result.status).json(result.message);
};

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.serviceGetById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  controllerGetAll,
  controllerGetById,
};