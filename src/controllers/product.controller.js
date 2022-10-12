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

const controllerInsert = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.serviceInsert(name);

  if (type) return res.status(404).json({ message });

  res.status(201).json({ id: message, name });
};

const controllerDelete = async (req, res) => {
  const { message } = await productService.serviceDelete();

  if (!message) return res.status(404).json({ message });

  res.status(204).json();
};

module.exports = {
  controllerGetAll,
  controllerGetById,
  controllerInsert,
  controllerDelete,
};