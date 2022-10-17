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
  const { id } = req.params;

  const { type, message } = await productService.serviceDelete(id);

  if (type) return res.status(404).json({ message });

  res.status(204).json();
};

const controllerUpdate = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const result = await productService.serviceUpdate(name, Number(id));

  if (result.type) return res.status(404).json({ message: result.message });

  res.status(200).json({ id: result.id, name });
};

const controllerGetByQuery = async (req, res) => {
  const { q } = req.query;
  const name = `%${q}%`;

  const result = await productService.serviceGetByQuery(name);

  if (result.type) return res.status(404).json([]);

  res.status(200).json(result);
};

module.exports = {
  controllerGetAll,
  controllerGetById,
  controllerInsert,
  controllerDelete,
  controllerUpdate,
  controllerGetByQuery,
};